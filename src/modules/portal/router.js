import VueRouter from 'vue-router'
import store from './store/index'

const routerConfig = [
  {
    path: '/',
    name: 'login',
    component (resolve) {
      require(['./pages/login/login'], resolve)
    }
  },
  {
    path: '/mlogin',
    name: 'mlogin',
    component (resolve) {
      require(['./pages/mlogin/login'], resolve)
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
    meta: {
      requireAuth: true
    },
    component (resolve) {
      require(['./pages/index/index'], resolve)
    }
  }
]

const router = new VueRouter({
  routes: routerConfig
})

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    if (store.state.userInfo) {
      next()
    } else {
      location.href = `portal.html#/?redirect=` + to.fullPath
      location.reload()
    }
  } else {
    if (store.state.userInfo) {
      next({
        name: 'index'
        // params: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  }
})

export default router
