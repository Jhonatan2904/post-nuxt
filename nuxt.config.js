const axios = require('axios')
export default {
  // mode:"universal",
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'ejercicio1_mod03',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'my website description' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '~/static/icon.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Baloo+Tammudu+2:wght@500&family=Ranchers&display=swap'}
    ],
    script: [
      { src: 'https://www.google.com/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit' },
      {src: 'https://cdn.onesignal.com/sdks/OneSignalSDK.js'}
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~assets/styles/styles.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    {src: '~/plugins/plugins.js'},
    { src: '~/plugins/date-filter.js' },
    { src: '~/plugins/conf_pwa.js' },

  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],


 

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/onesignal',
    '@nuxtjs/pwa',
  ],


  oneSignal: {
    init: {
      appId: 'd5b0bae0-e122-45fb-90fe-653d09242158',
      allowLocalhostAsSecureOrigin: true,
      welcomeNotification: {
        disabled: true
      }
    }
  },

  pwa: {
    meta: {
      description: 'Proyecto realizado en NuxtJs'
    },
    workbox: {
      // cacheAssets: false,
      routingExtensions: '@/plugins/worbox-registerRoute.js',
      workboxExtensions: '@/plugins/workbox-extensions.js',
      cachingExtensions: '@/plugins/workbox-caching.js',
      offlineStrategy: 'NetworkFirst',
      globPatterns: ['**/*.{js}'],
      // runtimeCaching: [
      //   {
      //     handler: 'StaleWhileRevalidate'
      //   }
      // ]
      // runtimeCaching: [
      //   {
      //     urlPattern: '/_nuxt/*.{js, css}',
      //     handler: 'CacheFirst',
      //     method: 'GET',
      //     strategyPlugins: []
      //   }
      // ]
    //   enabled: true,
    //   runtimeCaching: [
    //   {
    //     urlPattern: 'https://firebase.google.com/.*',
    //     handler: 'StaleWhileRevalidate',
    //     method: 'GET',
    //     strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
    //   }
    // ]
    },
    icon: {
      source: '~/static/icon.png',
      fileName: 'icon.png'
    },
    manifest: {
      name: 'Proyecto Tareas',
      short_name: 'NuxtJs',
      description: 'Proyecto realizado con Nuxt y Firebase',
      start_url: '/',
      display: 'standalone',
      background_color: 'green',
      theme_color: 'darkgreen',
      orientation: 'portrait-primary'
    },
  },

 
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },

  // Variables globales
  env: {
    baseUrl: process.env.BASE_URL || 'https://nuxt-js-b3202.firebaseio.com',
    urlAPI: 'AIzaSyDCxfGB0IAoYRyMlKcUa2ptWRf_aVKaBDw'
  },

  transition: {
    name: 'fade',
    mode: 'out-in'
  },

 routes: function(){
    return axios.get('https://nuxt-js-b3202.firebaseio.com/blog.json')
    .then(response => {
      const arrKeys = []
      for (let key in response.data){
        arrKeys.push({
          route: '/post' + key,
          payload: {
            postData: response.data[key]
          }
      })
      }
      return arrKeys
    })
 }
}
