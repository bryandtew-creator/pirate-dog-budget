const CACHE="pirate-dog-budget-v2.0-fold-final";
const ASSETS=[
 "./","./index.html","./manifest.webmanifest",
 "./icon-180.png","./icon-192.png","./icon-512.png",
 "./intro-cover-v20.jpg","./intro-open-v20.jpg",
 "./loading-cover-v20.jpg","./loading-open-v20.jpg",
 "./ocean-waves-v15.png","./tucker-pixel.png","./tucker-sprite-sheet.png"
];
self.addEventListener("install",e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)));self.skipWaiting()});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))));self.clients.claim()});
self.addEventListener("fetch",e=>{
 if(e.request.method!=="GET")return;
 e.respondWith(fetch(e.request).then(r=>{
   const copy=r.clone();caches.open(CACHE).then(c=>c.put(e.request,copy)).catch(()=>{});return r;
 }).catch(()=>caches.match(e.request).then(r=>r||caches.match("./index.html"))));
});
