const CACHE='pirate-dog-budget-v4.4-no-overlap';
const ASSETS=[
  "./index.html?v=440",
  "./manifest.webmanifest?v=440",
  "./icon-180.png?v=440",
  "./icon-192.png?v=440",
  "./icon-512.png?v=440",
  "./intro-cover-hd-v42.jpg?v=440",
  "./intro-open-hd-v42.jpg?v=440",
  "./loading-cover-hd-v42.jpg?v=440",
  "./loading-open-hd-v42.jpg?v=440",
  "./dashboard-hero-cover-hd-v43.jpg?v=440",
  "./dashboard-hero-open-hd-v43.jpg?v=440",
  "./treasure-chest-v31.jpg?v=440",
  "./ocean-waves-v15.png?v=440",
  "./cat-amazon-tile-v32.png?v=440",
  "./cat-amazon-icon-v32.png?v=440",
  "./cat-edit-tile-v32.png?v=440",
  "./cat-edit-icon-v32.png?v=440",
  "./cat-entertainment-tile-v32.png?v=440",
  "./cat-entertainment-icon-v32.png?v=440",
  "./cat-gas-tile-v32.png?v=440",
  "./cat-gas-icon-v32.png?v=440",
  "./cat-groceries-tile-v32.png?v=440",
  "./cat-groceries-icon-v32.png?v=440",
  "./cat-home-tile-v32.png?v=440",
  "./cat-home-icon-v32.png?v=440",
  "./cat-other-tile-v32.png?v=440",
  "./cat-other-icon-v32.png?v=440",
  "./cat-restaurants-tile-v32.png?v=440",
  "./cat-restaurants-icon-v32.png?v=440",
  "./cat-shopping-tile-v32.png?v=440",
  "./cat-shopping-icon-v32.png?v=440"
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
    }).catch(()=>caches.match(e.request).then(r=>r||caches.match("./index.html?v=440")))
  );
});
