const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias.set('vue$', 'vue/dist/vue.esm.js')
  },
  configureWebpack: {
    plugins: [new VuetifyLoaderPlugin()],
    output: {
      libraryExport: 'default',
    },
  },
  outputDir: 'build/dist',
}
