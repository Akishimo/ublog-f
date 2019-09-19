import Vue from 'vue'
import VueRouter from 'vue-router'
import VueAxios from 'vue-axios'
import axios from 'axios'
import App from './App'
import router from './router'
import store from './store'
import '@/common/validator.js'
import '@/common/directives'

Vue.use(VueRouter)
Vue.use(VueAxios, axios)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
