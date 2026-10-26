var V='csi-v1',F=['./','index.html','manifest.webmanifest','icon-180.png','icon-512.png','roja.jpg','azul.jpg','negra.jpg'];
self.addEventListener('install',function(e){e.waitUntil(caches.open(V).then(function(c){return Promise.all(F.map(function(f){return c.add(f).catch(function(){})}))}));self.skipWaiting()});
self.addEventListener('activate',function(e){e.waitUntil(caches.keys().then(function(k){return Promise.all(k.filter(function(n){return n.indexOf('csi-')===0&&n!==V}).map(function(n){return caches.delete(n)}))}).then(function(){return self.clients.claim()}))});
function put(r,q){var c=r.clone();caches.open(V).then(function(x){x.put(q,c)});return r}
self.addEventListener('fetch',function(e){
  var q=e.request;if(q.method!=='GET')return;
  if(q.url.indexOf('/img/')>-1){e.respondWith(caches.match(q).then(function(m){return m||fetch(q).then(function(r){return r.ok?put(r,q):r})}));return}
  e.respondWith(fetch(q).then(function(r){return r.ok?put(r,q):r}).catch(function(){return caches.match(q)}));
});
