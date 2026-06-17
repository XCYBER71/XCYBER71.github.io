const CACHE_NAME = "nurtv-v12";

const STATIC_ASSETS = [
  "/manifest.json",
  "https://fonts.googleapis.com/css2?family=Noto+Sans+Bengali:wght@400;600;700&family=Inter:wght@400;500;600;700;800&display=swap",
  "https://cdn.jsdelivr.net/npm/hls.js@latest",
];

const HTML_FILES = [
  "/",
  "/index.html",
  "/about.html",
  "/privacy.html",
  "/terms.html",
];

self.addEventListener("install", (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(STATIC_ASSETS).catch(() => {}))
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))
        )
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);

  if (event.request.method !== "GET") return;

  if (
    [".m3u8", ".ts", ".mpd", ".aac", ".mp4"].some((ext) =>
      url.pathname.endsWith(ext)
    )
  )
    return;

  const isHTML =
    event.request.headers.get("accept")?.includes("text/html") ||
    HTML_FILES.includes(url.pathname);

  if (isHTML) {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          if (response && response.status === 200) {
            caches
              .open(CACHE_NAME)
              .then((cache) => cache.put(event.request, response.clone()));
          }
          return response;
        })
        .catch(() =>
          caches
            .match(event.request)
            .then((c) => c || caches.match("/index.html"))
        )
    );
    return;
  }

  if (url.hostname !== location.hostname) {
    event.respondWith(
      caches.match(event.request).then((cached) => {
        if (cached) return cached;
        return fetch(event.request).then((response) => {
          if (response && response.status === 200) {
            caches
              .open(CACHE_NAME)
              .then((cache) => cache.put(event.request, response.clone()));
          }
          return response;
        });
      })
    );
  }
});
