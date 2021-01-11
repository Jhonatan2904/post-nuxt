//estrategia cacheFirst

workbox.routing.registerRoute(
  new RegExp('https://nuxt-js-b3202.firebaseio.com/blog.json'),
  new workbox.strategies.NetworkFirst({
    cacheName: 'worbox_dinamic_cdn',
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 10,
        maxAgeSeconds: 180
      })
    ]
  })
)



