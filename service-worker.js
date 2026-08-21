const CACHE='pirate-dog-budget-v4.2-real-hd';
const ASSETS=[
  "./index.html?v=420",
  "./manifest.webmanifest?v=420",
  "./icon-180.png?v=420",
  "./icon-192.png?v=420",
  "./icon-512.png?v=420",
  "./intro-cover-hd-v42.jpg?v=420",
  "./intro-open-hd-v42.jpg?v=420",
  "./loading-cover-hd-v42.jpg?v=420",
  "./loading-open-hd-v42.jpg?v=420",
  "./folded-hero-v41.jpg?v=420",
  "./treasure-chest-v31.jpg?v=420",
  "./ocean-waves-v15.png?v=420",
  "./cat-amazon-tile-v32.png?v=420",
  "./cat-amazon-icon-v32.png?v=420",
  "./cat-edit-tile-v32.png?v=420",
  "./cat-edit-icon-v32.png?v=420",
  "./cat-entertainment-tile-v32.png?v=420",
  "./cat-entertainment-icon-v32.png?v=420",
  "./cat-gas-tile-v32.png?v=420",
  "./cat-gas-icon-v32.png?v=420",
  "./cat-groceries-tile-v32.png?v=420",
  "./cat-groceries-icon-v32.png?v=420",
  "./cat-home-tile-v32.png?v=420",
  "./cat-home-icon-v32.png?v=420",
  "./cat-other-tile-v32.png?v=420",
  "./cat-other-icon-v32.png?v=420",
  "./cat-restaurants-tile-v32.png?v=420",
  "./cat-restaurants-icon-v32.png?v=420",
  "./cat-shopping-tile-v32.png?v=420",
  "./cat-shopping-icon-v32.png?v=420"
];

self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)));
  self.skipWaiting();
});
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key)))
    )
  );
  self.clients.claim();
});
self.addEventListener("fetch", event => {
  if(event.request.method !== "GET") return;
  event.respondWith(
    fetch(event.request).then(response => {
      if(response && response.ok){
        const copy = response.clone();
        caches.open(CACHE).then(cache => cache.put(event.request, copy)).catch(()=>{});
      }
      return response;
    }).catch(() => caches.match(event.request).then(
      cached => cached || caches.match("./index.html?v=420")
    ))
  );
});
