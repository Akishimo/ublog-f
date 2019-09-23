import VueRouter from 'vue-router'

const routerConfig = [
  {
    path: '/',
    name: 'login',
    component (resolve) {
      require(['./pages/login/login'], resolve)
    }
  },
  {
    path: '/register',
    name: 'register',
    component (resolve) {
      require(['./pages/register/register'], resolve)
    }
  },
  {
    path: '/index',
    name: 'index',
    component (resolve) {
      require(['./pages/index/index'], resolve)
    }
  }
]

const router = new VueRouter({
  routes: routerConfig
})

export default router
