const { resolve } = require('path')

module.exports = function module (moduleOptions) {
  const options = this.options['yandex-metrika'] || moduleOptions

  this.addPlugin({
    src: resolve(__dirname, './templates/plugin.js'),
    fileName: 'yandex-metrika.js',
    options,
    ssr: false
  })
}
