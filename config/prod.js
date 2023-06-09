module.exports = {
  env: {
    NODE_ENV: '"production"'
  },
  defineConstants: {
    API_URL:JSON.stringify("http://www.bing.com/")
  },
  mini: {
    enableSourceMap:false
  },
  h5: {
    /**
     * 如果h5端编译后体积过大，可以使用webpack-bundle-analyzer插件对打包体积进行分析。
     * 参考代码如下：
     * webpackChain (chain) {
     *   chain.plugin('analyzer')
     *     .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin, [])
     * }
     */
  }
}
