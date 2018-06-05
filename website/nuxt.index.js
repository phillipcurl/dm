// Require Nuxt And Builder modules
const { Nuxt, Builder } = require('nuxt');

// Require nuxt config
const config = require('./nuxt.config.js');
config.dev = process.env.NODE_ENV !== 'production';

console.log('env: ', process.env.NODE_ENV);
console.log('is dev: ', config.dev);
// Create a new nuxt instance
const nuxt = new Nuxt(config);

// Enable live build & reloading on dev
if (config.dev) {
  new Builder(nuxt).build();
}

module.exports = nuxt;
