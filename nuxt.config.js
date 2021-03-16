export default {
  // ssr: false,
  target: 'static',

  server: {
    port: 4000,
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-i18n-automation-example',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    [
      'nuxt-i18n',
      {
        parsePages: false, // https://github.com/nuxt-community/nuxt-i18n/issues/78
        locales: [
          { code: 'ko', iso: 'ko-KR', file: 'ko/index.js' },
          { code: 'en', iso: 'en-US', file: 'en/index.js' },
          { code: 'ja', iso: 'ja-JP', file: 'ja/index.js' },
        ],
        langDir: 'locales/',
        lazy: true,
        defaultLocale: 'ko',
        seo: false,
        strategy: 'prefix_and_default', // prefix_except_default, prefix, prefix_and_default
        vuex: {
          moduleName: 'i18n',
          syncLocale: true,
          syncMessages: true,
          syncRouteParams: true,
        },
      },
    ],
    '@nuxtjs/axios',
    'nuxt-google-sheets-parser',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
