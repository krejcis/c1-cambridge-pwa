// ========================================================
// Certin90 – Lightweight Offline-First Supabase Client
// Zero external dependencies (works cleanly with Service Worker offline cache)
// ========================================================

const SUPABASE_URL = "https://swumsigpvhsjnnrtrdbj.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_sRzbr6yOZ9wo85U4Jv7qcg_o-hvRVyk";
const SUPABASE_SESSION_KEY = "certin90_supabase_session_v1";
const SUPABASE_PKCE_VERIFIER_KEY = "certin90_pkce_verifier_v1";

function toBase64Url(bytes) {
  let str = "";
  for (let i = 0; i < bytes.length; i++) {
    str += String.fromCharCode(bytes[i]);
  }
  return btoa(str).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

class CertinSupabaseClient {
  constructor(url = SUPABASE_URL, publishableKey = SUPABASE_PUBLISHABLE_KEY) {
    this.url = url.replace(/\/+$/, "");
    this.publishableKey = publishableKey;
    this.session = null;
    this.pendingRecovery = false;
    this.lastAuthCallbackError = null;
    this._refreshPromise = null;
    this.loadStoredSession();
    this.consumeAuthCallbackFromHash();
  }

  loadStoredSession() {
    try {
      const raw = localStorage.getItem(SUPABASE_SESSION_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && parsed.access_token && parsed.user) {
          this.session = parsed;
        }
      }
    } catch (_) {
      this.session = null;
    }
  }

  saveSession(session) {
    this.session = session || null;
    try {
      if (session) {
        localStorage.setItem(SUPABASE_SESSION_KEY, JSON.stringify(session));
      } else {
        localStorage.removeItem(SUPABASE_SESSION_KEY);
      }
    } catch (_) {}
  }

  consumeAuthCallbackFromHash() {
    if (typeof window === "undefined") return false;

    // Check query errors returned by OAuth redirects
    if (window.location.search) {
      const searchParams = new URLSearchParams(window.location.search);
      const oauthErr = searchParams.get("error_description") || searchParams.get("error");
      if (oauthErr) {
        this.lastAuthCallbackError = oauthErr;
        try {
          searchParams.delete("error");
          searchParams.delete("error_code");
          searchParams.delete("error_description");
          const nextSearch = searchParams.toString();
          window.history.replaceState(null, "", window.location.pathname + (nextSearch ? `?${nextSearch}` : "") + window.location.hash);
        } catch (_) {}
      }
    }

    if (!window.location.hash) return false;
    const hash = window.location.hash.replace(/^#/, "");
    const hashParams = new URLSearchParams(hash);

    const hashErr = hashParams.get("error_description") || hashParams.get("error");
    if (hashErr) {
      this.lastAuthCallbackError = hashErr;
      try {
        window.history.replaceState(null, "", window.location.pathname + window.location.search);
      } catch (_) {}
      return false;
    }

    if (!hash.includes("access_token=")) return false;

    const accessToken = hashParams.get("access_token");
    const refreshToken = hashParams.get("refresh_token");
    const expiresIn = parseInt(hashParams.get("expires_in") || "3600", 10);
    const flowType = hashParams.get("type");
    if (!accessToken) return false;

    if (flowType === "recovery") {
      this.pendingRecovery = true;
    }

    const expiresAt = Math.floor(Date.now() / 1000) + (Number.isFinite(expiresIn) ? expiresIn : 3600);
    this.saveSession({
      access_token: accessToken,
      refresh_token: refreshToken || "",
      expires_at: expiresAt,
      user: this.decodeJwtUser(accessToken) || { id: "", email: "" }
    });

    try {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    } catch (_) {}
    return true;
  }

  async completePkceExchangeIfNeeded() {
    if (typeof window === "undefined" || !window.location.search) return false;
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");
    if (!code) return false;

    let verifier = "";
    try {
      verifier = localStorage.getItem(SUPABASE_PKCE_VERIFIER_KEY) || "";
      localStorage.removeItem(SUPABASE_PKCE_VERIFIER_KEY);
    } catch (_) {}

    params.delete("code");
    const nextSearch = params.toString();
    try {
      window.history.replaceState(null, "", window.location.pathname + (nextSearch ? `?${nextSearch}` : ""));
    } catch (_) {}

    if (!verifier) return false;

    try {
      const res = await fetch(`${this.url}/auth/v1/token?grant_type=pkce`, {
        method: "POST",
        headers: this.baseHeaders(),
        body: JSON.stringify({ auth_code: code, code_verifier: verifier })
      });
      const data = await this.parseJsonSafe(res);
      if (!res.ok) {
        this.lastAuthCallbackError = (data && (data.error_description || data.msg || data.message)) || "OAuth přihlášení selhalo.";
        return false;
      }
      const normalized = this.normalizeSessionPayload(data);
      if (normalized) {
        this.saveSession(normalized);
        return true;
      }
    } catch (err) {
      this.lastAuthCallbackError = err?.message || "Nepodařilo se dokončit Google přihlášení.";
    }
    return false;
  }

  async startGoogleOAuth(redirectTo) {
    if (typeof window === "undefined") return;
    const targetRedirect = redirectTo || `${window.location.origin}${window.location.pathname}?app=1`;
    const params = new URLSearchParams({
      provider: "google",
      redirect_to: targetRedirect
    });

    if (window.crypto && window.crypto.subtle && window.crypto.getRandomValues) {
      const rawBytes = new Uint8Array(32);
      window.crypto.getRandomValues(rawBytes);
      const verifier = toBase64Url(rawBytes);
      const digest = await window.crypto.subtle.digest("SHA-256", new TextEncoder().encode(verifier));
      const challenge = toBase64Url(new Uint8Array(digest));
      try {
        localStorage.setItem(SUPABASE_PKCE_VERIFIER_KEY, verifier);
      } catch (_) {}
      params.set("code_challenge", challenge);
      params.set("code_challenge_method", "s256");
    }

    window.location.assign(`${this.url}/auth/v1/authorize?${params.toString()}`);
  }

  decodeJwtUser(jwt) {
    try {
      const parts = String(jwt).split(".");
      if (parts.length < 2) return null;
      const b64 = parts[1].replace(/-/g, "+").replace(/_/g, "/");
      const json = decodeURIComponent(
        atob(b64)
          .split("")
          .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
          .join("")
      );
      const claims = JSON.parse(json);
      return claims && claims.sub ? { id: claims.sub, email: claims.email || "" } : null;
    } catch (_) {
      return null;
    }
  }

  isSignedIn() {
    return Boolean(this.session && this.session.access_token && this.session.user && this.session.user.id);
  }

  getUser() {
    return this.session ? this.session.user : null;
  }

  baseHeaders(extra = {}) {
    return {
      apikey: this.publishableKey,
      "Content-Type": "application/json",
      ...extra
    };
  }

  async parseJsonSafe(res) {
    const text = await res.text();
    if (!text) return null;
    try {
      return JSON.parse(text);
    } catch (_) {
      return { message: text };
    }
  }

  normalizeSessionPayload(data) {
    if (!data || !data.access_token || !data.user) return null;
    const nowSec = Math.floor(Date.now() / 1000);
    const expiresAt = data.expires_at
      ? Number(data.expires_at)
      : nowSec + Number(data.expires_in || 3600);
    return {
      access_token: data.access_token,
      refresh_token: data.refresh_token || "",
      expires_at: expiresAt,
      user: data.user
    };
  }

  async signUp(email, password, redirectTo) {
    const query = redirectTo ? `?redirect_to=${encodeURIComponent(redirectTo)}` : "";
    const res = await fetch(`${this.url}/auth/v1/signup${query}`, {
      method: "POST",
      headers: this.baseHeaders(),
      body: JSON.stringify({
        email: String(email).trim(),
        password: String(password)
      })
    });
    const data = await this.parseJsonSafe(res);
    if (!res.ok) {
      throw new Error((data && (data.msg || data.error_description || data.message)) || "Registrace se nezdařila.");
    }
    const normalized = this.normalizeSessionPayload(data);
    if (normalized) {
      this.saveSession(normalized);
      return { session: normalized, needsEmailConfirmation: false };
    }
    return { session: null, user: data?.user || data, needsEmailConfirmation: true };
  }

  async signInWithPassword(email, password) {
    const res = await fetch(`${this.url}/auth/v1/token?grant_type=password`, {
      method: "POST",
      headers: this.baseHeaders(),
      body: JSON.stringify({
        email: String(email).trim(),
        password: String(password)
      })
    });
    const data = await this.parseJsonSafe(res);
    if (!res.ok) {
      throw new Error((data && (data.error_description || data.msg || data.message)) || "Přihlášení se nezdařilo.");
    }
    const normalized = this.normalizeSessionPayload(data);
    if (!normalized) throw new Error("Server nevrátil platnou relaci.");
    this.saveSession(normalized);
    return normalized;
  }

  async sendPasswordReset(email, redirectTo) {
    const query = redirectTo ? `?redirect_to=${encodeURIComponent(redirectTo)}` : "";
    const res = await fetch(`${this.url}/auth/v1/recover${query}`, {
      method: "POST",
      headers: this.baseHeaders(),
      body: JSON.stringify({ email: String(email).trim() })
    });
    const data = await this.parseJsonSafe(res);
    if (!res.ok) {
      throw new Error((data && (data.msg || data.error_description || data.message)) || "Odeslání resetu hesla selhalo.");
    }
    return true;
  }

  async updatePassword(newPassword) {
    const res = await this.authedFetch("/auth/v1/user", {
      method: "PUT",
      body: JSON.stringify({ password: String(newPassword) })
    });
    this.pendingRecovery = false;
    return res;
  }

  async refreshSession() {
    if (!this.session || !this.session.refresh_token) return null;
    if (this._refreshPromise) return this._refreshPromise;

    this._refreshPromise = (async () => {
      try {
        const res = await fetch(`${this.url}/auth/v1/token?grant_type=refresh_token`, {
          method: "POST",
          headers: this.baseHeaders(),
          body: JSON.stringify({ refresh_token: this.session.refresh_token })
        });
        const data = await this.parseJsonSafe(res);
        if (!res.ok) {
          if (res.status === 400 || res.status === 401) {
            this.saveSession(null);
          }
          return null;
        }
        const normalized = this.normalizeSessionPayload(data);
        if (normalized) {
          this.saveSession(normalized);
        }
        return normalized;
      } catch (_) {
        return this.session;
      } finally {
        this._refreshPromise = null;
      }
    })();

    return this._refreshPromise;
  }

  async ensureValidAccessToken() {
    if (!this.session || !this.session.access_token) return null;
    const nowSec = Math.floor(Date.now() / 1000);
    if (!this.session.expires_at || this.session.expires_at - nowSec < 60) {
      const refreshed = await this.refreshSession();
      if (!refreshed) return null;
    }
    if (!this.session?.user?.email && this.session?.access_token) {
      try {
        const userRes = await fetch(`${this.url}/auth/v1/user`, {
          headers: this.baseHeaders({ Authorization: `Bearer ${this.session.access_token}` })
        });
        if (userRes.ok) {
          const u = await userRes.json();
          if (u && u.id) {
            this.saveSession({ ...this.session, user: u });
          }
        }
      } catch (_) {}
    }
    return this.session?.access_token || null;
  }

  async signOut() {
    const token = this.session?.access_token;
    this.saveSession(null);
    if (!token) return;
    try {
      await fetch(`${this.url}/auth/v1/logout`, {
        method: "POST",
        headers: this.baseHeaders({ Authorization: `Bearer ${token}` })
      });
    } catch (_) {}
  }

  async authedFetch(path, options = {}) {
    const token = await this.ensureValidAccessToken();
    if (!token) throw new Error("NOT_AUTHENTICATED");

    const res = await fetch(`${this.url}${path}`, {
      ...options,
      headers: {
        ...this.baseHeaders({ Authorization: `Bearer ${token}` }),
        ...(options.headers || {})
      }
    });
    const data = await this.parseJsonSafe(res);
    if (!res.ok) {
      const err = new Error((data && (data.message || data.error)) || `HTTP ${res.status}`);
      err.status = res.status;
      err.payload = data;
      throw err;
    }
    return data;
  }

  async fetchCloudBundle() {
    const user = this.getUser();
    if (!user || !user.id) return null;
    const uid = encodeURIComponent(user.id);
    const [profiles, progressRows, subRows] = await Promise.all([
      this.authedFetch(`/rest/v1/profiles?id=eq.${uid}&select=*`),
      this.authedFetch(`/rest/v1/user_level_progress?user_id=eq.${uid}&select=*`),
      this.authedFetch(`/rest/v1/user_subscriptions?user_id=eq.${uid}&select=*`)
    ]);
    return {
      profile: Array.isArray(profiles) ? profiles[0] || null : null,
      levels: Array.isArray(progressRows) ? progressRows : [],
      subscription: Array.isArray(subRows) ? subRows[0] || null : null
    };
  }

  async upsertProfile(profileData) {
    const user = this.getUser();
    if (!user || !user.id) return null;
    return this.authedFetch("/rest/v1/profiles?on_conflict=id", {
      method: "POST",
      headers: { Prefer: "resolution=merge-duplicates,return=representation" },
      body: JSON.stringify({
        id: user.id,
        ...profileData
      })
    });
  }

  async upsertLevelProgress(level, startDate, stateJson, clientUpdatedAt) {
    const user = this.getUser();
    if (!user || !user.id) return null;
    return this.authedFetch("/rest/v1/user_level_progress?on_conflict=user_id,level", {
      method: "POST",
      headers: { Prefer: "resolution=merge-duplicates,return=representation" },
      body: JSON.stringify({
        user_id: user.id,
        level,
        start_date: startDate,
        state_json: stateJson,
        client_updated_at: clientUpdatedAt || new Date().toISOString()
      })
    });
  }

  async listEssaySubmissions(limit = 10) {
    const user = this.getUser();
    if (!user || !user.id) return [];
    const uid = encodeURIComponent(user.id);
    const data = await this.authedFetch(
      `/rest/v1/essay_submissions?user_id=eq.${uid}&select=id,level,task_type,prompt_text,essay_text,word_count,total_score,max_score,ai_feedback_json,model_used,created_at&order=created_at.desc&limit=${limit}`
    );
    return Array.isArray(data) ? data : [];
  }

  async gradeEssay({ level, taskType, promptText, essayText }) {
    return this.authedFetch("/functions/v1/grade-essay", {
      method: "POST",
      body: JSON.stringify({ level, taskType, promptText, essayText })
    });
  }

  async submitFeedback({ category = "bug", message, appContext = {} }) {
    const user = this.getUser();
    if (!user || !user.id) throw new Error("NOT_AUTHENTICATED");
    return this.authedFetch("/rest/v1/user_feedback", {
      method: "POST",
      headers: { Prefer: "return=representation" },
      body: JSON.stringify({
        user_id: user.id,
        category,
        message: String(message || "").trim(),
        app_context: appContext
      })
    });
  }
}

if (typeof window !== "undefined") {
  window.CertinSupabaseClient = CertinSupabaseClient;
}
