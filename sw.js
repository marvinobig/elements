const cacheName = "elements-v1";

const staticAssets = [
  "./public",
  "./site.webmanifest",
  "./public/index.html",
  "./public/stylesheet/elements.css",
  "./public/script/element.bundle.js",
  "./public/assets/images/android-chrome-192x192.png",
  "./public/assets/images/android-chrome-512x512.png",
  "./public/assets/images/apple-touch-icon.png",
  "./public/assets/images/favicon-16x16.png",
  "./public/assets/images/favicon-32x32.png",
  "./public/assets/images/mstile-150x150.png",
];

self.addEventListener("install", async (e) => {
  const cache = await caches.open(cacheName);
  await cache.addAll(staticAssets);
  console.log("Service Worker Installed");
  return self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    fetch(event.request).catch((error) => {
      return caches.match(event.request);
    })
  );
});
