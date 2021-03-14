const { resolve } = require('path')

module.exports = {
  rootDir: resolve(__dirname, '..'),
  buildDir: resolve(__dirname, '.nuxt'),
  srcDir: __dirname,
  modules: [{ handler: require('../') }],
  jsonApi: {
    baseURL: 'http://localhost:9999/jsonapi',
    // @deprecated since version 0.1.0
    baseUrl: 'http://localhost:9999/jsonapi'
  }
}
