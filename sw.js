var V='cs-v1',F=['./','index.html','palabras.js','manifest.webmanifest','icon-180.png','icon-512.png'];
self.addEventListener('install',function(e){e.waitUntil(caches.open(V).then(function(c){return c.addAll(F)}));self.skipWaiting()});
self.addEventListener('activate',function(e){e.waitUntil(caches.keys().then(function(k){return Promise.all(k.filter(function(n){return n!==V}).map(function(n){return caches.delete(n)}))}))});
self.addEventListener('fetch',function(e){e.respondWith(caches.match(e.request).then(function(r){return r||fetch(e.request)}))});
