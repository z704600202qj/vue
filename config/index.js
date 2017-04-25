// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: false,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin        默认情况下，Gzip关闭，许多流行的静态主机（如Surge或Netlify）已经为您提供了所有静态资产。 在设置为“true”之前，请确保：npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    //运行带有额外参数的build命令
    //构建完成后查看捆绑分析器报告：
    //`npm run build --report`
    //设置为“true”或“false”，始终打开或关闭它
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    env: require('./dev.env'),
    port: 8088,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {},
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    // CSS默认关闭源代码，因为相对路径是“buggy”
    //使用此选项，根据CSS-Loader README
    //（https://github.com/webpack/css-loader#sourcemaps）
    //根据我们的经验，他们通常按预期工作，
    //启用此选项时，请注意此问题。
    cssSourceMap: false
  }
}
