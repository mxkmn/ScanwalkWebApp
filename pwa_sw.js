self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('scanwalk-store').then((cache) => cache.addAll([
      'resources/website_icon.png',
      'style.css',

      'communications.js',
      'theme.js',
      'user.js',

      'get_id.html',
      'get_id.js',

      'index.html',
      'index.js'
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});