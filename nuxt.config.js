module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'TinkSettings.Com - Settings for the RetroTink 5X',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Settings depository for the RetroTink 5x' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  buildModules: [
    '@nuxtjs/google-fonts'
  ],
  googleFonts: {
    families: {
      OpenSans: true
    }
  },
  /*
  ** Build configuration
  */
 components: true,
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
