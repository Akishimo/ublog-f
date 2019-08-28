const isDev = process.env.NODE_ENV === 'development'

module.exports = {
  BUILD: {
    DEFAULT_ENTRIES: 'babel-polyfill', // 默认入口
    ASSETS: ['main.js'], // 模块加载入口
    PORTAL_BASE_PATH: './src/modules', // 模块所在路径
    BUILD_ASSERT_PATH: 'assets', // 资源打包文件夹
    FILE_PUBLIC_PATH: isDev ? './img' : `./${this.BUILD_ASSERT_PATH}/img`, // 图片等非代码资源打包文件夹
    CSS_HMR: isDev, // 是否热更新 CSS 或 LESS
    DEV_PORT: 8080,
    DEVTOOL: isDev ? 'cheap-module-eval-source-map' : false,
    GET_HTML_PATH: (key) => {
      return isDev ? `${key}.html` : `../${key}.html`
    },
    COPY_PLUGIN_IGN: isDev ? [] : ['dev/**/*']
  },
  MOCKER: {
    MOCK_PORT: 4040
  }
}
