console.log("Custom Service worker!")

const cacheName = 'cache-v1'

const cacheFiles = [
    '/'
]

self.addEventListener('install', (e) => {
    console.log('[ServiceWorker]: Installed...')

    const addCache = caches.open(cacheName).then(cache => {
        console.log('[ServiceWorker] Files add to cache...');
        cache.addAll(cacheFiles)
    }).catch(error => {
        console.log('No se pudo crear la cache: ',error);
    })
    e.waitUntil(addCache)
})

self.addEventListener('activate', (e) => {
    console.log("[ServiceWorker]: Actived...")
})

self.addEventListener('fetch', (e) => {
    console.log("[ServiceWorker]: Fetching...");
    console.log(e.request.url);
})