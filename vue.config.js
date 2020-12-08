const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

function LibPublicPathPlugin() {}

LibPublicPathPlugin.prototype.apply = function(compiler) {
  compiler.hooks.beforeRun.tap('LibPublicPathPlugin', (compiler) => {
    compiler.options.output.publicPath = '/hcfl/Customization/HCFL/vue-wrapper/'
  })
}

module.exports = {
  outputDir: '../gitlab/Customization/HCFL/vue-wrapper',
  productionSourceMap: false,
  chainWebpack: (config) => {
    config.resolve.alias.set('vue$', 'vue/dist/vue.esm.js')
  },
  configureWebpack: {
    plugins: [new VuetifyLoaderPlugin(), new LibPublicPathPlugin()],
    output: {
      libraryExport: 'default',
    },
  },
}
