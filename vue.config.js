const path = require('path');
module.exports = {
  // 基本路径
  baseUrl: process.env.NODE_ENV === 'production'
    ? '//your_production_url'
    : '/',
  // 输出文件目录
  outputDir: 'dist',
  assetsDir: 'static',//静态资源目录
  // eslint-loader 是否在保存的时候检查
  lintOnSave: false,
  // webpack配置
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  chainWebpack: () => {},
  configureWebpack: (config) => {
      if (process.env.NODE_ENV === 'production') {
          // 为生产环境修改配置...
          config.mode = 'production';
      } else {
          // 为开发环境修改配置...
          config.mode = 'development';
      }
      Object.assign(config, {
          // 开发生产共同配置
          resolve: {
              alias: {'@': path.resolve(__dirname, './src'),
              '@c': path.resolve(__dirname, './src/components')
          }
      }
  });
},
// 生产环境是否生成 sourceMap 文件
productionSourceMap: false,
// css相关配置
css: {
  // 是否使用css分离插件 ExtractTextPlugin
  extract: true,
  // 开启 CSS source maps?
  sourceMap: false,
  // css预设器配置项
  loaderOptions: {},
  // 启用 CSS modules for all css / pre-processor files.
  modules: false
},
// 构建时开启多进程处理 babel 编译
parallel: require('os').cpus().length > 1,
// PWA 插件相关配置
// see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
pwa: {},
// webpack-dev-server 相关配置
devServer: {
  open: true, //配置自动启动浏览器
  port: 8080,
  https: false,
  hotOnly: false,
  // proxy: {
  //  // 设置代理
  //  // proxy all requests starting with /api to jsonplaceholder
  //  'http://localhost:8080/': {
  //      target: 'http://baidu.com:8080', //真实请求的目标地址
  //      changeOrigin: true,
  //      pathRewrite: {
  //          '^http://localhost:8080/': ''
  //      }
  //  }
  // },
  before: (app) => {}
},
// 第三方插件配置
pluginOptions: {
  // ...
}
};