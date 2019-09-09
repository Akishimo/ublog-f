const routers = [
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
  }
]

export default routers
