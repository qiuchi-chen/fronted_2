// vue.config.js
const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/education-platform/'  // 替换为你的仓库名
    : '/',
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