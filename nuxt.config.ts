export default defineNuxtConfig({
  modules: ['@nuxthub/core', '@nuxt/eslint', '@nuxt/ui', '@nuxtjs/tailwindcss'],

  routeRules: {
    '/api/getClients': {
        proxy: { to: "https://paradigmapi.pythonanywhere.com/api/clients?limit=500&offset=0", },
    },
    '/api/getTrades/**': {
        proxy: { to: "https://paradigmapi.pythonanywhere.com/api/**", },
    },
    '/api/getClient/**': {
        proxy: { to: "https://paradigmapi.pythonanywhere.com/api/clients/**", },
    },
    '/api/getTrade/**': {
        proxy: { to: "https://paradigmapi.pythonanywhere.com/api/trade/**", },
    },
  
  },

  devtools: { enabled: true },

  runtimeConfig: {
    public: {
    },
  },
  future: { compatibilityVersion: 4 },
  compatibilityDate: '2024-07-30',

  hub: {
    database: true
  },

  eslint: {
    config: {
      stylistic: {
        quotes: 'single',
      },
    },
  },
})