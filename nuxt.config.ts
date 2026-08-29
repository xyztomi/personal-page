// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  app: {
    head: {
      meta: [
        { name: 'p:domain_verify', content: 'd219a7edbfad89d9795b579b9115997b' },
      ],
    },
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/content', '@nuxt/fonts'],
  css: ['@/assets/css/global.css'],
  fonts: {
    families: [
      { name: 'JetBrains Mono', provider: 'google', weights: ['400', '700'], preload: true },
    ],
  },
})