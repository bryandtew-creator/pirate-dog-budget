const CACHE='pirate-dog-budget-v4.5.1';
const ASSETS=[
  "./cat-amazon-icon-v32.png?v=451",
  "./cat-amazon-tile-v32.png?v=451",
  "./cat-edit-icon-v32.png?v=451",
  "./cat-edit-tile-v32.png?v=451",
  "./cat-entertainment-icon-v32.png?v=451",
  "./cat-entertainment-tile-v32.png?v=451",
  "./cat-gas-icon-v32.png?v=451",
  "./cat-gas-tile-v32.png?v=451",
  "./cat-groceries-icon-v32.png?v=451",
  "./cat-groceries-tile-v32.png?v=451",
  "./cat-home-icon-v32.png?v=451",
  "./cat-home-tile-v32.png?v=451",
  "./cat-other-icon-v32.png?v=451",
  "./cat-other-tile-v32.png?v=451",
  "./cat-restaurants-icon-v32.png?v=451",
  "./cat-restaurants-tile-v32.png?v=451",
  "./cat-shopping-icon-v32.png?v=451",
  "./cat-shopping-tile-v32.png?v=451",
  "./dashboard-hero-cover-v451.jpg?v=451",
  "./dashboard-hero-open-v45.jpg?v=451",
  "./icon-180.png?v=451",
  "./icon-192.png?v=451",
  "./icon-512.png?v=451",
  "./index.html?v=451",
  "./intro-cover-hd-v42.jpg?v=451",
  "./loading-cover-hd-v42.jpg?v=451",
  "./manifest.webmanifest?v=451",
  "./ocean-waves-v15.png?v=451",
  "./treasure-chest-v31.jpg?v=451"
];

self.addEventListener("install",e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)));self.skipWaiting()});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==CACHE).map(x=>caches.delete(x)))));self.clients.claim()});
self.addEventListener("fetch",e=>{if(e.request.method!=="GET")return;e.respondWith(fetch(e.request).then(r=>{if(r&&r.ok){const q=r.clone();caches.open(CACHE).then(c=>c.put(e.request,q)).catch(()=>{})}return r}).catch(()=>caches.match(e.request).then(r=>r||caches.match("./index.html?v=451"))))});
