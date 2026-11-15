// ========================================================
// Certin90 – B2 & C1 Cambridge Trainer (90-Day Method)
// Application Logic, Per-Level State, Repair Loop & Streak Engine
// ========================================================

const STORAGE_KEY = "certin90_state_v1";
const LEGACY_STORAGE_KEYS = ["c1_cambridge_state_v1"];

const CATEGORY_ICONS = {
  inversions: "🔥",
  conditionals: "🔀",
  tenses_passive: "⏳",
  modals: "🔐",
  word_formation: "✏️",
  transformations: "🔄",
  register: "📝",
  collocations: "💎",
  open_cloze: "🧩",
  phrasals: "🚀"
};

function getLocalISODate(dateObj = new Date()) {
  const y = dateObj.getFullYear();
  const m = String(dateObj.getMonth() + 1).padStart(2, "0");
  const d = String(dateObj.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function addDaysISO(isoDateStr, deltaDays) {
  const [y, m, d] = isoDateStr.split("-").map(Number);
  const dt = new Date(y, m - 1, d);
  dt.setDate(dt.getDate() + deltaDays);
  return getLocalISODate(dt);
}

function diffDaysISO(startIso, endIso) {
  const [y1, m1, d1] = startIso.split("-").map(Number);
  const [y2, m2, d2] = endIso.split("-").map(Number);
  const t1 = new Date(y1, m1 - 1, d1).getTime();
  const t2 = new Date(y2, m2 - 1, d2).getTime();
  return Math.round((t2 - t1) / 86400000);
}

function formatCzechDateLabel(isoDateStr) {
  const [, m, d] = isoDateStr.split("-");
  return `${parseInt(d, 10)}.${parseInt(m, 10)}.`;
}

function shuffleArray(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function normalizeAnswer(str) {
  return String(str || "")
    .trim()
    .toLowerCase()
    .replace(/[’‘`]/g, "'")
    .replace(/\s+/g, " ")
    .replace(/[.,!?;:]+$/, "");
}

function createDailySessionForDate(bundle, startDate, targetDate) {
  const elapsed = Math.max(0, diffDaysISO(startDate, targetDate));
  const dayIndex = (elapsed % 90) + 1;
  const planIds = (bundle && bundle.dailyPlan && bundle.dailyPlan[dayIndex - 1])
    ? [...bundle.dailyPlan[dayIndex - 1]]
    : [];
  return {
    date: targetDate,
    dayIndex,
    batchIds: planIds,
    correctIds: [],
    currentWrongIds: [],
    queue: [...planIds],
    cursor: 0,
    phase: "initial" // "initial" | "repair_prompt" | "repair" | "completed"
  };
}

function createEmptyLevelProgress(bundle, today) {
  const topics = {};
  if (bundle && Array.isArray(bundle.topics)) {
    for (const t of bundle.topics) {
      topics[t.id] = null;
    }
  }
  return {
    startDate: today,
    daily: createDailySessionForDate(bundle, today, today),
    topics,
    mistakes: [],
    allSession: null,
    mistakesSession: null,
    diagnostic: {
      inProgress: null,
      lastResult: null
    }
  };
}

function createTopicSession(bundle, categoryId, previousMasteredIds = []) {
  const catIds = bundle.questions
    .filter((q) => q.category === categoryId)
    .map((q) => q.id);
  const masteredSet = new Set(previousMasteredIds);
  const unseen = catIds.filter((id) => !masteredSet.has(id));
  const phase = unseen.length === 0 && catIds.length > 0 ? "mastered" : "unseen";
  return {
    masteredIds: [...masteredSet],
    currentWrongIds: [],
    queue: shuffleArray(unseen),
    cursor: 0,
    phase // "unseen" | "repair_prompt" | "repair" | "mastered"
  };
}

class Certin90App {
  constructor(dataSources) {
    this.dataSources = dataSources || (typeof window !== "undefined" ? window.CERTIN90_DATA : {});
    this.theoryDB = (typeof THEORY_DATABASE !== "undefined")
      ? THEORY_DATABASE
      : (typeof window !== "undefined" && window.THEORY_DATABASE) ? window.THEORY_DATABASE : { b2: [], c1: [] };

    this.state = null;
    this.audioCtx = null;
    this.hasRenderedTheoryOnce = false;
    this.lastAnsweredQuestion = null;
    this.supabase = (typeof window !== "undefined" && window.CertinSupabaseClient)
      ? new window.CertinSupabaseClient()
      : null;
    this.cloudState = {
      syncStatus: "offline", // "offline" | "syncing" | "synced" | "error"
      plan: "free",
      dailyAiLimit: 2,
      lastSyncedAt: null
    };
    this._cloudSyncTimer = null;
  }

  init() {
    this.loadState();
    this.cacheDOM();
    this.bindEvents();
    this.checkDayRollover();

    if (!this.state.activeLevel) {
      this.state.activeLevel = "c1";
      this.openOnboardingModal();
    }

    this.ensureDailyForToday();
    this.renderHeaderAndMenu();
    this.renderCurrentView();
    this.initServiceWorker();

    if (this.supabase && this.supabase.isSignedIn()) {
      this.syncWithCloud({ pullFirst: true });
    }

    if (typeof window !== "undefined") {
      window.addEventListener("online", () => {
        if (this.supabase && this.supabase.isSignedIn()) {
          this.syncWithCloud({ pullFirst: false });
        }
      });
    }

    document.addEventListener("visibilitychange", () => {
      if (!document.hidden && this.checkDayRollover()) {
        this.renderHeaderAndMenu();
        this.renderCurrentView();
      }
    });
    window.addEventListener("focus", () => {
      if (this.checkDayRollover()) {
        this.renderHeaderAndMenu();
        this.renderCurrentView();
      }
    });
  }

  getActiveLevelKey() {
    return this.state.activeLevel === "b2" ? "b2" : "c1";
  }

  getBundle(levelKey = this.getActiveLevelKey()) {
    return this.dataSources[levelKey];
  }

  getQuestionById(qid, levelKey = this.getActiveLevelKey()) {
    const bundle = this.getBundle(levelKey);
    if (!bundle) return null;
    if (!this._questionIndexCache) this._questionIndexCache = {};
    if (!this._questionIndexCache[levelKey]) {
      const map = new Map();
      for (const q of bundle.questions) map.set(q.id, q);
      this._questionIndexCache[levelKey] = map;
    }
    return this._questionIndexCache[levelKey].get(qid) || null;
  }

  getLevelProgress(levelKey = this.getActiveLevelKey()) {
    const today = getLocalISODate();
    if (!this.state.levels[levelKey]) {
      this.state.levels[levelKey] = createEmptyLevelProgress(this.getBundle(levelKey), today);
    }
    return this.state.levels[levelKey];
  }

  loadState() {
    const today = getLocalISODate();
    let parsed = null;
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) parsed = JSON.parse(raw);
    } catch (e) {
      console.error("Failed parsing saved Certin90 state:", e);
    }

    let legacyStreak = 0;
    let legacyLastCompleted = null;
    if (!parsed) {
      for (const oldKey of LEGACY_STORAGE_KEYS) {
        try {
          const oldRaw = localStorage.getItem(oldKey);
          if (oldRaw) {
            const old = JSON.parse(oldRaw);
            if (old && old.streak && old.streak.count) {
              legacyStreak = old.streak.count;
              legacyLastCompleted = old.streak.lastCompletedDate || null;
            }
          }
        } catch (_) {}
      }
    }

    this.state = {
      activeLevel: parsed && (parsed.activeLevel === "b2" || parsed.activeLevel === "c1") ? parsed.activeLevel : null,
      soundEnabled: parsed && typeof parsed.soundEnabled === "boolean" ? parsed.soundEnabled : true,
      activeNavTab: parsed && parsed.activeNavTab === "theory" ? "theory" : "quiz",
      activeMode: parsed && parsed.activeMode ? parsed.activeMode : "daily",
      streak: parsed && parsed.streak ? parsed.streak : { count: legacyStreak, lastCompletedDate: legacyLastCompleted },
      todayStats: parsed && parsed.todayStats ? parsed.todayStats : { date: today, uniqueCorrectIds: [] },
      localUpdatedAt: parsed && parsed.localUpdatedAt ? parsed.localUpdatedAt : null,
      levels: {}
    };

    for (const lvl of ["b2", "c1"]) {
      const savedLvl = parsed && parsed.levels && parsed.levels[lvl] ? parsed.levels[lvl] : null;
      const bundle = this.getBundle(lvl);
      if (savedLvl) {
        this.state.levels[lvl] = {
          startDate: savedLvl.startDate || today,
          daily: savedLvl.daily || createDailySessionForDate(bundle, savedLvl.startDate || today, today),
          topics: savedLvl.topics || {},
          mistakes: Array.isArray(savedLvl.mistakes) ? savedLvl.mistakes : [],
          allSession: savedLvl.allSession || null,
          mistakesSession: savedLvl.mistakesSession || null,
          diagnostic: savedLvl.diagnostic || { inProgress: null, lastResult: null }
        };
      } else {
        this.state.levels[lvl] = createEmptyLevelProgress(bundle, today);
      }
    }

    this.checkStreakExpiration(today);
    if (this.state.activeLevel) {
      this.saveState({ skipCloudPush: true });
    }
  }

  saveState(options = {}) {
    try {
      if (!options.preserveTimestamp) {
        this.state.localUpdatedAt = new Date().toISOString();
      }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state));
    } catch (e) {
      console.error("Failed saving state:", e);
    }
    if (!options.skipCloudPush) {
      this.scheduleCloudPush();
    }
  }

  checkStreakExpiration(today = getLocalISODate()) {
    const yesterday = addDaysISO(today, -1);
    const last = this.state.streak.lastCompletedDate;
    if (last && last !== today && last !== yesterday && this.state.streak.count > 0) {
      this.state.streak.count = 0;
    }
  }

  checkDayRollover() {
    const today = getLocalISODate();
    let changed = false;

    if (this.state.todayStats.date !== today) {
      this.state.todayStats = { date: today, uniqueCorrectIds: [] };
      this.checkStreakExpiration(today);
      changed = true;
    }

    for (const lvl of ["b2", "c1"]) {
      const lp = this.getLevelProgress(lvl);
      if (!lp.daily || lp.daily.date !== today) {
        lp.daily = createDailySessionForDate(this.getBundle(lvl), lp.startDate || today, today);
        changed = true;
      }
    }

    if (changed) this.saveState();
    return changed;
  }

  ensureDailyForToday() {
    const today = getLocalISODate();
    const lvl = this.getActiveLevelKey();
    const lp = this.getLevelProgress(lvl);
    if (!lp.daily || lp.daily.date !== today || !Array.isArray(lp.daily.batchIds) || lp.daily.batchIds.length === 0) {
      lp.daily = createDailySessionForDate(this.getBundle(lvl), lp.startDate || today, today);
      this.saveState();
    }
    return lp.daily;
  }

  // ---- DOM Caching ----
  cacheDOM() {
    this.dom = {
      categoryMenuBtn: document.getElementById("categoryMenuBtn"),
      currentTopicName: document.getElementById("currentTopicName"),
      modeToggleBtn: document.getElementById("modeToggleBtn"),
      modeToggleIcon: document.getElementById("modeToggleIcon"),
      modeToggleLabel: document.getElementById("modeToggleLabel"),
      streakCount: document.getElementById("streakCount"),
      dailyProgressText: document.getElementById("dailyProgressText"),
      goalBadge: document.getElementById("goalBadge"),
      soundToggleBtn: document.getElementById("soundToggleBtn"),
      soundIcon: document.getElementById("soundIcon"),
      sessionProgressContainer: document.getElementById("sessionProgressContainer"),
      sessionProgressBar: document.getElementById("sessionProgressBar"),

      quizMain: document.getElementById("quizMain"),
      questionCard: document.getElementById("questionCard"),
      qLevelTag: document.getElementById("qLevelTag"),
      qCategoryTag: document.getElementById("qCategoryTag"),
      qCounterTag: document.getElementById("qCounterTag"),
      phaseBanner: document.getElementById("phaseBanner"),
      phaseBannerText: document.getElementById("phaseBannerText"),
      qInstruction: document.getElementById("qInstruction"),
      qPromptContext: document.getElementById("qPromptContext"),
      qPromptText: document.getElementById("qPromptText"),
      qKeyWord: document.getElementById("qKeyWord"),
      qQuestionText: document.getElementById("qQuestionText"),
      choiceOptionsContainer: document.getElementById("choiceOptionsContainer"),
      textInputContainer: document.getElementById("textInputContainer"),
      textAnswerInput: document.getElementById("textAnswerInput"),
      submitTextBtn: document.getElementById("submitTextBtn"),

      stateCard: document.getElementById("stateCard"),
      stateIcon: document.getElementById("stateIcon"),
      stateTitle: document.getElementById("stateTitle"),
      stateDesc: document.getElementById("stateDesc"),
      stateStatsPill: document.getElementById("stateStatsPill"),
      stateScoreText: document.getElementById("stateScoreText"),
      stateActions: document.getElementById("stateActions"),

      diagnosticResultCard: document.getElementById("diagnosticResultCard"),
      diagResultTitle: document.getElementById("diagResultTitle"),
      diagResultSubtitle: document.getElementById("diagResultSubtitle"),
      diagOverallScore: document.getElementById("diagOverallScore"),
      diagRecommendations: document.getElementById("diagRecommendations"),
      diagBreakdownList: document.getElementById("diagBreakdownList"),
      diagStartWeakestBtn: document.getElementById("diagStartWeakestBtn"),
      diagStartDailyBtn: document.getElementById("diagStartDailyBtn"),

      theoryView: document.getElementById("theoryView"),
      theoryHeaderTitle: document.getElementById("theoryHeaderTitle"),
      theoryLevelBadge: document.getElementById("theoryLevelBadge"),
      theoryHeaderSub: document.getElementById("theoryHeaderSub"),
      theorySearchInput: document.getElementById("theorySearchInput"),
      theoryChips: document.getElementById("theoryChips"),
      theoryCardsContainer: document.getElementById("theoryCardsContainer"),

      feedbackSheet: document.getElementById("feedbackSheet"),
      statusIcon: document.getElementById("statusIcon"),
      statusTitle: document.getElementById("statusTitle"),
      correctAnswerDisplay: document.getElementById("correctAnswerDisplay"),
      explanationText: document.getElementById("explanationText"),
      tipBox: document.getElementById("tipBox"),
      tipText: document.getElementById("tipText"),
      nextQuestionBtn: document.getElementById("nextQuestionBtn"),

      menuOverlay: document.getElementById("menuOverlay"),
      closeMenuBtn: document.getElementById("closeMenuBtn"),
      levelBtnB2: document.getElementById("levelBtnB2"),
      levelBtnC1: document.getElementById("levelBtnC1"),
      dailyTopicBtn: document.getElementById("dailyTopicBtn"),
      dailyMenuTitle: document.getElementById("dailyMenuTitle"),
      dailyPackDateLabel: document.getElementById("dailyPackDateLabel"),
      dailyStatusPill: document.getElementById("dailyStatusPill"),
      diagnosticTopicBtn: document.getElementById("diagnosticTopicBtn"),
      diagnosticStatusLabel: document.getElementById("diagnosticStatusLabel"),
      diagnosticLastPill: document.getElementById("diagnosticLastPill"),
      mistakesTopicItem: document.getElementById("mistakesTopicItem"),
      mistakesCountLabel: document.getElementById("mistakesCountLabel"),
      mistakesPill: document.getElementById("mistakesPill"),
      allTopicBtn: document.getElementById("allTopicBtn"),
      allMenuTitle: document.getElementById("allMenuTitle"),
      categoryTopicList: document.getElementById("categoryTopicList"),
      menuSoundToggleBtn: document.getElementById("menuSoundToggleBtn"),
      resetLevelTitle: document.getElementById("resetLevelTitle"),
      resetLevelBtn: document.getElementById("resetLevelBtn"),

      cloudSyncStatus: document.getElementById("cloudSyncStatus"),
      cloudPlanPill: document.getElementById("cloudPlanPill"),
      cloudAuthForm: document.getElementById("cloudAuthForm"),
      authEmailInput: document.getElementById("authEmailInput"),
      authPasswordInput: document.getElementById("authPasswordInput"),
      authSignInBtn: document.getElementById("authSignInBtn"),
      authSignUpBtn: document.getElementById("authSignUpBtn"),
      cloudAuthMsg: document.getElementById("cloudAuthMsg"),
      cloudSignedInBar: document.getElementById("cloudSignedInBar"),
      cloudUserEmail: document.getElementById("cloudUserEmail"),
      cloudSyncNowBtn: document.getElementById("cloudSyncNowBtn"),
      authSignOutBtn: document.getElementById("authSignOutBtn"),
      openEssayLabBtn: document.getElementById("openEssayLabBtn"),

      essayOverlay: document.getElementById("essayOverlay"),
      closeEssayBtn: document.getElementById("closeEssayBtn"),
      essayQuotaLabel: document.getElementById("essayQuotaLabel"),
      essayAuthNotice: document.getElementById("essayAuthNotice"),
      essayOpenAuthBtn: document.getElementById("essayOpenAuthBtn"),
      essayLevelSelect: document.getElementById("essayLevelSelect"),
      essayTaskSelect: document.getElementById("essayTaskSelect"),
      essayPromptInput: document.getElementById("essayPromptInput"),
      essayTextInput: document.getElementById("essayTextInput"),
      essayWordCount: document.getElementById("essayWordCount"),
      gradeEssaySubmitBtn: document.getElementById("gradeEssaySubmitBtn"),
      essayStatusMsg: document.getElementById("essayStatusMsg"),
      essayResultContainer: document.getElementById("essayResultContainer"),
      essayHistoryContainer: document.getElementById("essayHistoryContainer"),

      onboardingOverlay: document.getElementById("onboardingOverlay"),
      celebrationOverlay: document.getElementById("celebrationOverlay"),
      celebrationStreakVal: document.getElementById("celebrationStreakVal"),
      closeCelebrationBtn: document.getElementById("closeCelebrationBtn")
    };
  }

  bindEvents() {
    this.dom.categoryMenuBtn.addEventListener("click", () => {
      this.renderMenuOverlay();
      this.dom.menuOverlay.classList.add("visible");
    });

    this.dom.closeMenuBtn.addEventListener("click", () => {
      this.dom.menuOverlay.classList.remove("visible");
    });

    this.dom.menuOverlay.addEventListener("click", (e) => {
      if (e.target === this.dom.menuOverlay) {
        this.dom.menuOverlay.classList.remove("visible");
      }
    });

    this.dom.modeToggleBtn.addEventListener("click", () => {
      const nextTab = this.state.activeNavTab === "quiz" ? "theory" : "quiz";
      this.switchNavTab(nextTab);
    });

    this.dom.soundToggleBtn.addEventListener("click", () => this.toggleSound());
    this.dom.menuSoundToggleBtn.addEventListener("click", () => this.toggleSound());

    // Level Switcher inside Settings Menu
    this.dom.levelBtnB2.addEventListener("click", () => this.switchLevel("b2"));
    this.dom.levelBtnC1.addEventListener("click", () => this.switchLevel("c1"));

    // Primary Modes inside Menu
    this.dom.dailyTopicBtn.addEventListener("click", () => this.selectMode("daily"));
    this.dom.diagnosticTopicBtn.addEventListener("click", () => this.selectMode("diagnostic"));
    this.dom.mistakesTopicItem.addEventListener("click", () => this.selectMode("mistakes"));
    this.dom.allTopicBtn.addEventListener("click", () => this.selectMode("all"));

    this.dom.resetLevelBtn.addEventListener("click", () => this.confirmResetLevel());

    // Cloud Auth & Essay Lab
    if (this.dom.authSignInBtn) {
      this.dom.authSignInBtn.addEventListener("click", () => this.handleCloudAuth("signin"));
    }
    if (this.dom.authSignUpBtn) {
      this.dom.authSignUpBtn.addEventListener("click", () => this.handleCloudAuth("signup"));
    }
    if (this.dom.cloudSyncNowBtn) {
      this.dom.cloudSyncNowBtn.addEventListener("click", () => this.syncWithCloud({ pullFirst: true }));
    }
    if (this.dom.authSignOutBtn) {
      this.dom.authSignOutBtn.addEventListener("click", () => this.handleCloudSignOut());
    }
    if (this.dom.openEssayLabBtn) {
      this.dom.openEssayLabBtn.addEventListener("click", () => this.openEssayLab());
    }
    if (this.dom.closeEssayBtn) {
      this.dom.closeEssayBtn.addEventListener("click", () => this.dom.essayOverlay.classList.remove("visible"));
    }
    if (this.dom.essayOverlay) {
      this.dom.essayOverlay.addEventListener("click", (e) => {
        if (e.target === this.dom.essayOverlay) this.dom.essayOverlay.classList.remove("visible");
      });
    }
    if (this.dom.essayOpenAuthBtn) {
      this.dom.essayOpenAuthBtn.addEventListener("click", () => {
        this.dom.essayOverlay.classList.remove("visible");
        this.renderMenuOverlay();
        this.dom.menuOverlay.classList.add("visible");
        if (this.dom.authEmailInput) this.dom.authEmailInput.focus();
      });
    }
    if (this.dom.essayTextInput) {
      this.dom.essayTextInput.addEventListener("input", () => {
        const words = (this.dom.essayTextInput.value || "").trim().split(/\s+/).filter(Boolean).length;
        this.dom.essayWordCount.textContent = `${words} slov`;
      });
    }
    if (this.dom.gradeEssaySubmitBtn) {
      this.dom.gradeEssaySubmitBtn.addEventListener("click", () => this.submitEssayForGrading());
    }

    // Onboarding Level Pickers
    document.querySelectorAll(".onboarding-level-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const chosen = btn.dataset.level === "b2" ? "b2" : "c1";
        this.dom.onboardingOverlay.classList.remove("visible");
        this.state.activeLevel = chosen;
        this.state.activeMode = "diagnostic";
        this.state.activeNavTab = "quiz";
        this.startNewDiagnostic();
        this.saveState();
        this.renderHeaderAndMenu();
        this.renderCurrentView();
      });
    });

    // Theory Search
    this.dom.theorySearchInput.addEventListener("input", () => {
      this.renderTheory();
    });

    // Theory Chips horizontal scroll: mouse wheel + click-and-drag on desktop PC
    const chipsEl = this.dom.theoryChips;
    let isDraggingChips = false;
    let didDragChips = false;
    let dragStartX = 0;
    let dragStartScroll = 0;

    chipsEl.addEventListener("wheel", (e) => {
      if (chipsEl.scrollWidth > chipsEl.clientWidth && Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        chipsEl.scrollLeft += e.deltaY;
      }
    }, { passive: false });

    chipsEl.addEventListener("mousedown", (e) => {
      if (e.button !== 0) return;
      isDraggingChips = true;
      didDragChips = false;
      dragStartX = e.clientX;
      dragStartScroll = chipsEl.scrollLeft;
      chipsEl.classList.add("is-dragging");
    });

    window.addEventListener("mousemove", (e) => {
      if (!isDraggingChips) return;
      const dx = e.clientX - dragStartX;
      if (Math.abs(dx) > 5) didDragChips = true;
      chipsEl.scrollLeft = dragStartScroll - dx;
    });

    window.addEventListener("mouseup", () => {
      if (!isDraggingChips) return;
      isDraggingChips = false;
      chipsEl.classList.remove("is-dragging");
    });

    chipsEl.addEventListener("click", (e) => {
      if (didDragChips) {
        e.preventDefault();
        e.stopPropagation();
        didDragChips = false;
      }
    }, true);

    // Submit text answer
    this.dom.submitTextBtn.addEventListener("click", () => {
      this.handleTextSubmit();
    });
    this.dom.textAnswerInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        if (this.dom.feedbackSheet.classList.contains("visible")) {
          this.nextQuestion();
        } else {
          this.handleTextSubmit();
        }
      }
    });

    // Next Question button
    this.dom.nextQuestionBtn.addEventListener("click", () => {
      this.nextQuestion();
    });

    // Celebration Close
    this.dom.closeCelebrationBtn.addEventListener("click", () => {
      this.dom.celebrationOverlay.classList.remove("visible");
    });
    this.dom.celebrationOverlay.addEventListener("click", (e) => {
      if (e.target === this.dom.celebrationOverlay) {
        this.dom.celebrationOverlay.classList.remove("visible");
      }
    });

    // Diagnostic action buttons
    this.dom.diagStartDailyBtn.addEventListener("click", () => {
      this.selectMode("daily");
    });

    // Global Enter when feedback sheet open
    document.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && this.dom.feedbackSheet.classList.contains("visible")) {
        e.preventDefault();
        this.nextQuestion();
      }
    });
  }

  openOnboardingModal() {
    this.dom.onboardingOverlay.classList.add("visible");
  }

  toggleSound() {
    this.state.soundEnabled = !this.state.soundEnabled;
    this.saveState();
    this.updateSoundUI();
  }

  updateSoundUI() {
    const on = this.state.soundEnabled;
    this.dom.soundIcon.textContent = on ? "🔊" : "🔇";
    this.dom.soundToggleBtn.style.opacity = on ? "1" : "0.55";
    this.dom.menuSoundToggleBtn.textContent = on ? "Zapnuto" : "Vypnuto";
  }

  switchLevel(newLevel) {
    if (newLevel !== "b2" && newLevel !== "c1") return;
    if (this.state.activeLevel === newLevel) return;
    this.hideFeedbackSheet();
    this.state.activeLevel = newLevel;
    // Preserve daily vs diagnostic vs mistakes cleanly; reset category if invalid on target level
    const bundle = this.getBundle(newLevel);
    const validCats = new Set(bundle.topics.map((t) => t.id));
    if (!["daily", "all", "mistakes", "diagnostic"].includes(this.state.activeMode) && !validCats.has(this.state.activeMode)) {
      this.state.activeMode = "daily";
    }
    this.ensureDailyForToday();
    this.saveState();
    this.renderHeaderAndMenu();
    this.renderMenuOverlay();
    this.renderCurrentView();
  }

  selectMode(modeKey) {
    this.hideFeedbackSheet();
    this.state.activeMode = modeKey;
    this.state.activeNavTab = "quiz";

    const lvl = this.getActiveLevelKey();
    const lp = this.getLevelProgress(lvl);
    const bundle = this.getBundle(lvl);

    if (modeKey === "diagnostic") {
      if (!lp.diagnostic.inProgress) {
        // Start fresh diagnostic if none running (or allow launching directly)
        this.startNewDiagnostic();
      }
    } else if (modeKey === "mistakes") {
      lp.mistakesSession = {
        queue: shuffleArray(lp.mistakes),
        cursor: 0,
        wrongThisPass: []
      };
    } else if (modeKey === "all") {
      this.ensureAllSession();
    } else if (modeKey !== "daily") {
      // Category mode (X / 130)
      if (!lp.topics[modeKey]) {
        lp.topics[modeKey] = createTopicSession(bundle, modeKey, []);
      }
    }

    this.saveState();
    this.dom.menuOverlay.classList.remove("visible");
    this.renderHeaderAndMenu();
    this.renderCurrentView();
  }

  startNewDiagnostic() {
    const lvl = this.getActiveLevelKey();
    const lp = this.getLevelProgress(lvl);
    const bundle = this.getBundle(lvl);
    lp.diagnostic.inProgress = {
      queue: [...bundle.diagnosticIds],
      cursor: 0,
      answers: {}
    };
  }

  ensureAllSession() {
    const lvl = this.getActiveLevelKey();
    const lp = this.getLevelProgress(lvl);
    const bundle = this.getBundle(lvl);

    if (lp.allSession && lp.allSession.queue && lp.allSession.cursor < lp.allSession.queue.length) {
      return lp.allSession;
    }

    // Prioritise unseen questions across topics
    const masteredSet = new Set();
    for (const catId of Object.keys(lp.topics || {})) {
      const ts = lp.topics[catId];
      if (ts && Array.isArray(ts.masteredIds)) {
        for (const id of ts.masteredIds) masteredSet.add(id);
      }
    }

    const unseen = bundle.questions.filter((q) => !masteredSet.has(q.id)).map((q) => q.id);
    const pool = unseen.length > 0 ? unseen : bundle.questions.map((q) => q.id);
    lp.allSession = {
      queue: shuffleArray(pool),
      cursor: 0
    };
    return lp.allSession;
  }

  confirmResetLevel() {
    const lvl = this.getActiveLevelKey();
    const label = lvl === "b2" ? "B2 First (FCE)" : "C1 Advanced (CAE)";
    const ok = window.confirm(`Opravdu chceš vymazat postup okruhů (0/130) a dnešní dávku pro úroveň ${label}?`);
    if (!ok) return;

    const today = getLocalISODate();
    this.state.levels[lvl] = createEmptyLevelProgress(this.getBundle(lvl), today);
    this.state.activeMode = "daily";
    this.hideFeedbackSheet();
    this.saveState();
    this.renderHeaderAndMenu();
    this.renderMenuOverlay();
    this.renderCurrentView();
  }

  switchNavTab(tabName) {
    this.state.activeNavTab = tabName;
    this.saveState();
    this.hideFeedbackSheet();
    this.renderHeaderAndMenu();
    this.renderCurrentView();
  }

  // ---- Header, Menu & Settings Rendering ----
  renderHeaderAndMenu() {
    const lvl = this.getActiveLevelKey();
    const lvlUpper = lvl.toUpperCase();
    const lp = this.getLevelProgress(lvl);
    const daily = this.ensureDailyForToday();
    const bundle = this.getBundle(lvl);

    // Compact header label
    const mode = this.state.activeMode;
    let label = `Den ${daily.dayIndex} · ${lvlUpper}`;
    if (mode === "diagnostic") label = `Test · ${lvlUpper}`;
    else if (mode === "mistakes") label = `Chyby · ${lvlUpper}`;
    else if (mode === "all") label = `Vše · ${lvlUpper}`;
    else if (mode !== "daily") {
      const meta = bundle.topics.find((t) => t.id === mode);
      const ts = lp.topics[mode];
      const done = ts ? ts.masteredIds.length : 0;
      label = meta ? `${meta.shortLabel} (${done}/130)` : lvlUpper;
    }
    this.dom.currentTopicName.textContent = label;

    // Nav Toggle Button
    if (this.state.activeNavTab === "theory") {
      this.dom.modeToggleIcon.textContent = "🎯";
      this.dom.modeToggleLabel.textContent = "Do testů";
    } else {
      this.dom.modeToggleIcon.textContent = "📖";
      this.dom.modeToggleLabel.textContent = "Studovna";
    }

    // Streak & Daily Unique Correct Goal (out of 20 across ALL modes!)
    this.dom.streakCount.textContent = this.state.streak.count;
    const todayCorrectCount = this.state.todayStats.uniqueCorrectIds.length;
    this.dom.dailyProgressText.textContent = `${Math.min(todayCorrectCount, 20)}/20`;
    if (todayCorrectCount >= 20) {
      this.dom.goalBadge.classList.add("goal-completed");
    } else {
      this.dom.goalBadge.classList.remove("goal-completed");
    }

    this.updateSoundUI();
  }

  renderMenuOverlay() {
    const lvl = this.getActiveLevelKey();
    const lp = this.getLevelProgress(lvl);
    const daily = this.ensureDailyForToday();
    const bundle = this.getBundle(lvl);
    const todayLabel = formatCzechDateLabel(getLocalISODate());

    this.dom.levelBtnB2.classList.toggle("active", lvl === "b2");
    this.dom.levelBtnC1.classList.toggle("active", lvl === "c1");

    // Highlight active mode button
    document.querySelectorAll(".topic-item").forEach((el) => {
      el.classList.toggle("active", el.dataset.topic === this.state.activeMode);
    });

    // Daily status
    const dailyCorrectCount = daily.correctIds.length;
    const dailyTotal = daily.batchIds.length || 20;
    this.dom.dailyMenuTitle.textContent = `Dnešní dávka (Den ${daily.dayIndex} / 90)`;
    if (daily.phase === "completed") {
      this.dom.dailyPackDateLabel.textContent = `Dnes (${todayLabel}) hotovo! Všech 20/20 opraveno.`;
      this.dom.dailyStatusPill.textContent = "20/20 ✓";
      this.dom.dailyStatusPill.classList.add("is-done");
    } else if (daily.phase === "repair_prompt" || daily.phase === "repair") {
      this.dom.dailyPackDateLabel.textContent = `Oprava zbývajících chyb (${daily.currentWrongIds.length + (daily.queue.length - daily.cursor)} zbývá)`;
      this.dom.dailyStatusPill.textContent = `${dailyCorrectCount}/${dailyTotal}`;
      this.dom.dailyStatusPill.classList.remove("is-done");
    } else {
      this.dom.dailyPackDateLabel.textContent = `Dnes ${todayLabel} · ${dailyCorrectCount}/${dailyTotal} správně`;
      this.dom.dailyStatusPill.textContent = `${dailyCorrectCount}/${dailyTotal}`;
      this.dom.dailyStatusPill.classList.remove("is-done");
    }

    // Diagnostic status
    if (lp.diagnostic.inProgress) {
      this.dom.diagnosticStatusLabel.textContent = `Rozpracováno: otázka ${lp.diagnostic.inProgress.cursor + 1} / 21`;
      this.dom.diagnosticLastPill.textContent = "Pokračovat";
      this.dom.diagnosticLastPill.classList.remove("is-done");
    } else if (lp.diagnostic.lastResult) {
      const r = lp.diagnostic.lastResult;
      this.dom.diagnosticStatusLabel.textContent = `Poslední výsledek: ${r.totalCorrect}/${r.totalQuestions} (${formatCzechDateLabel(r.date)}) · Lze opakovat`;
      this.dom.diagnosticLastPill.textContent = `${Math.round((r.totalCorrect / r.totalQuestions) * 100)}%`;
      this.dom.diagnosticLastPill.classList.add("is-done");
    } else {
      this.dom.diagnosticStatusLabel.textContent = "Dobrovolný rozřazovací test (3 z každého okruhu)";
      this.dom.diagnosticLastPill.textContent = "Spustit";
      this.dom.diagnosticLastPill.classList.remove("is-done");
    }

    // Mistakes status
    const mCount = lp.mistakes.length;
    this.dom.mistakesCountLabel.textContent = mCount === 0
      ? "Žádné uložené chyby pro tento level"
      : `${mCount} chybných otázek k procvičení`;
    this.dom.mistakesPill.textContent = `${mCount}`;

    this.dom.allMenuTitle.textContent = `Kompletní ${lvl.toUpperCase()} databáze (910 otázek)`;
    this.dom.resetLevelTitle.textContent = `🗑️ Reset postupu pro úroveň ${lvl.toUpperCase()}`;

    // Render 7 Category Items with X / 130 progress bars
    this.dom.categoryTopicList.innerHTML = "";
    for (const topic of bundle.topics) {
      const ts = lp.topics[topic.id];
      const doneCount = ts ? ts.masteredIds.length : 0;
      const pct = Math.round((doneCount / topic.total) * 100);
      const isMastered = doneCount >= topic.total;

      const btn = document.createElement("button");
      btn.className = `topic-item${this.state.activeMode === topic.id ? " active" : ""}`;
      btn.dataset.topic = topic.id;
      btn.innerHTML = `
        <span class="topic-icon">${CATEGORY_ICONS[topic.id] || "📘"}</span>
        <div class="topic-info">
          <strong>${topic.label}</strong>
          <small>${doneCount} / ${topic.total} zvládnuto (${pct}%)</small>
          <div class="topic-progress-wrap">
            <div class="topic-progress-fill${isMastered ? " is-mastered" : ""}" style="width: ${pct}%;"></div>
          </div>
        </div>
        <span class="topic-status-pill${isMastered ? " is-done" : ""}">${isMastered ? "130/130 🏆" : `${doneCount}/130`}</span>
      `;
      btn.addEventListener("click", () => this.selectMode(topic.id));
      this.dom.categoryTopicList.appendChild(btn);
    }

    this.renderCloudSyncUI();
  }

  // ---- Main View Router ----
  renderCurrentView() {
    if (this.state.activeNavTab === "theory") {
      this.dom.quizMain.style.display = "none";
      this.dom.sessionProgressContainer.style.display = "none";
      this.dom.theoryView.style.display = "block";
      this.renderTheorySectionChrome();
      this.renderTheory();
      return;
    }

    this.dom.theoryView.style.display = "none";
    this.dom.quizMain.style.display = "flex";
    this.dom.sessionProgressContainer.style.display = "block";

    this.renderQuizModeView();
  }

  renderQuizModeView() {
    const mode = this.state.activeMode;
    const lvl = this.getActiveLevelKey();
    const lp = this.getLevelProgress(lvl);
    const bundle = this.getBundle(lvl);

    // Hide all subcards first
    this.dom.questionCard.style.display = "none";
    this.dom.stateCard.style.display = "none";
    this.dom.diagnosticResultCard.style.display = "none";

    if (mode === "daily") {
      const daily = this.ensureDailyForToday();
      if (daily.phase === "completed") {
        this.showDailyCompletedState(daily);
        return;
      }
      if (daily.phase === "repair_prompt") {
        this.showDailyRepairPrompt(daily);
        return;
      }
      const qid = daily.queue[daily.cursor];
      const q = this.getQuestionById(qid, lvl);
      if (!q) {
        this.showDailyCompletedState(daily);
        return;
      }
      this.renderQuestionCard(q, {
        counterText: daily.phase === "repair"
          ? `Oprava ${daily.cursor + 1} / ${daily.queue.length}`
          : `${daily.correctIds.length + 1} / ${daily.batchIds.length}`,
        bannerText: daily.phase === "repair"
          ? `🛠️ Oprava chyb (${daily.correctIds.length}/${daily.batchIds.length} hotovo)`
          : `📅 Den ${daily.dayIndex}/90 · ${daily.correctIds.length}/${daily.batchIds.length} hotovo`,
        progressPct: (daily.correctIds.length / (daily.batchIds.length || 20)) * 100
      });
      return;
    }

    if (mode === "diagnostic") {
      const diag = lp.diagnostic;
      if (diag.inProgress && diag.inProgress.cursor < diag.inProgress.queue.length) {
        const qid = diag.inProgress.queue[diag.inProgress.cursor];
        const q = this.getQuestionById(qid, lvl);
        this.renderQuestionCard(q, {
          counterText: `Test ${diag.inProgress.cursor + 1} / 21`,
          bannerText: "🧭 Vstupní diagnostický test (3 otázky z každého okruhu)",
          progressPct: (diag.inProgress.cursor / 21) * 100
        });
        return;
      }
      if (diag.lastResult) {
        this.renderDiagnosticResultCard(diag.lastResult);
        return;
      }
      this.startNewDiagnostic();
      this.saveState();
      this.renderQuizModeView();
      return;
    }

    if (mode === "mistakes") {
      if (lp.mistakes.length === 0) {
        this.showEmptyMistakesState();
        return;
      }
      if (!lp.mistakesSession || !lp.mistakesSession.queue) {
        lp.mistakesSession = { queue: shuffleArray(lp.mistakes), cursor: 0, wrongThisPass: [] };
      }
      const ms = lp.mistakesSession;
      if (ms.cursor >= ms.queue.length) {
        if (ms.wrongThisPass && ms.wrongThisPass.length > 0) {
          ms.queue = shuffleArray(ms.wrongThisPass);
          ms.wrongThisPass = [];
          ms.cursor = 0;
        } else {
          this.showEmptyMistakesState();
          return;
        }
      }
      const q = this.getQuestionById(ms.queue[ms.cursor], lvl);
      if (!q) {
        this.showEmptyMistakesState();
        return;
      }
      this.renderQuestionCard(q, {
        counterText: `Chyba ${ms.cursor + 1} / ${ms.queue.length}`,
        bannerText: `❌ Opáčko chyb (${lp.mistakes.length} v bance)`,
        progressPct: (ms.cursor / ms.queue.length) * 100
      });
      return;
    }

    if (mode === "all") {
      const allS = this.ensureAllSession();
      const q = this.getQuestionById(allS.queue[allS.cursor], lvl);
      this.renderQuestionCard(q, {
        counterText: `Mix ${allS.cursor + 1} / ${allS.queue.length}`,
        bannerText: `🎲 Kompletní ${lvl.toUpperCase()} databáze (910 otázek)`,
        progressPct: (allS.cursor / allS.queue.length) * 100
      });
      return;
    }

    // Specific Topic Category (130 unique questions)
    if (!lp.topics[mode]) {
      lp.topics[mode] = createTopicSession(bundle, mode, []);
    }
    const ts = lp.topics[mode];
    const meta = bundle.topics.find((t) => t.id === mode);
    const totalCat = meta ? meta.total : 130;

    if (ts.phase === "mastered" || ts.masteredIds.length >= totalCat) {
      ts.phase = "mastered";
      this.showTopicMasteredState(mode, meta, ts);
      return;
    }

    if (ts.phase === "repair_prompt") {
      this.showTopicRepairPrompt(mode, meta, ts);
      return;
    }

    const qid = ts.queue[ts.cursor];
    const q = this.getQuestionById(qid, lvl);
    if (!q) {
      if (ts.currentWrongIds.length > 0) {
        ts.phase = "repair_prompt";
        this.showTopicRepairPrompt(mode, meta, ts);
      } else {
        ts.phase = "mastered";
        this.showTopicMasteredState(mode, meta, ts);
      }
      return;
    }

    this.renderQuestionCard(q, {
      counterText: `${ts.masteredIds.length + 1} / ${totalCat}`,
      bannerText: ts.phase === "repair"
        ? `🛠️ Oprava chyb okruhu (${ts.masteredIds.length}/${totalCat} zvládnuto)`
        : null,
      progressPct: (ts.masteredIds.length / totalCat) * 100
    });
  }

  renderQuestionCard(q, metaInfo) {
    this.currentQuestionObj = q;
    const lvlUpper = (q.level || this.getActiveLevelKey()).toUpperCase();

    this.dom.questionCard.style.display = "block";
    this.dom.qLevelTag.textContent = lvlUpper;
    this.dom.qLevelTag.classList.toggle("is-b2", lvlUpper === "B2");
    this.dom.qCategoryTag.textContent = q.categoryLabel;
    this.dom.qCounterTag.textContent = metaInfo.counterText || "";
    this.dom.sessionProgressBar.style.width = `${Math.min(100, Math.max(0, metaInfo.progressPct || 0))}%`;

    if (metaInfo.bannerText) {
      this.dom.phaseBannerText.textContent = metaInfo.bannerText;
      this.dom.phaseBanner.style.display = "flex";
    } else {
      this.dom.phaseBanner.style.display = "none";
    }

    this.dom.qInstruction.textContent = q.instruction;

    if (q.promptContext) {
      this.dom.qPromptContext.style.display = "block";
      this.dom.qPromptText.textContent = q.promptContext;
      this.dom.qKeyWord.textContent = q.keyWord || "";
    } else {
      this.dom.qPromptContext.style.display = "none";
    }

    this.dom.qQuestionText.innerHTML = q.question.replace(
      /_{3,}/g,
      '<span class="blank-highlight" aria-label="prázdné místo">________</span>'
    );

    if (q.type === "choice") {
      this.dom.choiceOptionsContainer.style.display = "flex";
      this.dom.textInputContainer.style.display = "none";
      this.renderChoiceOptions(q);
    } else {
      this.dom.choiceOptionsContainer.style.display = "none";
      this.dom.textInputContainer.style.display = "flex";
      this.dom.textAnswerInput.value = "";
      this.dom.textAnswerInput.disabled = false;
      this.dom.submitTextBtn.disabled = false;
      this.dom.textAnswerInput.className = "c1-input";
      setTimeout(() => {
        if (!this.dom.menuOverlay.classList.contains("visible") &&
            !this.dom.onboardingOverlay.classList.contains("visible")) {
          this.dom.textAnswerInput.focus();
        }
      }, 60);
    }
  }

  renderChoiceOptions(q) {
    this.dom.choiceOptionsContainer.innerHTML = "";
    const letters = ["A", "B", "C", "D"];
    q.options.forEach((optText, idx) => {
      const btn = document.createElement("button");
      btn.className = "option-btn";
      btn.innerHTML = `<span class="option-letter">${letters[idx]}</span> <span>${optText}</span>`;
      btn.addEventListener("click", () => this.handleChoiceSubmit(idx, btn));
      this.dom.choiceOptionsContainer.appendChild(btn);
    });
  }

  // ---- State Screens (Daily Repair Prompt, Daily Done, Topic Mastered, Empty Mistakes, Diagnostic Result) ----
  showDailyRepairPrompt(daily) {
    const remaining = daily.currentWrongIds.length;
    const done = daily.correctIds.length;
    const total = daily.batchIds.length || 20;

    this.dom.sessionProgressBar.style.width = `${(done / total) * 100}%`;
    this.dom.stateCard.style.display = "block";
    this.dom.stateIcon.textContent = "🛠️";
    this.dom.stateTitle.textContent = "Dnešních 20 otázek dokončeno";
    this.dom.stateDesc.textContent =
      `Máš správně ${done} z ${total}. Pokračuj v opravě zbývajících ${remaining} chybných otázek — každá opravená se ti přičte k dnešním ${done} a přiblíží tě k dennímu streaku!`;
    this.dom.stateStatsPill.style.display = "inline-block";
    this.dom.stateScoreText.textContent = `${done} / ${total} správně · zbývá opravit ${remaining}`;

    this.dom.stateActions.innerHTML = "";
    const repairBtn = document.createElement("button");
    repairBtn.className = "primary-btn";
    repairBtn.textContent = `Opravit zbývající chyby (${remaining}) 🛠️`;
    repairBtn.addEventListener("click", () => {
      daily.queue = shuffleArray(daily.currentWrongIds);
      daily.currentWrongIds = [];
      daily.cursor = 0;
      daily.phase = "repair";
      this.saveState();
      this.renderHeaderAndMenu();
      this.renderQuizModeView();
    });
    this.dom.stateActions.appendChild(repairBtn);

    const menuBtn = document.createElement("button");
    menuBtn.className = "secondary-btn";
    menuBtn.textContent = "Vybrat jiný okruh / Studovna";
    menuBtn.addEventListener("click", () => {
      this.renderMenuOverlay();
      this.dom.menuOverlay.classList.add("visible");
    });
    this.dom.stateActions.appendChild(menuBtn);
  }

  showDailyCompletedState(daily) {
    const lvlUpper = this.getActiveLevelKey().toUpperCase();
    this.dom.sessionProgressBar.style.width = "100%";
    this.dom.stateCard.style.display = "block";
    this.dom.stateIcon.textContent = "🎉";
    this.dom.stateTitle.textContent = `Den ${daily.dayIndex}/90 (${lvlUpper}) splněn!`;
    this.dom.stateDesc.textContent =
      "Všech 20 dnešních otázek máš bezchybně vyřešených a opravených. Pokud chceš trénovat dál, vyber si konkrétní okruh ze 130 otázek nebo si otevři Studovnu.";
    this.dom.stateStatsPill.style.display = "inline-block";
    this.dom.stateScoreText.textContent = "20 / 20 dokončeno ✓";

    this.dom.stateActions.innerHTML = "";
    const openMenuBtn = document.createElement("button");
    openMenuBtn.className = "primary-btn";
    openMenuBtn.textContent = "Procvičit okruhy (130 otázek / okruh) 🎯";
    openMenuBtn.addEventListener("click", () => {
      this.renderMenuOverlay();
      this.dom.menuOverlay.classList.add("visible");
    });
    this.dom.stateActions.appendChild(openMenuBtn);

    const theoryBtn = document.createElement("button");
    theoryBtn.className = "secondary-btn";
    theoryBtn.textContent = "Otevřít Studovnu & Taháky 📖";
    theoryBtn.addEventListener("click", () => this.switchNavTab("theory"));
    this.dom.stateActions.appendChild(theoryBtn);
  }

  showTopicRepairPrompt(catId, meta, ts) {
    const total = meta ? meta.total : 130;
    const remaining = ts.currentWrongIds.length;
    const done = ts.masteredIds.length;

    this.dom.sessionProgressBar.style.width = `${(done / total) * 100}%`;
    this.dom.stateCard.style.display = "block";
    this.dom.stateIcon.textContent = "🛠️";
    this.dom.stateTitle.textContent = `${meta ? meta.label : catId} — Oprava chyb`;
    this.dom.stateDesc.textContent =
      `Prošel jsi všechny nové otázky v tomto okruhu. Zbývá opravit ${remaining} chybných, aby bylo téma kompletně zvládnuto (130/130).`;
    this.dom.stateStatsPill.style.display = "inline-block";
    this.dom.stateScoreText.textContent = `${done} / ${total} zvládnuto`;

    this.dom.stateActions.innerHTML = "";
    const repairBtn = document.createElement("button");
    repairBtn.className = "primary-btn";
    repairBtn.textContent = `Opravit zbývající chyby (${remaining}) 🛠️`;
    repairBtn.addEventListener("click", () => {
      ts.queue = shuffleArray(ts.currentWrongIds);
      ts.currentWrongIds = [];
      ts.cursor = 0;
      ts.phase = "repair";
      this.saveState();
      this.renderQuizModeView();
    });
    this.dom.stateActions.appendChild(repairBtn);
  }

  showTopicMasteredState(catId, meta, ts) {
    const total = meta ? meta.total : 130;
    this.dom.sessionProgressBar.style.width = "100%";
    this.dom.stateCard.style.display = "block";
    this.dom.stateIcon.textContent = "🏆";
    this.dom.stateTitle.textContent = `Úspěšně jsi zvládl toto téma!`;
    this.dom.stateDesc.textContent =
      `Okruh „${meta ? meta.label : catId}“ máš kompletně na ${total}/${total} bez jediné neopravené chyby. Můžeš téma zresetovat a zopakovat si všech ${total} otázek znovu, nebo pokračovat na jiný okruh.`;
    this.dom.stateStatsPill.style.display = "inline-block";
    this.dom.stateScoreText.textContent = `${total} / ${total} zvládnuto 🏆`;

    this.dom.stateActions.innerHTML = "";
    const repeatBtn = document.createElement("button");
    repeatBtn.className = "primary-btn";
    repeatBtn.textContent = `🔄 Opakovat znovu všech ${total} otázek`;
    repeatBtn.addEventListener("click", () => {
      const lvl = this.getActiveLevelKey();
      const lp = this.getLevelProgress(lvl);
      lp.topics[catId] = createTopicSession(this.getBundle(lvl), catId, []);
      this.saveState();
      this.renderHeaderAndMenu();
      this.renderQuizModeView();
    });
    this.dom.stateActions.appendChild(repeatBtn);

    const otherBtn = document.createElement("button");
    otherBtn.className = "secondary-btn";
    otherBtn.textContent = "Vybrat jiný okruh / Dnešní dávka";
    otherBtn.addEventListener("click", () => {
      this.renderMenuOverlay();
      this.dom.menuOverlay.classList.add("visible");
    });
    this.dom.stateActions.appendChild(otherBtn);
  }

  showEmptyMistakesState() {
    this.dom.sessionProgressBar.style.width = "100%";
    this.dom.stateCard.style.display = "block";
    this.dom.stateIcon.textContent = "✨";
    this.dom.stateTitle.textContent = "Žádné neopravené chyby!";
    this.dom.stateDesc.textContent =
      "V bance chyb pro tuto úroveň teď nemáš jedinou otázku. Skvělá práce!";
    this.dom.stateStatsPill.style.display = "none";

    this.dom.stateActions.innerHTML = "";
    const backBtn = document.createElement("button");
    backBtn.className = "primary-btn";
    backBtn.textContent = "Zpět na dnešní dávku 📅";
    backBtn.addEventListener("click", () => this.selectMode("daily"));
    this.dom.stateActions.appendChild(backBtn);
  }

  renderDiagnosticResultCard(result) {
    const lvlUpper = this.getActiveLevelKey().toUpperCase();
    const pct = Math.round((result.totalCorrect / result.totalQuestions) * 100);

    this.dom.sessionProgressBar.style.width = "100%";
    this.dom.diagnosticResultCard.style.display = "block";
    this.dom.diagResultTitle.textContent = `Profil úrovně ${lvlUpper}`;
    this.dom.diagResultSubtitle.textContent =
      `Vstupní test z ${formatCzechDateLabel(result.date)} (správné odpovědi se započítaly do dnešního cíle).`;
    this.dom.diagOverallScore.textContent = `Celkové skóre: ${result.totalCorrect} / ${result.totalQuestions} (${pct} %)`;

    const entries = Object.entries(result.byCategory).map(([catId, data]) => ({
      catId,
      ...data,
      pct: Math.round((data.correct / data.total) * 100)
    }));
    entries.sort((a, b) => a.pct - b.pct);

    const weakest = entries.filter((e) => e.pct < 100).slice(0, 2);
    if (weakest.length > 0) {
      const names = weakest.map((w) => `<strong>${w.label} (${w.correct}/${w.total})</strong>`).join(" a ");
      this.dom.diagRecommendations.innerHTML =
        `🎯 <strong>Doporučené zaměření:</strong> Nejvíc bodů teď získáš opakováním v okruzích ${names}. Nezapomeň projít i odpovídající kapitoly ve Studovně!`;
    } else {
      this.dom.diagRecommendations.innerHTML =
        `🌟 <strong>Skvělý výsledek!</strong> Všech 7 okruhů jsi zvládl bez jediné chyby. Drž pravidelnou denní dávku 20 otázek!`;
    }

    this.dom.diagBreakdownList.innerHTML = "";
    for (const row of entries) {
      const cls = row.pct <= 34 ? "is-weak" : row.pct < 80 ? "is-mid" : "is-strong";
      const div = document.createElement("div");
      div.className = "diag-row";
      div.innerHTML = `
        <div class="diag-row-top">
          <span>${CATEGORY_ICONS[row.catId] || "📘"} ${row.label}</span>
          <span>${row.correct} / ${row.total} (${row.pct}%)</span>
        </div>
        <div class="diag-bar-track">
          <div class="diag-bar-fill ${cls}" style="width: ${row.pct}%"></div>
        </div>
      `;
      this.dom.diagBreakdownList.appendChild(div);
    }

    const targetWeakId = entries[0] ? entries[0].catId : "daily";
    this.dom.diagStartWeakestBtn.textContent = entries[0]
      ? `Procvičit: ${entries[0].label} 🎯`
      : "Procvičit nejslabší okruh 🎯";
    this.dom.diagStartWeakestBtn.onclick = () => this.selectMode(targetWeakId);
  }

  // ---- Answer Evaluation & Progression Logic ----
  handleChoiceSubmit(selectedIdx, btnElement) {
    if (this.dom.feedbackSheet.classList.contains("visible")) return;

    const q = this.currentQuestionObj;
    const isCorrect = selectedIdx === q.answer;

    const allBtns = this.dom.choiceOptionsContainer.querySelectorAll(".option-btn");
    allBtns.forEach((b) => {
      b.disabled = true;
    });

    if (isCorrect) {
      btnElement.classList.add("correct");
    } else {
      btnElement.classList.add("wrong");
      if (allBtns[q.answer]) allBtns[q.answer].classList.add("correct");
    }

    const correctDisplayText = q.options[q.answer];
    this.processAnswer(q, isCorrect, correctDisplayText);
  }

  handleTextSubmit() {
    if (this.dom.feedbackSheet.classList.contains("visible")) return;
    const userVal = this.dom.textAnswerInput.value.trim();
    if (!userVal) return;

    const q = this.currentQuestionObj;
    const normUser = normalizeAnswer(userVal);
    const acceptedList = Array.isArray(q.answer) ? q.answer : [q.answer];
    const isCorrect = acceptedList.some((ans) => normalizeAnswer(ans) === normUser);

    this.dom.textAnswerInput.disabled = true;
    this.dom.submitTextBtn.disabled = true;
    this.dom.textAnswerInput.classList.add(isCorrect ? "is-correct" : "is-wrong");

    this.processAnswer(q, isCorrect, acceptedList[0]);
  }

  processAnswer(q, isCorrect, correctDisplayText) {
    this.checkDayRollover();
    const lvl = this.getActiveLevelKey();
    const lp = this.getLevelProgress(lvl);
    const mode = this.state.activeMode;

    // 1. Update Mistake Bank (add on wrong)
    if (!isCorrect && !lp.mistakes.includes(q.id)) {
      lp.mistakes.push(q.id);
    }

    // 2. Update Today's Unique Correct Counter & Daily Streak (across ALL modes!)
    let triggeredStreakCelebration = false;
    if (isCorrect) {
      if (!this.state.todayStats.uniqueCorrectIds.includes(q.id)) {
        this.state.todayStats.uniqueCorrectIds.push(q.id);
      }
      const today = getLocalISODate();
      if (this.state.todayStats.uniqueCorrectIds.length >= 20 && this.state.streak.lastCompletedDate !== today) {
        this.state.streak.count += 1;
        this.state.streak.lastCompletedDate = today;
        triggeredStreakCelebration = true;
      }
    }

    // 3. Mode-specific state mutation (advance cursor immediately so refresh mid-feedback never repeats!)
    if (mode === "daily") {
      const daily = this.ensureDailyForToday();
      if (isCorrect) {
        if (!daily.correctIds.includes(q.id)) daily.correctIds.push(q.id);
        daily.currentWrongIds = daily.currentWrongIds.filter((id) => id !== q.id);
      } else {
        if (!daily.currentWrongIds.includes(q.id)) daily.currentWrongIds.push(q.id);
      }
      daily.cursor += 1;
      if (daily.cursor >= daily.queue.length) {
        daily.phase = daily.currentWrongIds.length === 0 ? "completed" : "repair_prompt";
      }
    } else if (mode === "mistakes") {
      const ms = lp.mistakesSession;
      if (isCorrect) {
        lp.mistakes = lp.mistakes.filter((id) => id !== q.id);
      } else if (ms && !ms.wrongThisPass.includes(q.id)) {
        ms.wrongThisPass.push(q.id);
      }
      if (ms) ms.cursor += 1;
    } else if (mode === "all") {
      if (lp.allSession) lp.allSession.cursor += 1;
    } else if (mode === "diagnostic") {
      const diag = lp.diagnostic.inProgress;
      if (diag) {
        diag.answers[q.id] = Boolean(isCorrect);
        diag.cursor += 1;
        if (diag.cursor >= diag.queue.length) {
          this.finalizeDiagnostic(lvl);
        }
      }
    } else {
      const ts = lp.topics[mode];
      const bundle = this.getBundle(lvl);
      const meta = bundle.topics.find((t) => t.id === mode);
      const total = meta ? meta.total : 130;
      if (ts) {
        if (isCorrect) {
          if (!ts.masteredIds.includes(q.id)) ts.masteredIds.push(q.id);
          ts.currentWrongIds = ts.currentWrongIds.filter((id) => id !== q.id);
        } else {
          if (!ts.currentWrongIds.includes(q.id)) ts.currentWrongIds.push(q.id);
        }
        ts.cursor += 1;
        if (ts.cursor >= ts.queue.length) {
          ts.phase = (ts.masteredIds.length >= total || ts.currentWrongIds.length === 0)
            ? "mastered"
            : "repair_prompt";
        }
      }
    }

    this.saveState();
    this.renderHeaderAndMenu();

    // Audio & Feedback Sheet
    this.playAudio(isCorrect ? "correct" : "wrong");
    this.showFeedbackSheet(isCorrect, correctDisplayText, q.explanation, q.tip);

    if (triggeredStreakCelebration) {
      setTimeout(() => this.showStreakCelebration(), 350);
    }
  }

  nextQuestion() {
    this.hideFeedbackSheet();
    this.renderHeaderAndMenu();
    this.renderQuizModeView();
  }

  finalizeDiagnostic(levelKey) {
    const lp = this.getLevelProgress(levelKey);
    const bundle = this.getBundle(levelKey);
    const diag = lp.diagnostic.inProgress;
    if (!diag) return;

    const byCategory = {};
    for (const t of bundle.topics) {
      byCategory[t.id] = { label: t.label, correct: 0, total: 0 };
    }

    let totalCorrect = 0;
    for (const qid of diag.queue) {
      const q = this.getQuestionById(qid, levelKey);
      if (!q) continue;
      byCategory[q.category].total += 1;
      if (diag.answers[qid]) {
        byCategory[q.category].correct += 1;
        totalCorrect += 1;
      }
    }

    lp.diagnostic.lastResult = {
      date: getLocalISODate(),
      totalCorrect,
      totalQuestions: diag.queue.length,
      byCategory
    };
    lp.diagnostic.inProgress = null;
  }

  showFeedbackSheet(isCorrect, correctDisplayText, explanation, tip) {
    this.dom.feedbackSheet.classList.remove("is-correct", "is-wrong");
    this.dom.feedbackSheet.classList.add(isCorrect ? "is-correct" : "is-wrong");

    if (isCorrect) {
      this.dom.statusIcon.textContent = "🎉";
      this.dom.statusTitle.textContent = "Skvěle! Správně";
      this.dom.correctAnswerDisplay.style.display = "none";
    } else {
      this.dom.statusIcon.textContent = "💡";
      this.dom.statusTitle.textContent = "Pozor, chyba!";
      this.dom.correctAnswerDisplay.style.display = "block";
      this.dom.correctAnswerDisplay.innerHTML = `Správně: <strong>${correctDisplayText}</strong>`;
    }

    this.dom.explanationText.textContent = explanation || "";
    if (tip) {
      this.dom.tipBox.style.display = "flex";
      this.dom.tipText.textContent = tip;
    } else {
      this.dom.tipBox.style.display = "none";
    }

    this.dom.feedbackSheet.classList.add("visible");
  }

  hideFeedbackSheet() {
    this.dom.feedbackSheet.classList.remove("visible");
  }

  showStreakCelebration() {
    const count = this.state.streak.count;
    let dayWord = "dní";
    if (count === 1) dayWord = "den";
    else if (count >= 2 && count <= 4) dayWord = "dny";

    this.dom.celebrationStreakVal.textContent = `${count} ${dayWord}`;
    this.dom.celebrationOverlay.classList.add("visible");
    this.playAudio("celebration");
  }

  // ---- Learning Database (Studovna) ----
  renderTheorySectionChrome() {
    const lvl = this.getActiveLevelKey();
    const lvlUpper = lvl.toUpperCase();
    const chapters = this.theoryDB[lvl] || [];

    this.dom.theoryHeaderTitle.textContent = `📖 ${lvlUpper} Studovna & Taháky`;
    this.dom.theoryLevelBadge.textContent = lvlUpper;
    this.dom.theoryLevelBadge.classList.toggle("is-b2", lvl === "b2");
    this.dom.theoryHeaderSub.textContent = lvl === "b2"
      ? "Kompletní pravidla, vzorce a zkouškové strategie pro B2 First (FCE)."
      : "Kompletní pravidla, vzorce a zkouškové strategie pro C1 Advanced (CAE).";

    const currentActiveChip = this._activeTheoryCategory || "all";
    const validIds = new Set(["all", ...chapters.map((c) => c.id)]);
    this._activeTheoryCategory = validIds.has(currentActiveChip) ? currentActiveChip : "all";

    const chipsEl = this.dom.theoryChips;
    const prevScrollLeft = chipsEl.scrollLeft;

    chipsEl.innerHTML = "";
    const allChip = document.createElement("button");
    allChip.className = `chip${this._activeTheoryCategory === "all" ? " active" : ""}`;
    allChip.textContent = "Vše";
    allChip.addEventListener("click", () => {
      this._activeTheoryCategory = "all";
      this.renderTheorySectionChrome();
      this.renderTheory();
    });
    chipsEl.appendChild(allChip);

    let activeBtnEl = this._activeTheoryCategory === "all" ? allChip : null;
    for (const ch of chapters) {
      const chip = document.createElement("button");
      chip.className = `chip${this._activeTheoryCategory === ch.id ? " active" : ""}`;
      chip.textContent = ch.icon + " " + ch.title.split("(")[0].trim();
      chip.addEventListener("click", () => {
        this._activeTheoryCategory = ch.id;
        this.renderTheorySectionChrome();
        this.renderTheory();
      });
      chipsEl.appendChild(chip);
      if (this._activeTheoryCategory === ch.id) activeBtnEl = chip;
    }

    chipsEl.scrollLeft = prevScrollLeft;
    if (activeBtnEl && typeof activeBtnEl.scrollIntoView === "function") {
      activeBtnEl.scrollIntoView({ behavior: "auto", inline: "nearest", block: "nearest" });
    }
  }

  renderTheory() {
    const lvl = this.getActiveLevelKey();
    const chapters = this.theoryDB[lvl] || [];
    const activeCat = this._activeTheoryCategory || "all";
    const query = (this.dom.theorySearchInput.value || "").trim().toLowerCase();

    const filtered = chapters.filter((ch) => {
      if (activeCat !== "all" && ch.id !== activeCat) return false;
      if (!query) return true;
      const text = `${ch.title} ${ch.shortDesc} ${ch.summary} ${ch.formula} ${ch.sections.map((s) => s.heading + " " + s.content).join(" ")}`.toLowerCase();
      return text.includes(query);
    });

    this.dom.theoryCardsContainer.innerHTML = "";
    if (filtered.length === 0) {
      this.dom.theoryCardsContainer.innerHTML =
        `<div class="card" style="text-align:center;color:#94a3b8;padding:30px;">Nic nenalezeno pro „${query}“. Zkus jiné klíčové slovo.</div>`;
      return;
    }

    for (const ch of filtered) {
      const card = document.createElement("article");
      card.className = "theory-card";

      const sectionsHTML = ch.sections.map((sec) => `
        <div class="theory-section">
          <h4>${sec.heading}</h4>
          <div class="theory-section-content">${sec.content}</div>
        </div>
      `).join("");

      card.innerHTML = `
        <div class="theory-card-header">
          <div class="theory-card-icon">${ch.icon}</div>
          <div class="theory-card-title">
            <h3>${ch.title}</h3>
            <p>${ch.shortDesc}</p>
          </div>
        </div>
        <p style="font-size:0.88rem;color:#cbd5e1;margin-bottom:12px;line-height:1.45;">${ch.summary}</p>
        <div class="theory-formula-badge">${ch.formula}</div>
        ${sectionsHTML}
        <button class="practice-topic-btn" data-cat="${ch.id}">Procvičit tento okruh (130 otázek) ➜</button>
      `;

      card.querySelector(".practice-topic-btn").addEventListener("click", () => {
        this.selectMode(ch.id);
      });
      this.dom.theoryCardsContainer.appendChild(card);
    }
  }

  // ---- Cloud Account, Sync & AI Essay Lab (Supabase) ----
  escapeHTML(str) {
    return String(str ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  getLocalProgressWeight() {
    let score = (this.state?.streak?.count || 0) * 20 + (this.state?.todayStats?.uniqueCorrectIds?.length || 0);
    for (const lvl of ["b2", "c1"]) {
      const lp = this.state?.levels?.[lvl];
      if (!lp) continue;
      score += lp.daily?.correctIds?.length || 0;
      score += lp.mistakes?.length || 0;
      if (lp.diagnostic?.lastResult) score += 21;
      for (const ts of Object.values(lp.topics || {})) {
        if (ts && Array.isArray(ts.masteredIds)) score += ts.masteredIds.length;
      }
    }
    return score;
  }

  showCloudAuthMsg(text, kind = "info") {
    if (!this.dom?.cloudAuthMsg) return;
    this.dom.cloudAuthMsg.textContent = text;
    this.dom.cloudAuthMsg.className = `cloud-auth-msg${kind === "error" ? " is-error" : kind === "success" ? " is-success" : ""}`;
    this.dom.cloudAuthMsg.style.display = text ? "block" : "none";
  }

  renderCloudSyncUI() {
    if (!this.dom?.cloudPlanPill) return;
    const signedIn = Boolean(this.supabase && this.supabase.isSignedIn());
    const user = signedIn ? this.supabase.getUser() : null;

    if (this.dom.cloudAuthForm) this.dom.cloudAuthForm.style.display = signedIn ? "none" : "flex";
    if (this.dom.cloudSignedInBar) this.dom.cloudSignedInBar.style.display = signedIn ? "flex" : "none";

    if (!signedIn) {
      this.dom.cloudPlanPill.textContent = "Offline";
      this.dom.cloudPlanPill.className = "sync-status-pill";
      this.dom.cloudSyncStatus.textContent = "Lokální režim (offline). Přihlas se pro zálohu mezi mobilem a PC.";
      return;
    }

    this.dom.cloudUserEmail.textContent = user?.email || user?.id || "Přihlášen";
    const isPro = this.cloudState.plan === "pro";
    this.dom.cloudPlanPill.textContent = isPro ? "PRO ✨" : "Cloud ✓";
    this.dom.cloudPlanPill.className = `sync-status-pill ${isPro ? "is-pro" : "is-online"}`;

    if (typeof navigator !== "undefined" && navigator.onLine === false) {
      this.dom.cloudSyncStatus.textContent = "Offline režim · Změny se odešlou po připojení.";
    } else if (this.cloudState.syncStatus === "syncing") {
      this.dom.cloudSyncStatus.textContent = "Synchronizuji se Supabase...";
    } else if (this.cloudState.syncStatus === "error") {
      this.dom.cloudSyncStatus.textContent = "Synchronizace se nezdařila (lokální kopie uložena).";
    } else if (this.cloudState.lastSyncedAt) {
      const timeStr = new Date(this.cloudState.lastSyncedAt).toLocaleTimeString("cs-CZ", {
        hour: "2-digit",
        minute: "2-digit"
      });
      this.dom.cloudSyncStatus.textContent = `Synchronizováno v ${timeStr} (${isPro ? "Pro" : "Free"} plán)`;
    } else {
      this.dom.cloudSyncStatus.textContent = "Přihlášeno · Připraveno k synchronizaci.";
    }
  }

  async handleCloudAuth(action) {
    if (!this.supabase) return;
    const email = (this.dom.authEmailInput?.value || "").trim();
    const password = this.dom.authPasswordInput?.value || "";

    if (!email || password.length < 6) {
      this.showCloudAuthMsg("Zadej platný e-mail a heslo alespoň o 6 znacích.", "error");
      return;
    }

    this.showCloudAuthMsg(action === "signup" ? "Zakládám účet..." : "Přihlašuji...", "info");
    try {
      if (action === "signup") {
        const redirectTo = typeof window !== "undefined"
          ? `${window.location.origin}${window.location.pathname}`
          : undefined;
        const res = await this.supabase.signUp(email, password, redirectTo);
        if (res.needsEmailConfirmation) {
          this.showCloudAuthMsg(
            "Účet vytvořen! Zkontroluj e-mail a potvrď odkaz, poté se přihlas.",
            "success"
          );
          return;
        }
      } else {
        await this.supabase.signInWithPassword(email, password);
      }

      if (this.dom.authPasswordInput) this.dom.authPasswordInput.value = "";
      this.showCloudAuthMsg("", "info");
      await this.syncWithCloud({ pullFirst: true });
      this.renderCloudSyncUI();
    } catch (err) {
      this.showCloudAuthMsg(err?.message || "Nepodařilo se přihlásit.", "error");
    }
  }

  async handleCloudSignOut() {
    if (!this.supabase) return;
    await this.supabase.signOut();
    this.cloudState.syncStatus = "offline";
    this.cloudState.plan = "free";
    this.cloudState.dailyAiLimit = 2;
    this.cloudState.lastSyncedAt = null;
    this.renderCloudSyncUI();
  }

  scheduleCloudPush() {
    if (!this.supabase || !this.supabase.isSignedIn()) return;
    if (typeof navigator !== "undefined" && navigator.onLine === false) return;
    clearTimeout(this._cloudSyncTimer);
    this._cloudSyncTimer = setTimeout(() => {
      this.pushToCloud();
    }, 1500);
  }

  async pushToCloud() {
    if (!this.supabase || !this.supabase.isSignedIn()) return;
    if (typeof navigator !== "undefined" && navigator.onLine === false) {
      this.cloudState.syncStatus = "offline";
      this.renderCloudSyncUI();
      return;
    }

    this.cloudState.syncStatus = "syncing";
    this.renderCloudSyncUI();
    try {
      const profilePayload = {
        active_level: this.getActiveLevelKey(),
        sound_enabled: Boolean(this.state.soundEnabled),
        streak_count: Number(this.state.streak?.count || 0),
        streak_last_completed_date: this.state.streak?.lastCompletedDate || null,
        today_date: this.state.todayStats?.date || getLocalISODate(),
        today_unique_correct_ids: Array.isArray(this.state.todayStats?.uniqueCorrectIds)
          ? this.state.todayStats.uniqueCorrectIds
          : []
      };
      await this.supabase.upsertProfile(profilePayload);

      const clientTs = this.state.localUpdatedAt || new Date().toISOString();
      await Promise.all(
        ["b2", "c1"].map((lvl) => {
          const lp = this.getLevelProgress(lvl);
          return this.supabase.upsertLevelProgress(lvl, lp.startDate || getLocalISODate(), lp, clientTs);
        })
      );

      this.cloudState.syncStatus = "synced";
      this.cloudState.lastSyncedAt = new Date().toISOString();
    } catch (_) {
      this.cloudState.syncStatus = "error";
    }
    this.renderCloudSyncUI();
  }

  async syncWithCloud({ pullFirst = true } = {}) {
    if (!this.supabase || !this.supabase.isSignedIn()) return;
    if (typeof navigator !== "undefined" && navigator.onLine === false) {
      this.cloudState.syncStatus = "offline";
      this.renderCloudSyncUI();
      return;
    }

    this.cloudState.syncStatus = "syncing";
    this.renderCloudSyncUI();

    try {
      const cloud = await this.supabase.fetchCloudBundle();
      if (!cloud) return;

      if (cloud.subscription) {
        this.cloudState.plan = cloud.subscription.plan || "free";
        this.cloudState.dailyAiLimit = cloud.subscription.daily_ai_essay_limit ?? 2;
      }

      if (pullFirst && cloud.levels && cloud.levels.length > 0) {
        const localWeight = this.getLocalProgressWeight();
        const localTime = this.state.localUpdatedAt ? Date.parse(this.state.localUpdatedAt) : 0;
        let pulledAny = false;

        for (const row of cloud.levels) {
          const lvl = row.level;
          if (lvl !== "b2" && lvl !== "c1") continue;
          const cloudTime = row.client_updated_at ? Date.parse(row.client_updated_at) : 0;
          const hasCloudJson = row.state_json && Object.keys(row.state_json).length > 0;
          if (hasCloudJson && (localWeight === 0 || cloudTime > localTime)) {
            this.state.levels[lvl] = row.state_json;
            pulledAny = true;
          }
        }

        if (cloud.profile) {
          const cp = cloud.profile;
          if (pulledAny) {
            if (cp.active_level === "b2" || cp.active_level === "c1") {
              this.state.activeLevel = cp.active_level;
            }
            if (typeof cp.sound_enabled === "boolean") {
              this.state.soundEnabled = cp.sound_enabled;
            }
            if ((cp.streak_count || 0) > (this.state.streak.count || 0)) {
              this.state.streak = {
                count: cp.streak_count,
                lastCompletedDate: cp.streak_last_completed_date || null
              };
            }
            const today = getLocalISODate();
            if (cp.today_date === today && Array.isArray(cp.today_unique_correct_ids)) {
              const merged = new Set([
                ...(this.state.todayStats?.uniqueCorrectIds || []),
                ...cp.today_unique_correct_ids
              ]);
              this.state.todayStats = { date: today, uniqueCorrectIds: [...merged] };
            }
            this.checkDayRollover();
            this.saveState({ skipCloudPush: true, preserveTimestamp: true });
            this.dom.onboardingOverlay?.classList.remove("visible");
            this.renderHeaderAndMenu();
            this.renderCurrentView();
          }
        }
      }

      await this.pushToCloud();
    } catch (_) {
      this.cloudState.syncStatus = "error";
      this.renderCloudSyncUI();
    }
  }

  openEssayLab() {
    this.dom.menuOverlay.classList.remove("visible");
    if (this.dom.essayLevelSelect) {
      this.dom.essayLevelSelect.value = this.getActiveLevelKey();
    }
    const signedIn = Boolean(this.supabase && this.supabase.isSignedIn());
    if (this.dom.essayAuthNotice) {
      this.dom.essayAuthNotice.style.display = signedIn ? "none" : "flex";
    }
    if (this.dom.essayQuotaLabel) {
      this.dom.essayQuotaLabel.textContent = signedIn
        ? `Cambridge kritéria (0–20 b.) · Limit ${this.cloudState.dailyAiLimit}/den (${this.cloudState.plan.toUpperCase()})`
        : "Cambridge kritéria (0–20 b.) · Vyžaduje přihlášení do Cloud účtu";
    }
    if (this.dom.essayStatusMsg) this.dom.essayStatusMsg.style.display = "none";
    this.dom.essayOverlay.classList.add("visible");
    if (signedIn) {
      this.loadEssayHistory();
    }
  }

  showEssayStatus(text, kind = "info") {
    if (!this.dom?.essayStatusMsg) return;
    this.dom.essayStatusMsg.textContent = text;
    this.dom.essayStatusMsg.className = `cloud-auth-msg${kind === "error" ? " is-error" : kind === "success" ? " is-success" : ""}`;
    this.dom.essayStatusMsg.style.display = text ? "block" : "none";
  }

  async submitEssayForGrading() {
    if (!this.supabase || !this.supabase.isSignedIn()) {
      this.showEssayStatus("Pro AI opravu se nejprve přihlas v Cloud účtu (≡).", "error");
      return;
    }
    const essayText = (this.dom.essayTextInput?.value || "").trim();
    if (essayText.length < 20) {
      this.showEssayStatus("Napiš prosím delší text (alespoň 20 znaků).", "error");
      return;
    }

    const level = this.dom.essayLevelSelect?.value || this.getActiveLevelKey();
    const taskType = this.dom.essayTaskSelect?.value || "essay";
    const promptText = (this.dom.essayPromptInput?.value || "").trim();

    this.dom.gradeEssaySubmitBtn.disabled = true;
    this.dom.gradeEssaySubmitBtn.textContent = "Hodnotím... ⏳";
    this.showEssayStatus("AI examinátor právě hodnotí tvůj text podle Cambridge kritérií...", "info");

    try {
      const result = await this.supabase.gradeEssay({ level, taskType, promptText, essayText });
      this.showEssayStatus("", "info");
      if (this.dom.essayQuotaLabel && typeof result.remainingToday === "number") {
        this.dom.essayQuotaLabel.textContent =
          `Cambridge kritéria · Zbývá dnes ${result.remainingToday}/${result.dailyLimit} AI oprav`;
      }
      this.renderEssayResult(result.submission);
      this.loadEssayHistory();
    } catch (err) {
      const code = err?.payload?.error;
      if (code === "GEMINI_API_KEY_NOT_CONFIGURED") {
        this.showEssayStatus(
          "Backend je připravený, stačí v Supabase projektu doplnit tajný klíč GEMINI_API_KEY.",
          "error"
        );
      } else {
        this.showEssayStatus(err?.payload?.message || err?.message || "Chyba při AI hodnocení.", "error");
      }
    } finally {
      this.dom.gradeEssaySubmitBtn.disabled = false;
      this.dom.gradeEssaySubmitBtn.textContent = "Opravit pomocí AI ✨";
    }
  }

  renderEssayResult(sub) {
    if (!sub || !sub.ai_feedback_json || !this.dom?.essayResultContainer) return;
    const fb = sub.ai_feedback_json;
    const s = fb.scores || {};
    const strengths = (fb.strengthsCs || []).map((x) => `<li>${this.escapeHTML(x)}</li>`).join("");
    const improvements = (fb.improvementsCs || []).map((x) => `<li>${this.escapeHTML(x)}</li>`).join("");
    const upgrades = (fb.languageUpgrades || []).map((u) => `
      <div class="essay-upgrade-item">
        <div><strong>Původně:</strong> ${this.escapeHTML(u.original)}</div>
        <div><strong>Lépe (${sub.level.toUpperCase()}):</strong> ${this.escapeHTML(u.upgraded)}</div>
        <div style="color:#94a3b8;font-size:0.78rem;">${this.escapeHTML(u.reasonCs)}</div>
      </div>
    `).join("");

    this.dom.essayResultContainer.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;gap:8px;">
        <strong>Celkové skóre: ${sub.total_score} / ${sub.max_score || 20}</strong>
        <span class="sync-status-pill is-online">${this.escapeHTML(fb.estimatedBand || sub.level.toUpperCase())}</span>
      </div>
      <div class="essay-scores-grid">
        <div class="essay-score-pill"><span>Content</span><strong>${s.content ?? "-"}/5</strong></div>
        <div class="essay-score-pill"><span>Comm. Achiev.</span><strong>${s.communicativeAchievement ?? "-"}/5</strong></div>
        <div class="essay-score-pill"><span>Organisation</span><strong>${s.organisation ?? "-"}/5</strong></div>
        <div class="essay-score-pill"><span>Language</span><strong>${s.language ?? "-"}/5</strong></div>
      </div>
      <p style="margin:0;color:#e2e8f0;">${this.escapeHTML(fb.summaryCs || "")}</p>
      ${strengths ? `<div><strong>✅ Silné stránky:</strong><ul style="margin:4px 0 0 18px;">${strengths}</ul></div>` : ""}
      ${improvements ? `<div><strong>🛠️ Co zlepšit:</strong><ul style="margin:4px 0 0 18px;">${improvements}</ul></div>` : ""}
      ${upgrades ? `<div><strong>🚀 Jazykový upgrade:</strong>${upgrades}</div>` : ""}
      ${fb.modelParagraph ? `<div class="rule-box"><strong>Ukázkový odstavec:</strong><br>${this.escapeHTML(fb.modelParagraph)}</div>` : ""}
    `;
    this.dom.essayResultContainer.style.display = "flex";
  }

  async loadEssayHistory() {
    if (!this.supabase || !this.supabase.isSignedIn() || !this.dom?.essayHistoryContainer) return;
    try {
      const rows = await this.supabase.listEssaySubmissions(5);
      if (!rows || rows.length === 0) {
        this.dom.essayHistoryContainer.style.display = "none";
        return;
      }
      this.dom.essayHistoryContainer.innerHTML = `<div class="section-label">Poslední hodnocené eseje</div>`;
      for (const row of rows) {
        const item = document.createElement("button");
        item.type = "button";
        item.className = "essay-history-item";
        const dateLabel = new Date(row.created_at).toLocaleDateString("cs-CZ");
        item.innerHTML = `
          <span>${this.escapeHTML(row.level.toUpperCase())} · ${this.escapeHTML(row.task_type)} (${row.word_count} slov · ${dateLabel})</span>
          <strong>${row.total_score ?? "-"}/${row.max_score || 20}</strong>
        `;
        item.addEventListener("click", () => this.renderEssayResult(row));
        this.dom.essayHistoryContainer.appendChild(item);
      }
      this.dom.essayHistoryContainer.style.display = "flex";
    } catch (_) {}
  }

  // ---- Audio Feedback & Service Worker ----
  playAudio(type) {
    if (!this.state.soundEnabled) return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      if (!this.audioCtx) this.audioCtx = new AudioCtx();
      if (this.audioCtx.state === "suspended") this.audioCtx.resume();

      const now = this.audioCtx.currentTime;
      const playTone = (freq, startTime, duration, oscType = "sine", gainVal = 0.08) => {
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();
        osc.type = oscType;
        osc.frequency.setValueAtTime(freq, startTime);
        gain.gain.setValueAtTime(gainVal, startTime);
        gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);
        osc.connect(gain);
        gain.connect(this.audioCtx.destination);
        osc.start(startTime);
        osc.stop(startTime + duration);
      };

      if (type === "correct") {
        playTone(523.25, now, 0.14);
        playTone(659.25, now + 0.08, 0.18);
      } else if (type === "wrong") {
        playTone(220, now, 0.16, "triangle", 0.07);
        playTone(190, now + 0.1, 0.2, "triangle", 0.07);
      } else if (type === "celebration") {
        playTone(523.25, now, 0.14);
        playTone(659.25, now + 0.1, 0.14);
        playTone(783.99, now + 0.2, 0.18);
        playTone(1046.5, now + 0.32, 0.35);
      }
    } catch (_) {}
  }

  initServiceWorker() {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("./sw.js").catch(() => {});
    }
  }
}

if (typeof window !== "undefined") {
  window.addEventListener("DOMContentLoaded", () => {
    const app = new Certin90App(window.CERTIN90_DATA);
    window.certinApp = app;
    app.init();
  });
}

if (typeof module !== "undefined") {
  module.exports = {
    Certin90App,
    createDailySessionForDate,
    createEmptyLevelProgress,
    createTopicSession,
    normalizeAnswer,
    diffDaysISO,
    addDaysISO
  };
}
