const { resolve } = require('path')
const chalk = require('chalk')

module.exports = function (moduleOptions) {
  const { nuxt } = this

  const options = {
    ...this.options.jsonApi,
    ...moduleOptions
  }

  // Default host
  let defaultHost =
    process.env.HOST ||
    (nuxt.options.server && nuxt.options.server.host) ||
    'localhost'

  if (defaultHost === '0.0.0.0') {
    defaultHost = 'localhost'
  }

  // Default port
  const defaultPort =
    process.env.PORT ||
    (nuxt.options.server && nuxt.options.server.port) ||
    3000

  // ENV overrides
  if (process.env.JSON_API_ENDPOINT) {
    moduleOptions.baseUrl = process.env.JSON_API_ENDPOINT
  }

  // If no endpoint is defined, use the default server url + /jsonapi.
  if (!moduleOptions.baseUrl) {
    moduleOptions.baseUrl = `http://${defaultHost}:${defaultPort}/jsonapi`
  }

  // Print the JSON:API endpoint url in the CLI.
  nuxt.hook('listen', function () {
    if (moduleOptions.baseUrl) {
      nuxt.options.cli.badgeMessages.push(
        `${chalk.bold('JSON:API Endpoint:')} ${chalk.underline.yellow(
          moduleOptions.baseUrl
        )}`
      )
    }
  })

  this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    fileName: 'nuxt-jsonapi.js',
    options
  })
}

module.exports.meta = require('../package.json')
