// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/image', '@nuxt/ui'],
  css: ['~/assets/css/main.css'],
  image: {
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/augalo/image/upload/'
    }
  },
  app: {
    head: {
      htmlAttrs: { lang: 'fr-FR' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#0073a8' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'geo.region', content: 'FR-31' },
        { name: 'geo.placename', content: 'Colomiers' },
        { name: 'geo.position', content: '43.6125;1.3372' },
        { name: 'ICBM', content: '43.6125, 1.3372' },
        { name: 'author', content: 'Club Hippique de Colomiers' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '48x48', href: '/favicon-48x48.png' },
        { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/android-chrome-192x192.png' },
        { rel: 'icon', type: 'image/png', sizes: '512x512', href: '/android-chrome-512x512.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'mask-icon', href: '/favicon.ico', color: '#0073a8' }
      ]
    }
  }
})
