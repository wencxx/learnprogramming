// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  spaLoadingTemplate: false,
  modules: [
    '@nuxt/icon',
    '@nuxt/ui',
    '@nuxtjs/google-fonts',
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt'
  ],
  googleFonts: {
    families: {
      Inter: true,
      Montserrat: true   }
  },
  app: {
    head: {
      script: [
        {
          type: 'text/javascript',
          src: 'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.63.0/codemirror.min.js',
        },
        {
          src: 'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.63.0/mode/javascript/javascript.min.js',
        },
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.63.0/codemirror.min.css',
        },
      ],
    },
  },
})