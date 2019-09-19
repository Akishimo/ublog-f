import VueRouter from 'vue-router'

const routerConfig = [
  {
    path: '/home',
    name: 'home',
    component (resolve) {
      require(['./pages/home/home'], resolve)
    }
  },
  {
    path: '/storedemo',
    name: 'storedemo',
    component (resolve) {
      require(['./pages/store/store'], resolve)
    }
  }
]

const router = new VueRouter({
  routes: routerConfig
})

export default router
