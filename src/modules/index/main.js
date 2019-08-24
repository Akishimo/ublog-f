import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router'
import routerConfig from './routers'

Vue.use(VueRouter)

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

const app = new Vue({
  router,
  render: h => h(App)
}).$mount('#app')