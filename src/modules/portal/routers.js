const routers = [
  {
    path: '/',
    name: 'login',
    component (resolve) {
      require(['./pages/login/login'], resolve)
    }
  }
]

export default routers
