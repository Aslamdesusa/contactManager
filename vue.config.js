const path = require('path');

module.exports = {
  outputDir: path.resolve(__dirname, '/template'),
  devServer: {
    proxy: {
      '/': {
        target: 'https://contact-manager-node.herokuapp.com',
        changeOrigin: true,
        secure:false,
      }
    },
  },
  configureWebpack:{
    performance: {
      hints: false
    },
    optimization: {
      splitChunks: {
        minSize: 10000,
        maxSize: 250000,
      }
    }
  },
  "transpileDependencies": [
    "vuetify"
  ]
}