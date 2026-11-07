// ========================================================
// C1 Cambridge Master - App Engine & PWA Controller
// ========================================================

class C1App {
  constructor() {
    this.questions = typeof C1_QUESTIONS !== "undefined" ? C1_QUESTIONS : [];
    this.currentTopic = "all";
    this.currentQuestionIndex = 0;
    this.activeQuestionList = [];
    this.currentQuestion = null;
    this.isAnswerSubmitted = false;

    // Daily Goal & Streak Constants
    this.DAILY_GOAL = 20;

    // Load Local Storage State
    this.soundEnabled = localStorage.getItem("c1_sound_enabled") !== "false";
    this.streak = parseInt(localStorage.getItem("c1_streak") || "0", 10);
    this.lastCompletedDate = localStorage.getItem("c1_last_completed_date") || "";
    this.todayDateStr = this.getTodayDateString();
    
    // Check if daily progress needs reset (new day)
    const storedDate = localStorage.getItem("c1_active_date") || "";
    if (storedDate !== this.todayDateStr) {
      localStorage.setItem("c1_active_date", this.todayDateStr);
      localStorage.setItem("c1_today_correct", "0");
      this.todayCorrectCount = 0;
      this.checkStreakExpiration();
    } else {
      this.todayCorrectCount = parseInt(localStorage.getItem("c1_today_correct") || "0", 10);
    }

    // Mistakes bank
    try {
      this.mistakes = JSON.parse(localStorage.getItem("c1_mistakes") || "[]");
    } catch {
      this.mistakes = [];
    }

    // Audio Context (Synthesized sound effects for zero-dependency offline audio)
    this.audioCtx = null;

    // DOM Elements
    this.initDOMElements();
    this.attachEventListeners();
    this.updateStatsUI();
    this.initTopic("daily");
    this.initServiceWorker();
  }

  getTodayDateString() {
    const now = new Date();
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
  }

  getYesterdayDateString() {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    return `${yesterday.getFullYear()}-${String(yesterday.getMonth() + 1).padStart(2, "0")}-${String(yesterday.getDate()).padStart(2, "0")}`;
  }

  checkStreakExpiration() {
    if (!this.lastCompletedDate) {
      this.streak = 0;
      localStorage.setItem("c1_streak", "0");
      return;
    }
    const yesterdayStr = this.getYesterdayDateString();
    // If the last completed date was not yesterday and not today, streak has reset
    if (this.lastCompletedDate !== yesterdayStr && this.lastCompletedDate !== this.todayDateStr) {
      this.streak = 0;
      localStorage.setItem("c1_streak", "0");
    }
  }

  initDOMElements() {
    // Top bar elements
    this.topicNameEl = document.getElementById("currentTopicName");
    this.streakCountEl = document.getElementById("streakCount");
    this.dailyProgressTextEl = document.getElementById("dailyProgressText");
    this.soundToggleBtn = document.getElementById("soundToggleBtn");
    this.soundIconEl = document.getElementById("soundIcon");
    this.sessionProgressBar = document.getElementById("sessionProgressBar");

    // Question card elements
    this.qCategoryTag = document.getElementById("qCategoryTag");
    this.qCounterTag = document.getElementById("qCounterTag");
    this.qInstruction = document.getElementById("qInstruction");
    this.qPromptContext = document.getElementById("qPromptContext");
    this.qPromptText = document.getElementById("qPromptText");
    this.qKeyWord = document.getElementById("qKeyWord");
    this.qQuestionText = document.getElementById("qQuestionText");
    this.choiceOptionsContainer = document.getElementById("choiceOptionsContainer");
    this.textInputContainer = document.getElementById("textInputContainer");
    this.textAnswerInput = document.getElementById("textAnswerInput");
    this.submitTextBtn = document.getElementById("submitTextBtn");

    // Feedback Sheet
    this.feedbackSheet = document.getElementById("feedbackSheet");
    this.statusIcon = document.getElementById("statusIcon");
    this.statusTitle = document.getElementById("statusTitle");
    this.correctAnswerDisplay = document.getElementById("correctAnswerDisplay");
    this.explanationText = document.getElementById("explanationText");
    this.tipBox = document.getElementById("tipBox");
    this.tipText = document.getElementById("tipText");
    this.nextQuestionBtn = document.getElementById("nextQuestionBtn");

    // Topic Modal
    this.categoryMenuBtn = document.getElementById("categoryMenuBtn");
    this.topicModal = document.getElementById("topicModal");
    this.closeTopicModalBtn = document.getElementById("closeTopicModalBtn");
    this.topicList = document.getElementById("topicList");
    this.mistakesCountLabel = document.getElementById("mistakesCountLabel");

    // Celebration Modal
    this.celebrationOverlay = document.getElementById("celebrationOverlay");
    this.celebrationStreakVal = document.getElementById("celebrationStreakVal");
    this.closeCelebrationBtn = document.getElementById("closeCelebrationBtn");
  }

