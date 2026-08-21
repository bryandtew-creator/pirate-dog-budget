const CACHE='pirate-dog-budget-v4.3-real-hd-dashboard';
const ASSETS=[
  "./index.html?v=430",
  "./manifest.webmanifest?v=430",
  "./icon-180.png?v=430",
  "./icon-192.png?v=430",
  "./icon-512.png?v=430",
  "./intro-cover-hd-v42.jpg?v=430",
  "./intro-open-hd-v42.jpg?v=430",
  "./loading-cover-hd-v42.jpg?v=430",
  "./loading-open-hd-v42.jpg?v=430",
  "./dashboard-hero-cover-hd-v43.jpg?v=430",
  "./dashboard-hero-open-hd-v43.jpg?v=430",
  "./dashboard-wood-hd-v43.jpg?v=430",
  "./treasure-chest-v31.jpg?v=430",
  "./ocean-waves-v15.png?v=430",
  "./cat-amazon-tile-v32.png?v=430",
  "./cat-amazon-icon-v32.png?v=430",
  "./cat-edit-tile-v32.png?v=430",
  "./cat-edit-icon-v32.png?v=430",
  "./cat-entertainment-tile-v32.png?v=430",
  "./cat-entertainment-icon-v32.png?v=430",
  "./cat-gas-tile-v32.png?v=430",
  "./cat-gas-icon-v32.png?v=430",
  "./cat-groceries-tile-v32.png?v=430",
  "./cat-groceries-icon-v32.png?v=430",
  "./cat-home-tile-v32.png?v=430",
  "./cat-home-icon-v32.png?v=430",
  "./cat-other-tile-v32.png?v=430",
  "./cat-other-icon-v32.png?v=430",
  "./cat-restaurants-tile-v32.png?v=430",
  "./cat-restaurants-icon-v32.png?v=430",
  "./cat-shopping-tile-v32.png?v=430",
  "./cat-shopping-icon-v32.png?v=430"
];

self.addEventListener("install",e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)));
  self.skipWaiting();
});
self.addEventListener("activate",e=>{
  e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener("fetch",e=>{
  if(e.request.method!=="GET")return;
  e.respondWith(
    fetch(e.request).then(r=>{
      if(r&&r.ok){
        const copy=r.clone();
        caches.open(CACHE).then(c=>c.put(e.request,copy)).catch(()=>{});
      }
      return r;
    }).catch(()=>caches.match(e.request).then(r=>r||caches.match("./index.html?v=430")))
  );
});
