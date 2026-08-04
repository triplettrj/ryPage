    // ── Manual Firebase implementation ──────────────────────────────
    // Bypasses Firebase Web SDK auth + Firestore entirely because both
    // hang in WKWebView (IndexedDB and localStorage writes deadlock).
    // Uses the @capacitor-firebase/authentication plugin for Google OAuth
    // and direct REST API calls (routed through CapacitorHttp / native URLSession)
    // for Firebase Auth token exchange and Firestore reads/writes.

    const firebaseConfig = {
      apiKey: "AIzaSyDpWc6Uia84FhT0G27JzHo2dQCBxtMLMUE",
      authDomain: "my-kitchen-e4079.firebaseapp.com",
      projectId: "my-kitchen-e4079",
    };

    // ── Manual auth state ─────────────────────────────────────────
    // _user shape: {uid, email, displayName, photoURL, idToken, refreshToken, expiresAt}
    let _user = null;
    const _authListeners = [];

    function _notifyAuth() { _authListeners.forEach(fn => { try { fn(_user); } catch(_){} }); }

    function _onAuthStateChanged(fn) {
      _authListeners.push(fn);
      fn(_user); // fire immediately with current state
    }

    // Restore session from localStorage if present
    try {
      const saved = localStorage.getItem("myKitchen:auth");
      if (saved) _user = JSON.parse(saved);
    } catch(_) {}

    function _persistUser() {
      try {
        if (_user) localStorage.setItem("myKitchen:auth", JSON.stringify(_user));
        else       localStorage.removeItem("myKitchen:auth");
      } catch(_) {}
    }

    async function _refreshIdToken() {
      if (!_user?.refreshToken) return null;
      try {
        const r = await fetch(`https://securetoken.googleapis.com/v1/token?key=${firebaseConfig.apiKey}`, {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: `grant_type=refresh_token&refresh_token=${encodeURIComponent(_user.refreshToken)}`
        });
        const d = await r.json();
        if (d.id_token) {
          _user.idToken      = d.id_token;
          _user.refreshToken = d.refresh_token;
          _user.expiresAt    = Date.now() + parseInt(d.expires_in) * 1000;
          _persistUser();
          return _user.idToken;
        }
      } catch (e) { console.warn("[Auth] refresh failed", e); }
      return null;
    }

    async function _getValidToken() {
      if (!_user) return null;
      if (Date.now() >= (_user.expiresAt || 0) - 60000) return await _refreshIdToken();
      return _user.idToken;
    }

    // ── Firestore via REST API ────────────────────────────────────
    function _docUrl(uid) {
      return `https://firestore.googleapis.com/v1/projects/${firebaseConfig.projectId}/databases/(default)/documents/users/${uid}/kitchen/state`;
    }

    function _encodeFsValue(v) {
      if (v === null || v === undefined) return { nullValue: null };
      if (typeof v === "string") return { stringValue: v };
      if (typeof v === "boolean") return { booleanValue: v };
      if (typeof v === "number") {
        return Number.isInteger(v) ? { integerValue: String(v) } : { doubleValue: v };
      }
      if (Array.isArray(v)) return { arrayValue: { values: v.map(_encodeFsValue) } };
      if (typeof v === "object") return { mapValue: { fields: _encodeFsFields(v) } };
      return { stringValue: String(v) };
    }
    function _encodeFsFields(obj) {
      const f = {};
      for (const k in obj) f[k] = _encodeFsValue(obj[k]);
      return f;
    }
    function _parseFsValue(v) {
      if (!v) return null;
      if ("nullValue" in v)    return null;
      if ("stringValue" in v)  return v.stringValue;
      if ("booleanValue" in v) return v.booleanValue;
      if ("integerValue" in v) return parseInt(v.integerValue);
      if ("doubleValue" in v)  return v.doubleValue;
      if (v.arrayValue) return (v.arrayValue.values || []).map(_parseFsValue);
      if (v.mapValue)   return _parseFsFields(v.mapValue.fields);
      return null;
    }
    function _parseFsFields(fields) {
      if (!fields) return {};
      const r = {};
      for (const k in fields) r[k] = _parseFsValue(fields[k]);
      return r;
    }

    async function _firestoreGet(uid) {
      const token = await _getValidToken();
      if (!token) return null;
      try {
        const r = await fetch(_docUrl(uid), { headers: { "Authorization": `Bearer ${token}` } });
        if (r.status === 404) return null;
        if (!r.ok) { console.warn("[FS] get failed", r.status); return null; }
        const data = await r.json();
        return _parseFsFields(data.fields);
      } catch (e) { console.warn("[FS] get error", e); return null; }
    }

    async function _firestoreSet(uid, obj) {
      const token = await _getValidToken();
      if (!token) return false;
      try {
        const r = await fetch(_docUrl(uid), {
          method: "PATCH",
          headers: { "Authorization": `Bearer ${token}`, "Content-Type": "application/json" },
          body: JSON.stringify({ fields: _encodeFsFields(obj) })
        });
        return r.ok;
      } catch (e) { console.warn("[FS] set error", e); return false; }
    }

    // ── DOM refs ──────────────────────────────────────────────────
    const authBtn        = document.getElementById("authBtn");
    const authPanel      = document.getElementById("authPanel");
    const authUserInfo   = document.getElementById("authUserInfo");
    const authDivider    = document.getElementById("authDivider");
    const authAvatar     = document.getElementById("authAvatar");
    const authName       = document.getElementById("authName");
    const authEmail      = document.getElementById("authEmail");
    const authSignInBtn  = document.getElementById("authSignInBtn");
    const authSignOutBtn = document.getElementById("authSignOutBtn");
    const authSyncStatus = document.getElementById("authSyncStatus");

    // ── Cloud sync helpers (called from main script) ──────────────
    let _saveTimer = null;
    let _applyingCloud = false;
    let _pollTimer = null;
    let _lastCloudJson = null;
    let _lastLocalSaveAt = 0;     // timestamp of most recent local saveState
    let _saveInFlight = false;     // true while a cloud PATCH is actually executing

    function applyCloudState(cloudData) {
      if (!cloudData) return;
      _applyingCloud = true;
      try {
        const d = window._defaultState ? window._defaultState() : {};
        window._state = { ...d, ...cloudData, settings: { ...d.settings, ...(cloudData.settings || {}) } };
        if (window._migrateState) window._state = window._migrateState(window._state);
        try { localStorage.setItem("myKitchen:v2", JSON.stringify(window._state)); } catch(_) {}
        if (window._renderAll) window._renderAll();
      } finally { _applyingCloud = false; }
    }

    function prepForCloud(s) {
      const clone = JSON.parse(JSON.stringify(s));
      if (clone.closeUpDraft) delete clone.closeUpDraft.dataUrl;
      // Keep the _lastModified that saveState() already stamped.
      // Do NOT re-stamp here — that would make the cloud always appear
      // 2.5s newer than local, causing cloud to overwrite local on every login.
      if (!clone._lastModified) clone._lastModified = Date.now();
      return clone;
    }

    function scheduleSave(uid, snapshot) {
      if (_applyingCloud) return;
      _lastLocalSaveAt = Date.now();
      if (_saveTimer) clearTimeout(_saveTimer);
      _saveTimer = setTimeout(async () => {
        _saveTimer = null;
        _saveInFlight = true;
        const payload = prepForCloud(snapshot);
        const ok = await _firestoreSet(uid, payload);
        _saveInFlight = false;
        if (ok) {
          // Critical: record what we just pushed so polling doesn't echo it back
          _lastCloudJson = JSON.stringify(payload);
        }
        if (authSyncStatus) {
          authSyncStatus.textContent = ok ? "Synced ✓" : "Sync failed";
          if (ok) setTimeout(() => { authSyncStatus.textContent = ""; }, 2000);
        }
      }, 2500);
    }

    window._fbScheduleSave = null;

    function startPolling(uid) {
      stopPolling();
      _pollTimer = setInterval(async () => {
        // Skip polling while we have unflushed local changes — applying cloud
        // here would clobber items the user just added.
        if (_saveTimer || _saveInFlight) return;
        // Skip if user touched state in the last 3s — they may be mid-edit
        if (Date.now() - _lastLocalSaveAt < 3000) return;
        const cloud = await _firestoreGet(uid);
        if (!cloud) return;
        const j = JSON.stringify(cloud);
        if (j === _lastCloudJson) return;
        // Only apply if cloud is actually NEWER than what we last knew about,
        // OR if we have nothing local. Compare by _lastModified timestamp.
        const cloudTs = cloud._lastModified || 0;
        const localTs = (window._state && window._state._lastModified) || 0;
        if (cloudTs > localTs) {
          _lastCloudJson = j;
          if (!_applyingCloud) applyCloudState(cloud);
        } else {
          // Cloud is stale relative to local — push our state up
          _lastCloudJson = j; // record what's there so we don't keep refetching
          if (window._state && window._fbScheduleSave) window._fbScheduleSave(window._state);
        }
      }, 8000); // poll every 8s for cross-device updates
    }
    function stopPolling() {
      if (_pollTimer) { clearInterval(_pollTimer); _pollTimer = null; }
      window._fbScheduleSave = null;
    }

    // ── Auth state UI updater ─────────────────────────────────────
    _onAuthStateChanged(async user => {
      if (user) {
        if (user.photoURL) {
          authBtn.innerHTML = `<img src="${user.photoURL}" alt="${user.displayName||''}" style="width:100%;height:100%;border-radius:50%;object-fit:cover;">`;
        } else {
          authBtn.textContent = user.displayName ? user.displayName[0].toUpperCase() : "👤";
        }
        authBtn.style.borderColor = "var(--green)";
        authAvatar.src = user.photoURL || "";
        authAvatar.style.display = user.photoURL ? "block" : "none";
        authName.textContent = user.displayName || "Signed in";
        authEmail.textContent = user.email || "";
        authUserInfo.style.display = "flex";
        authDivider.style.display = "block";
        authSignInBtn.style.display = "none";
        authSignOutBtn.style.display = "block";
        if (authSyncStatus) authSyncStatus.textContent = "Loading…";

        // Wire save hook FIRST so any user edits during the cloud fetch get queued
        window._fbScheduleSave = (s) => scheduleSave(user.uid, s);

        const cloud = await _firestoreGet(user.uid);
        const local = window._state;
        const cloudTs = (cloud && cloud._lastModified) || 0;
        const localTs = (local && local._lastModified) || 0;

        if (cloud && cloudTs > localTs) {
          // Cloud is newer — pull it down (other device made changes)
          _lastCloudJson = JSON.stringify(cloud);
          applyCloudState(cloud);
          if (authSyncStatus) { authSyncStatus.textContent = "Synced ✓"; setTimeout(() => { authSyncStatus.textContent = ""; }, 2000); }
        } else if (local) {
          // Local is same age or newer — push local up (don't clobber what's here)
          const payload = prepForCloud(local);
          const ok = await _firestoreSet(user.uid, payload);
          if (ok) _lastCloudJson = JSON.stringify(payload);
          if (authSyncStatus) { authSyncStatus.textContent = ok ? "Saved to cloud ✓" : "Sync failed"; setTimeout(() => { authSyncStatus.textContent = ""; }, 2500); }
        }

        startPolling(user.uid);
      } else {
        stopPolling();
        authBtn.innerHTML = "👤";
        authBtn.style.borderColor = "";
        authUserInfo.style.display = "none";
        authDivider.style.display = "none";
        authSignInBtn.style.display = "flex";
        authSignOutBtn.style.display = "none";
        if (authSyncStatus) authSyncStatus.textContent = "";
      }
    });

    // ── Flyout toggle ─────────────────────────────────────────────
    authBtn.addEventListener("click", e => {
      e.stopPropagation();
      authPanel.classList.toggle("show");
    });
    document.addEventListener("click", e => {
      if (!authPanel.contains(e.target) && e.target !== authBtn) {
        authPanel.classList.remove("show");
      }
    });

    // ── Sign in: native Google OAuth → REST API token exchange ────
    authSignInBtn.addEventListener("click", async () => {
      authPanel.classList.remove("show");
      const origHTML = authSignInBtn.innerHTML;
      authSignInBtn.disabled = true;
      authSignInBtn.textContent = "Signing in…";

      try {
        if (!(window.Capacitor && window.Capacitor.isNativePlatform())) {
          showToast("Sign-in only available in the iOS app");
          return;
        }

        const { FirebaseAuthentication } = window.Capacitor.Plugins;
        console.log("[Auth] launching Google sign-in…");
        const result = await FirebaseAuthentication.signInWithGoogle();
        if (!result?.credential?.idToken) {
          showToast("Sign-in cancelled");
          return;
        }
        const googleIdToken = result.credential.idToken;
        console.log("[Auth] got Google idToken, exchanging for Firebase tokens…");

        // Exchange Google idToken → Firebase idToken + refresh token via REST
        const r = await fetch(
          `https://identitytoolkit.googleapis.com/v1/accounts:signInWithIdp?key=${firebaseConfig.apiKey}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              postBody: `id_token=${googleIdToken}&providerId=google.com`,
              requestUri: "http://localhost",
              returnSecureToken: true,
              returnIdpCredential: true
            })
          }
        );
        const d = await r.json();
        if (!d.idToken) {
          console.warn("[Auth] signInWithIdp response:", d);
          showToast("Sign-in failed — " + (d.error?.message || "no token"));
          return;
        }

        _user = {
          uid:          d.localId,
          email:        d.email,
          displayName:  d.displayName || d.fullName || (d.email || "").split("@")[0],
          photoURL:     d.photoUrl,
          idToken:      d.idToken,
          refreshToken: d.refreshToken,
          expiresAt:    Date.now() + parseInt(d.expiresIn) * 1000
        };
        _persistUser();
        console.log("[Auth] signed in as", _user.email);
        _notifyAuth();

      } catch (err) {
        console.warn("[Auth] sign-in error", err);
        const code = err?.code || "";
        if (code !== "auth/popup-closed-by-user" && code !== "auth/cancelled-popup-request") {
          showToast("Sign-in failed — " + (err?.message || code || "Unknown error"));
        }
      } finally {
        authSignInBtn.disabled = false;
        authSignInBtn.innerHTML = origHTML;
      }
    });

    // ── Sign out ──────────────────────────────────────────────────
    authSignOutBtn.addEventListener("click", async () => {
      try {
        if (window.Capacitor && window.Capacitor.isNativePlatform()) {
          const { FirebaseAuthentication } = window.Capacitor.Plugins;
          await FirebaseAuthentication.signOut().catch(() => {});
        }
      } catch(_) {}
      _user = null;
      _persistUser();
      _notifyAuth();
      authPanel.classList.remove("show");
    });
