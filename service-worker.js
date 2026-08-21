const CACHE="pirate-dog-budget-v3.0-clean-rewrite";
const APP_SHELL=[
 "./index.html?v=300",
 "./manifest.webmanifest?v=300",
 "./icon-180.png?v=300",
 "./icon-192.png?v=300",
 "./icon-512.png?v=300",
 "./intro-cover-final.jpg?v=300",
 "./intro-open-final.jpg?v=300",
 "./loading-cover-final.jpg?v=300",
 "./loading-open-final.jpg?v=300",
 "./ocean-waves-v15.png?v=300"
];

self.addEventListener("install",event=>{
  event.waitUntil(
    caches.open(CACHE).then(cache=>cache.addAll(APP_SHELL)).catch(()=>Promise.resolve())
  );
  self.skipWaiting();
});

self.addEventListener("activate",event=>{
  event.waitUntil(
    caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))
  );
  self.clients.claim();
});

self.addEventListener("fetch",event=>{
  if(event.request.method!=="GET")return;
  event.respondWith(
    fetch(event.request).then(response=>{
      if(response && response.ok){
        const copy=response.clone();
        caches.open(CACHE).then(cache=>cache.put(event.request,copy)).catch(()=>{});
      }
      return response;
    }).catch(()=>caches.match(event.request).then(cached=>cached||caches.match("./index.html?v=300")))
  );
});
