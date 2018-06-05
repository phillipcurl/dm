module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'dark_matter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', meta: 'description', content: 'Nuxt.js project' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }]
  },
  /*
  ** Global CSS
  */
  css: ['~assets/css/main.css'],
  /*
  ** Add axios globally
  */
  build: {
    vendor: ['axios']
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Customize app manifest
  */
  manifest: {
    theme_color: '#3B8070',
    name: 'Dark Matter',
    short_name: 'Dark Matter',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    description: 'A simply readable Hacker News app.'
  },
  /*
  ** Modules
  */
  modules: ['@nuxtjs/pwa']
};
