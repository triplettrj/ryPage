    import { initializeApp }
      from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
    import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged }
      from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";
    import { getFirestore, doc, getDoc, setDoc, onSnapshot }
      from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";

    const firebaseConfig = {
      apiKey: "AIzaSyDpWc6Uia84FhT0G27JzHo2dQCBxtMLMUE",
      authDomain: "my-kitchen-e4079.firebaseapp.com",
      projectId: "my-kitchen-e4079",
      storageBucket: "my-kitchen-e4079.firebasestorage.app",
      messagingSenderId: "49025591071",
      appId: "1:49025591071:web:008418cdb3e7ed7b6db22a",
      measurementId: "G-GFBF0Q7JRG"
    };

    const app  = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const db   = getFirestore(app);
    const provider = new GoogleAuthProvider();

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

    // ── Firestore helpers ─────────────────────────────────────────
    let _unsubscribeSnapshot = null;
    let _saveTimer = null;
    let _applyingCloud = false;   // guard: don't echo our own writes back

    function userDoc(uid) {
      return doc(db, "users", uid, "kitchen", "state");
    }

    // Strip non-serialisable / oversized fields before writing to Firestore.
    function prepForCloud(s) {
      const clone = JSON.parse(JSON.stringify(s));
      // Drop any base64 scan preview — too large and ephemeral
      if (clone.closeUpDraft) delete clone.closeUpDraft.dataUrl;
      return clone;
    }

    // Merge cloud state into local state and re-render everything.
    function applyCloudState(cloudData) {
      if (!cloudData) return;
      _applyingCloud = true;
      try {
        const d = window._defaultState ? window._defaultState() : {};
        window._state = { ...d, ...cloudData, settings: { ...d.settings, ...(cloudData.settings || {}) } };
        if (window._migrateState) window._state = window._migrateState(window._state);
        // Sync back to localStorage as a local cache
        try { localStorage.setItem("myKitchen:v2", JSON.stringify(window._state)); } catch (_) {}
        // Trigger full re-render
        if (window._renderAll) window._renderAll();
      } finally {
        _applyingCloud = false;
      }
    }

    // Debounced Firestore write — called from saveState() in main script.
    function scheduleSave(uid, stateSnapshot) {
      if (_applyingCloud) return;   // don't write while we're loading cloud data
      if (_saveTimer) clearTimeout(_saveTimer);
      _saveTimer = setTimeout(async () => {
        try {
          await setDoc(userDoc(uid), prepForCloud(stateSnapshot));
          if (authSyncStatus) { authSyncStatus.textContent = "Synced ✓"; setTimeout(() => { authSyncStatus.textContent = ""; }, 2000); }
        } catch (e) {
          console.warn("Firestore save failed:", e);
          if (authSyncStatus) authSyncStatus.textContent = "Sync failed";
        }
      }, 2500);
    }

    // Expose save hook to main script (different <script> context)
    window._fbScheduleSave = null;   // set to (state) => void when signed in

    // Start a real-time listener so other devices push changes here live.
    function startListener(uid) {
      if (_unsubscribeSnapshot) _unsubscribeSnapshot();
      _unsubscribeSnapshot = onSnapshot(userDoc(uid), snap => {
        if (!snap.exists()) return;
        // Only apply updates that came from another device (not our own pending write)
        if (snap.metadata.hasPendingWrites) return;
        if (_applyingCloud) return;
        applyCloudState(snap.data());
      });
    }

    function stopListener() {
      if (_unsubscribeSnapshot) { _unsubscribeSnapshot(); _unsubscribeSnapshot = null; }
      window._fbScheduleSave = null;
    }

    // ── Auth state ────────────────────────────────────────────────
    onAuthStateChanged(auth, async user => {
      if (user) {
        // Update header avatar
        if (user.photoURL) {
          authBtn.innerHTML = `<img src="${user.photoURL}" alt="${user.displayName}" style="width:100%;height:100%;border-radius:50%;object-fit:cover;">`;
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

        // Load cloud data — cloud wins if it exists, otherwise upload local
        try {
          const snap = await getDoc(userDoc(user.uid));
          if (snap.exists()) {
            applyCloudState(snap.data());
            if (authSyncStatus) { authSyncStatus.textContent = "Synced ✓"; setTimeout(() => { authSyncStatus.textContent = ""; }, 2000); }
          } else {
            // First sign-in on this account — push local data up
            const local = window._state;
            if (local) await setDoc(userDoc(user.uid), prepForCloud(local));
            if (authSyncStatus) { authSyncStatus.textContent = "Saved to cloud ✓"; setTimeout(() => { authSyncStatus.textContent = ""; }, 2500); }
          }
        } catch (e) {
          console.warn("Firestore load failed:", e);
          if (authSyncStatus) authSyncStatus.textContent = "Offline — using local data";
        }

        // Wire save hook and start live listener
        window._fbScheduleSave = (s) => scheduleSave(user.uid, s);
        startListener(user.uid);

      } else {
        // Signed out
        stopListener();
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

    authSignInBtn.addEventListener("click", async () => {
      try { await signInWithPopup(auth, provider); }
      catch (err) { if (err.code !== "auth/popup-closed-by-user") alert("Sign-in failed: " + err.message); }
    });

    authSignOutBtn.addEventListener("click", async () => {
      await signOut(auth);
      authPanel.classList.remove("show");
    });
