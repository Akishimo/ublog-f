import Vue from 'vue'
import VueRouter from 'vue-router'
import VueAxios from 'vue-axios'
import axios from 'axios'
import App from './App'
import routerConfig from './routers'
import store from './store'
import './rules'

Vue.use(VueRouter)
Vue.use(VueAxios, axios)
// runRules()

const router = new VueRouter({
  // hashbang: true,
  // history: false,
  // saveScrollPosition: true,
  routes: routerConfig
})

// new Vue({
//   el: '#app',
//   template: '<App/>',
//   components: { App }
// })
// router.start(App, '#app')

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
