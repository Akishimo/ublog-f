import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import VueRouter from 'vue-router'
import routerConfig from './routers'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(VueAxios, axios)

const store = new Vuex.Store({
  state: {
    count: 1
  }
})

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
