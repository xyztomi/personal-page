// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/content', '@nuxt/fonts'],
  css: ['@/assets/css/global.css'],
  fonts: {
    families: [
      { name: 'JetBrains Mono', provider: 'google', weights: ['400', '700'], preload: true },
      { name: 'Silkscreen', provider: 'google', weights: ['400', '700'], preload: true },
    ],
  },
})