const CACHE_NAME = 'mapa-dron-cache-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './img/img1.jpg',
  './img/img2.jpg',
  'https://unpkg.com/leaflet/dist/leaflet.css',
  'https://unpkg.com/leaflet/dist/leaflet.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
