// Define a cache name
const CACHE_NAME = 'pwa-cache-v1';

// Files to cache
const FILES_TO_CACHE = [
    '/',
    '/index.html',
    '/manifest.json',
    '/icon.png',
    'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap',
    'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js',
    'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js'
];

// Install event - caching files
self.addEventListener('install', event => {
    console.log('[Service Worker] Install');
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            console.log('[Service Worker] Caching app shell');
            return cache.addAll(FILES_TO_CACHE);
        })
    );
});

// Activate event - cleaning up old caches
self.addEventListener('activate', event => {
    console.log('[Service Worker] Activate');
    event.waitUntil(
        caches.keys().then(keyList => {
            return Promise.all(keyList.map(key => {
                if (key !== CACHE_NAME) {
                    console.log('[Service Worker] Removing old cache', key);
                    return caches.delete(key);
                }
            }));
        })
    );
    return self.clients.claim();
});

// Fetch event - serving cached content when offline and updating cache when online
self.addEventListener('fetch', event => {
    console.log('[Service Worker] Fetch', event.request.url);
    
    if (FILES_TO_CACHE.includes(new URL(event.request.url).pathname)) {
        // Cache-first strategy for files in FILES_TO_CACHE
        event.respondWith(
            caches.match(event.request).then(response => {
                return response || fetch(event.request).then(fetchResponse => {
                    return caches.open(CACHE_NAME).then(cache => {
                        cache.put(event.request, fetchResponse.clone());
                        return fetchResponse;
                    });
                });
            })
        );
    } else {
        // Network-first strategy for all other requests
        event.respondWith(
            fetch(event.request).then(fetchResponse => {
                return caches.open(CACHE_NAME).then(cache => {
                    cache.put(event.request, fetchResponse.clone());
                    return fetchResponse;
                });
            }).catch(() => {
                return caches.match(event.request);
            })
        );
    }
});
