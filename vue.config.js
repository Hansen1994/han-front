// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
//   .BundleAnalyzerPlugin
// const isPro = process.env.NODE_ENV === 'production'
module.exports = {
  lintOnSave: false,
  devServer: {
    proxy: 'http://localhost:3000'
  }
  // 包的分析
  // configureWebpack: (config) => {
  //   if (isPro) {
  //     return {
  //       plugins: [
  //         // 使用包分析工具
  //         new BundleAnalyzerPlugin()
  //       ]
  //     }
  //   }
  // }
}
