const CACHE="pirate-dog-budget-v2.2-finalconcept";
const ASSETS=[
 "./","./index.html","./manifest.webmanifest",
 "./icon-180.png","./icon-192.png","./icon-512.png",
 "./intro-cover-final.jpg","./intro-open-final.jpg",
 "./loading-cover-final.jpg","./loading-open-final.jpg",
 "./ocean-waves-v15.png","./tucker-pixel.png","./tucker-sprite-sheet.png"
];

self.addEventListener("install",event=>{
 event.waitUntil(
   caches.open(CACHE)
     .then(cache=>cache.addAll(ASSETS))
     .catch(()=>Promise.resolve())
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
   fetch(event.request)
     .then(response=>{
       if(response && response.ok){
         const copy=response.clone();
         caches.open(CACHE).then(cache=>cache.put(event.request,copy)).catch(()=>{});
       }
       return response;
     })
     .catch(()=>caches.match(event.request).then(cached=>cached||caches.match("./index.html")))
 );
});
