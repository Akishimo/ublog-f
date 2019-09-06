const routers = [
  {
    path: '/home',
    name: 'home',
    component (resolve) {
      require(['./pages/home/home'], resolve)
    }
  }
]

export default routers
