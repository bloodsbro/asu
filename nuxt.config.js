export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'test',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    `~/plugins/modal.js`,
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/i18n',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  router: {
	base: '/asu/'
  },

  i18n: {
    strategy: 'no_prefix',
    lazy: false,
    differentDomains: false,
    langDir: '~/locales/',
    defaultLocale: 'ru',
    fallbackLocale: 'ru',
    locales: [
      {
        code: 'ru',
        flag: 'ru',
        name: 'Русский',
        iso: 'ru-RU',
        file: 'ru.js'
      },
      {
        code: 'us',
        flag: 'us',
        name: 'English',
        iso: 'en-US',
        file: 'us.js'
      },
      {
        code: 'cn',
        flag: 'cn',
        name: 'China',
        iso: 'cn-CN',
        file: 'cn.js'
      },
      {
        code: 'tj',
        flag: 'tj',
        name: 'Таджикский',
        iso: 'tj-TJ',
        file: 'tj.js'
      },
      {
        code: 'uz',
        flag: 'uz',
        name: 'Узбекский',
        iso: 'uz-UZ',
        file: 'uz.js'
      },
      {
        code: 'kg',
        flag: 'kg',
        name: 'Киргизский',
        iso: 'kg-KG',
        file: 'kg.js'
      }
    ]
  },
}
