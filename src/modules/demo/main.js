import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routerConfig from './routers'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store'

Vue.use(VueRouter)
Vue.use(VueAxios, axios)

const router = new VueRouter({
  routes: routerConfig
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
