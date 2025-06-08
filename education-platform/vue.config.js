// vue.config.js
const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: './',  // 修改为相对路径
  outputDir: 'dist',
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true, // 关键配置，必须保留
        },
      },
    },
  },
});