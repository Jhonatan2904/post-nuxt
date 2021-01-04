const bgSyncPlugin = new workbox.backgroundSync.BackgroundSyncPlugin('formQueue', {
    maxRetentionTime: 24 * 60 // Retry for max of 24 Hours (specified in minutes)
});

workbox.routing.registerRoute(
    new RegExp("https://nuxt-js-b3202\\.firebaseio\\.com.*/posts/.*\\.json"),
    new workbox.strategies.NetworkOnly({
      plugins: [bgSyncPlugin]
    }),
    'GET'
);
  
//https://nuxt-js-b3202.firebaseio.com/posts
//https://cdn\\.third-party-site\\.com.*/styles/.*\\.css