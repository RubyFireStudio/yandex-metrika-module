const { resolve } = require('path')

const logger = require('consola').withScope('nuxt:yandex-metrika')

module.exports = function module (moduleOptions) {
  const options = this.options['yandex-metrika'] || moduleOptions

  if (options.disabled) {
    logger.info('Disabled because the disabled option is set')
    return
  }

  // Don't proceed if no id are provided
  if (!options.id) {
    logger.info('Disabled because no id was found')
    return
  }

  this.addPlugin({
    src: resolve(__dirname, './templates/plugin.js'),
    fileName: 'yandex-metrika.js',
    options,
    ssr: false
  })
}
