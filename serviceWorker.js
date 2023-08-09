const CACHE_NAME = "grade-calculator-cache-v1";
const urlsToCache = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./pictures/BG.jpg",
  "./pictures/BG1.jpg",
  "./fonts/FCParagraph[Non-commercial]-Light.ttf",
  "icon.png"
];

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
      caches.open(CACHE_NAME).then(cache => {
        cache.addAll(urlsToCache);
      })
    );
  });
  

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
