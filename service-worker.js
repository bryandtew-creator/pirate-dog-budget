const CACHE='pirate-dog-budget-v4.1-corrected-cover';
const ASSETS=[
 "./folded-hero-v41.jpg?v=410",
  "./index.html?v=410",
  "./manifest.webmanifest?v=410",
  "./icon-180.png?v=410",
  "./icon-192.png?v=410",
  "./icon-512.png?v=410",
  "./intro-cover-final.jpg?v=410",
  "./intro-open-final.jpg?v=410",
  "./loading-cover-art-v32.jpg?v=410",
  "./loading-open-art-v32.jpg?v=410",
  "./ocean-waves-v15.png?v=410",
  "./treasure-chest-v31.jpg?v=410",
  "./cat-amazon-tile-v32.png?v=410",
  "./cat-amazon-icon-v32.png?v=410",
  "./cat-edit-tile-v32.png?v=410",
  "./cat-edit-icon-v32.png?v=410",
  "./cat-entertainment-tile-v32.png?v=410",
  "./cat-entertainment-icon-v32.png?v=410",
  "./cat-gas-tile-v32.png?v=410",
  "./cat-gas-icon-v32.png?v=410",
  "./cat-groceries-tile-v32.png?v=410",
  "./cat-groceries-icon-v32.png?v=410",
  "./cat-home-tile-v32.png?v=410",
  "./cat-home-icon-v32.png?v=410",
  "./cat-other-tile-v32.png?v=410",
  "./cat-other-icon-v32.png?v=410",
  "./cat-restaurants-tile-v32.png?v=410",
  "./cat-restaurants-icon-v32.png?v=410",
  "./cat-shopping-tile-v32.png?v=410",
  "./cat-shopping-icon-v32.png?v=410"
];

self.addEventListener("install",event=>{
  event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS)).catch(()=>Promise.resolve()));
  self.skipWaiting();
});
self.addEventListener("activate",event=>{
  event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener("fetch",event=>{
  if(event.request.method!=="GET")return;
  event.respondWith(
    fetch(event.request).then(response=>{
      if(response&&response.ok){
        const copy=response.clone();
        caches.open(CACHE).then(cache=>cache.put(event.request,copy)).catch(()=>{});
      }
      return response;
    }).catch(()=>caches.match(event.request).then(cached=>cached||caches.match("./index.html?v=410")))
  );
});
