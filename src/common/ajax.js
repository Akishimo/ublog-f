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

    Vue.axios.interceptors.response.use(res => {
      if (res.data && res.data.code === 'need_login') {
        location.href = 'portal.html'
        localStorage.removeItem('userInfo')
      }
      return res
    }, error => {
      return Promise.reject(error)
    })

    Vue.axios.interceptors.request.use(req => {
      // if (!req.url.includes('common')) {
      // TODO
      // }
      return req
    }, error => {
      return Promise.reject(error)
    })
  }

  async call (currentParams) {
    this.setPrefix()
    return Vue.axios(currentParams)
  }
}

export default new API_WRAPPER(process.env.NODE_ENV)
