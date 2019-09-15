import Vue from 'vue'
import env from './env'

class API_WRAPPER {
  constructor (envType) {
    this.prefix = env[envType].apiDomain
    this.setPrefix = (delay = false) => {
      if ('axios' in Vue && Vue.axios.defaults.baseURL !== this.prefix) {
        if (delay) {
          setTimeout(() => {
            Vue.axios.defaults.baseURL = this.prefix
          })
        } else {
          Vue.axios.defaults.baseURL = this.prefix
        }
      }
    }
    this.setPrefix(true)
  }

  call (currentParams) {
    this.setPrefix()
    return Vue.axios(currentParams)
  }
}

export default new API_WRAPPER(process.env.NODE_ENV)
