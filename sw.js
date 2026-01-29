const cacheName = 'pwa-piac-v1';
const filesToCache = [
    '/',
    '/index.html',
    '/style.css',
    '/js/main.js',
    '/manifest.json',
    '/images/favicon-96x96.png',
    '/images/apple-touch-icon.png',
    '/images/web-app-manifest-192x192.png',
    '/images/web-app-manifest-512x512.png'
];

// Instalacja SW i buforowanie plików
self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(cacheName).then((cache) => {
            return cache.addAll(filesToCache);
        })
    );
});

// Serwowanie plików z cache (tryb offline)
self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((response) => {
            return response || fetch(e.request);
        })
    );
});