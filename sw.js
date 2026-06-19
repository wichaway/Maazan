// Service worker - pass through all requests, no caching
self.addEventListener('fetch', e => {
  e.respondWith(fetch(e.request));
});
