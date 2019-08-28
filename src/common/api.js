import Vue from 'vue'
import env from './env'

class API_WRAPPER {
  constructor (envType) {
    const prefix = env[envType].apiDomain
    Vue.axios.defaults.baseURL = prefix
  }

  call (currentParams) {
    return Vue.axios(currentParams)
  }
}

export default new API_WRAPPER(process.env.NODE_ENV)
