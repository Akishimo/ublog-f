const routers = [
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

export default routers