  attachEventListeners() {
    // Sound toggle
    this.soundToggleBtn.addEventListener("click", () => {
      this.soundEnabled = !this.soundEnabled;
      localStorage.setItem("c1_sound_enabled", this.soundEnabled);
      this.soundIconEl.textContent = this.soundEnabled ? "🔊" : "🔇";
    });
    this.soundIconEl.textContent = this.soundEnabled ? "🔊" : "🔇";

    // Text submit
    this.submitTextBtn.addEventListener("click", () => this.handleTextSubmit());
    this.textAnswerInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        if (this.isAnswerSubmitted) {
          this.loadNextQuestion();
        } else {
          this.handleTextSubmit();
        }
      }
    });

    // Next question button
    this.nextQuestionBtn.addEventListener("click", () => {
      this.loadNextQuestion();
    });

    // Topic menu open/close
    this.categoryMenuBtn.addEventListener("click", () => {
      this.updateMistakesCountUI();
      this.topicModal.classList.add("visible");
    });

    this.closeTopicModalBtn.addEventListener("click", () => {
      this.topicModal.classList.remove("visible");
    });

    // Topic selection
    this.topicList.addEventListener("click", (e) => {
      const btn = e.target.closest(".topic-item");
      if (!btn) return;
      const topic = btn.dataset.topic;
      this.initTopic(topic);
      this.topicModal.classList.remove("visible");
      this.highlightActiveTopicBtn(btn);
    });

    // Close Celebration
    this.closeCelebrationBtn.addEventListener("click", () => {
      this.celebrationOverlay.classList.remove("visible");
    });

    // Global keyboard navigation (Space / Enter for next)
    window.addEventListener("keydown", (e) => {
      if ((e.key === "Enter" || e.key === " ") && this.feedbackSheet.classList.contains("visible")) {
        // If not typing in input
        if (document.activeElement !== this.textAnswerInput) {
          e.preventDefault();
          this.loadNextQuestion();
        }
      }
    });
  }

  highlightActiveTopicBtn(activeBtn) {
    document.querySelectorAll(".topic-item").forEach(b => b.classList.remove("active"));
    activeBtn.classList.add("active");
  }

  updateMistakesCountUI() {
    if (this.mistakesCountLabel) {
      this.mistakesCountLabel.textContent = `${this.mistakes.length} uložených chyb`;
    }
  }

  initTopic(topic) {
    this.currentTopic = topic;
    this.updateMistakesCountUI();

    // Map labels
    const labels = {
      daily: "Dnešní dávka (20)",
      all: "Všech 1080 otázek",
      inversions: "Záporné inverze",
      word_formation: "Word Formation",
      transformations: "Transformace vět",
      register: "Formální styl & Sloh",
      collocations: "Kolokace & Idiomy",
      mistakes: "Moje chyby"
    };
    this.topicNameEl.textContent = labels[topic] || "Denní dávka";

    // Filter question list
    if (topic === "daily") {
      let dailyQuestions = this.questions.filter(q => q.date === this.todayDateStr);
      // Pokud je dnes ještě před 8.11.2026, vezmeme první den (8.11.2026)
      if (dailyQuestions.length === 0) {
        dailyQuestions = this.questions.filter(q => q.date === "2026-11-08");
        this.topicNameEl.textContent = "Start: 08.11. (20 otázek)";
      } else {
        const parts = this.todayDateStr.split("-");
        this.topicNameEl.textContent = `${parts[2]}.${parts[1]}. (20 otázek)`;
      }
      this.activeQuestionList = [...dailyQuestions];
    } else if (topic === "all") {
      this.activeQuestionList = [...this.questions];
    } else if (topic === "mistakes") {
      this.activeQuestionList = this.questions.filter(q => this.mistakes.includes(q.id));
      if (this.activeQuestionList.length === 0) {
        alert("Zatím nemáš uložené žádné chyby! Skvělá práce. Přepínám na dnešní dávku 20 otázek.");
        this.initTopic("daily");
        return;
      }
    } else {
      this.activeQuestionList = this.questions.filter(q => q.category === topic);
    }

    // Shuffle questions
    this.shuffle(this.activeQuestionList);
    this.currentQuestionIndex = 0;
    this.renderCurrentQuestion();
  }

  shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  renderCurrentQuestion() {
    this.isAnswerSubmitted = false;
    this.feedbackSheet.classList.remove("visible", "is-correct", "is-wrong");

    if (this.currentQuestionIndex >= this.activeQuestionList.length) {
      // Re-shuffle when finished all questions
      this.shuffle(this.activeQuestionList);
      this.currentQuestionIndex = 0;
    }

    this.currentQuestion = this.activeQuestionList[this.currentQuestionIndex];
    const q = this.currentQuestion;

    // Progress bar in current topic session
    const percent = Math.min(100, Math.round(((this.currentQuestionIndex) / this.activeQuestionList.length) * 100));
    this.sessionProgressBar.style.width = `${percent}%`;

    // Metadata
    this.qCategoryTag.textContent = q.categoryLabel || "C1 Advanced";
    this.qCounterTag.textContent = `${this.currentQuestionIndex + 1} / ${this.activeQuestionList.length}`;
    this.qInstruction.textContent = q.instruction || "Vyber správnou možnost:";

    // Transformation Prompt Context
    if (q.promptContext && q.keyWord) {
      this.qPromptContext.style.display = "block";
      this.qPromptText.textContent = `"${q.promptContext}"`;
      this.qKeyWord.textContent = q.keyWord;
    } else {
      this.qPromptContext.style.display = "none";
    }

    // Question text (highlight blanks)
    const formattedText = q.question.replace(/_{3,}/g, '<span style="color: #60a5fa; text-decoration: underline; text-underline-offset: 4px;">&nbsp;&nbsp;&nbsp;________&nbsp;&nbsp;&nbsp;</span>');
    this.qQuestionText.innerHTML = formattedText;

    // Multiple Choice vs Text
    if (q.type === "choice") {
      this.choiceOptionsContainer.style.display = "flex";
      this.textInputContainer.style.display = "none";
      this.renderChoiceOptions(q);
    } else {
      this.choiceOptionsContainer.style.display = "none";
      this.textInputContainer.style.display = "flex";
      this.textAnswerInput.value = "";
      this.textAnswerInput.disabled = false;
      this.submitTextBtn.disabled = false;
      setTimeout(() => this.textAnswerInput.focus(), 50);
    }
  }

  renderChoiceOptions(q) {
    this.choiceOptionsContainer.innerHTML = "";
    const letters = ["A", "B", "C", "D"];

    q.options.forEach((optText, idx) => {
      const btn = document.createElement("button");
      btn.className = "option-btn";
      btn.innerHTML = `
        <span class="option-letter">${letters[idx]}</span>
        <span class="option-label">${optText}</span>
      `;
      btn.addEventListener("click", () => this.handleChoiceSelect(idx, btn));
      this.choiceOptionsContainer.appendChild(btn);
    });
  }

  handleChoiceSelect(selectedIndex, selectedBtn) {
    if (this.isAnswerSubmitted) return;
    this.isAnswerSubmitted = true;

    const q = this.currentQuestion;
    const isCorrect = selectedIndex === q.answer;

    // Style the clicked button
    if (isCorrect) {
      selectedBtn.classList.add("selected-correct");
      this.onCorrectAnswer();
    } else {
      selectedBtn.classList.add("selected-wrong");
      // Highlight the correct one
      const allButtons = this.choiceOptionsContainer.querySelectorAll(".option-btn");
      if (allButtons[q.answer]) {
        allButtons[q.answer].classList.add("highlight-correct");
      }
      this.onIncorrectAnswer();
    }

    this.showFeedback(isCorrect, q.options[q.answer]);
  }

  normalizeAnswer(str) {
    return (str || "")
      .toLowerCase()
      .trim()
      .replace(/['’]/g, "'") // normalize curly apostrophes
      .replace(/\s+/g, " "); // collapse multiple spaces
  }

  handleTextSubmit() {
    if (this.isAnswerSubmitted) return;
    const userInput = this.textAnswerInput.value.trim();
    if (!userInput) return;

    this.isAnswerSubmitted = true;
    this.textAnswerInput.disabled = true;
    this.submitTextBtn.disabled = true;

    const q = this.currentQuestion;
    const normalizedUser = this.normalizeAnswer(userInput);
    
    // Check against array of possible accepted answers
    const acceptedList = Array.isArray(q.answer) ? q.answer : [q.answer];
    const isCorrect = acceptedList.some(ans => this.normalizeAnswer(ans) === normalizedUser);

    if (isCorrect) {
      this.onCorrectAnswer();
    } else {
      this.onIncorrectAnswer();
    }

    const displayedAnswer = acceptedList[0];
    this.showFeedback(isCorrect, displayedAnswer);
  }

  onCorrectAnswer() {
    this.playAudio("correct");

    // Remove from mistakes if in mistake bank
    if (this.mistakes.includes(this.currentQuestion.id)) {
      this.mistakes = this.mistakes.filter(id => id !== this.currentQuestion.id);
      localStorage.setItem("c1_mistakes", JSON.stringify(this.mistakes));
      this.updateMistakesCountUI();
    }

    // Increment today's correct count
    this.todayCorrectCount += 1;
    localStorage.setItem("c1_today_correct", this.todayCorrectCount);

    // Check if daily goal achieved today
    if (this.todayCorrectCount === this.DAILY_GOAL) {
      this.triggerDailyGoalAchieved();
    }

    this.updateStatsUI();
  }

  onIncorrectAnswer() {
    this.playAudio("incorrect");

    // Add to mistakes bank if not already present
    if (!this.mistakes.includes(this.currentQuestion.id)) {
      this.mistakes.push(this.currentQuestion.id);
      localStorage.setItem("c1_mistakes", JSON.stringify(this.mistakes));
      this.updateMistakesCountUI();
    }
  }

  triggerDailyGoalAchieved() {
    // Only increment streak once per day!
    if (this.lastCompletedDate !== this.todayDateStr) {
      this.streak += 1;
      this.lastCompletedDate = this.todayDateStr;
      localStorage.setItem("c1_streak", this.streak);
      localStorage.setItem("c1_last_completed_date", this.lastCompletedDate);

      // Show celebration modal
      setTimeout(() => {
        this.playAudio("fanfare");
        this.celebrationStreakVal.textContent = `${this.streak} ${this.streak === 1 ? "den" : (this.streak < 5 ? "dny" : "dní")}`;
        this.celebrationOverlay.classList.add("visible");
      }, 500);
    }
  }

  showFeedback(isCorrect, correctAnsText) {
    const q = this.currentQuestion;

    if (isCorrect) {
      this.feedbackSheet.className = "feedback-sheet visible is-correct";
      this.statusIcon.textContent = "🎉";
      this.statusTitle.textContent = "Skvěle! Správná odpověď";
      this.correctAnswerDisplay.style.display = "none";
    } else {
      this.feedbackSheet.className = "feedback-sheet visible is-wrong";
      this.statusIcon.textContent = "❌";
      this.statusTitle.textContent = "Těsně vedle!";
      this.correctAnswerDisplay.style.display = "block";
      this.correctAnswerDisplay.innerHTML = `Správně mělo být: <strong>${correctAnsText}</strong>`;
    }

    // Explanation & Tip
    this.explanationText.textContent = q.explanation || "Toto je oficiální pravidlo pro tuto C1 strukturu.";

    if (q.tip) {
      this.tipBox.style.display = "flex";
      this.tipText.textContent = q.tip;
    } else {
      this.tipBox.style.display = "none";
    }
  }

  loadNextQuestion() {
    this.currentQuestionIndex += 1;
    this.renderCurrentQuestion();
  }

  updateStatsUI() {
    this.streakCountEl.textContent = this.streak;
    this.dailyProgressTextEl.textContent = `${Math.min(this.todayCorrectCount, this.DAILY_GOAL)}/${this.DAILY_GOAL}`;
    if (this.todayCorrectCount >= this.DAILY_GOAL) {
      this.dailyProgressTextEl.style.color = "#4ade80";
    } else {
      this.dailyProgressTextEl.style.color = "#93c5fd";
    }
  }

  // Web Audio API Synthesizer (Works 100% offline with zero audio files)
  playAudio(type) {
    if (!this.soundEnabled) return;
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      if (!this.audioCtx) {
        this.audioCtx = new AudioContext();
      }
      if (this.audioCtx.state === "suspended") {
        this.audioCtx.resume();
      }

      const now = this.audioCtx.currentTime;

      if (type === "correct") {
        // High, cheerful ascending major triad chord (C5 - E5 - G5)
        const notes = [523.25, 659.25, 783.99];
        notes.forEach((freq, idx) => {
          const osc = this.audioCtx.createOscillator();
          const gain = this.audioCtx.createGain();
          osc.type = "sine";
          osc.frequency.setValueAtTime(freq, now + idx * 0.07);
          gain.gain.setValueAtTime(0, now + idx * 0.07);
          gain.gain.linearRampToValueAtTime(0.18, now + idx * 0.07 + 0.02);
          gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.07 + 0.35);
          osc.connect(gain);
          gain.connect(this.audioCtx.destination);
          osc.start(now + idx * 0.07);
          osc.stop(now + idx * 0.07 + 0.4);
        });
      } else if (type === "incorrect") {
        // Subtle, low pitch downward bump
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();
        osc.type = "triangle";
        osc.frequency.setValueAtTime(220, now);
        osc.frequency.exponentialRampToValueAtTime(110, now + 0.25);
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
        osc.connect(gain);
        gain.connect(this.audioCtx.destination);
        osc.start(now);
        osc.stop(now + 0.28);
      } else if (type === "fanfare") {
        // Celebration Fanfare
        const melody = [523.25, 659.25, 783.99, 1046.50];
        melody.forEach((freq, idx) => {
          const osc = this.audioCtx.createOscillator();
          const gain = this.audioCtx.createGain();
          osc.type = "triangle";
          osc.frequency.setValueAtTime(freq, now + idx * 0.12);
          gain.gain.setValueAtTime(0, now + idx * 0.12);
          gain.gain.linearRampToValueAtTime(0.25, now + idx * 0.12 + 0.02);
          gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.12 + 0.5);
          osc.connect(gain);
          gain.connect(this.audioCtx.destination);
          osc.start(now + idx * 0.12);
          osc.stop(now + idx * 0.12 + 0.55);
        });
      }
    } catch {
      // Audio playback silently fails if autoplay restricted
    }
  }

  initServiceWorker() {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker.register("./sw.js")
          .then(() => {
            console.log("C1 PWA Service Worker aktivní - offline režim připraven.");
          })
          .catch((err) => {
            console.log("Service Worker registrace selhala (běží pravděpodobně přes file://):", err);
          });
      });
    }
  }
}

// Spustit aplikaci po načtení DOMu
document.addEventListener("DOMContentLoaded", () => {
  window.c1App = new C1App();
});
