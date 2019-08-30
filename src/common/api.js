import Vue from 'vue'
import env from './env'

class API_WRAPPER {
  constructor (envType) {
    const prefix = env[envType].apiDomain
    setTimeout(() => {
      Vue.axios.defaults.baseURL = prefix // api 初始化时 axios 尚未 use 完成
    })
  }

  call (currentParams) {
    return Vue.axios(currentParams)
  }
}

export default new API_WRAPPER(process.env.NODE_ENV)
