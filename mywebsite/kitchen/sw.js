// My Kitchen — Service Worker
// Network-first strategy: always tries to fetch latest, falls back to cache when offline.

const CACHE_VERSION = "my-kitchen-v12";
const SHELL = [
  "./",
  "./index.html",
  "./app.js",
  "./styles.css",
  "./firebase.js",
  "./manifest.json"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then((cache) => cache.addAll(SHELL)).catch(() => {})
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_VERSION).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;

  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  // Network-first: fetch fresh copy, cache it, fall back to cache if offline.
  event.respondWith(
    fetch(req)
      .then((res) => {
        if (res && res.status === 200 && res.type === "basic") {
          const copy = res.clone();
          caches.open(CACHE_VERSION).then((cache) => cache.put(req, copy));
        }
        return res;
      })
      .catch(() =>
        caches.match(req).then((cached) => cached || caches.match("./index.html"))
      )
  );
});

// ── Notification click → open app to inventory tab ───────────
self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  const target = (event.notification.data && event.notification.data.url) || "/kitchen/";
  event.waitUntil(
    self.clients.matchAll({ type: "window", includeUncontrolled: true }).then((clients) => {
      // Focus existing tab if open
      for (const client of clients) {
        if (client.url.includes("/kitchen") && "focus" in client) {
          client.focus();
          client.postMessage({ type: "NOTIF_CLICK_INVENTORY" });
          return;
        }
      }
      // Otherwise open a new window
      if (self.clients.openWindow) return self.clients.openWindow(target);
    })
  );
});
