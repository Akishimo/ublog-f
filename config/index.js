const path = require('path')
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
    COPY_PLUGIN_IGN: isDev ? [] : ['*.ico', '*manifest.json'], // 不复制的静态资源路径
    SERVER_STATIC_SRC_PATH: isDev ? './src' : './assets/static', // 服务器展示的静态资源根地址
    SERVER_STATIC_ROOT_PATH: isDev ? '.' : './assets/static', // 服务器展示的图片静态资源根地址
    LOCAL_STATIC_PATH: path.resolve(__dirname, '../src/static'), // 静态文件的本地完整路径
    DIST_STATIC_PATH: path.resolve(__dirname, '../src/static/dist'), // 编译后的静态文件的本地完整路径
    STATIC_GLOABLE_JS_NAME: 'gloable.js', // 默认静态js 文件名
    STATIC_GLOABLE_CSS_NAME: 'gloable.css', // 默认静态 css 文件名
    STATIC_MANIFEST_FILENAME: 'static-manifest.json' // rev 之后的静态文件对应列表文件名
  },
  MOCKER: {
    MOCK_PORT: 4040
  },
  STATIC: {
    IMAGE_AMOUNT: 8, // 背景图片数量
    FIXED_IMAGE_INDEX: 4 // 默认的图片 index
  }
}
