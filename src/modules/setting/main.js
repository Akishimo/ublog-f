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

const INC = 'increment'
const ABC = 'abc'

const store = new Vuex.Store({
  state: {
    count: 1,
    abccount: 888
  },
  mutations: {
    [INC]: (state, payload) => {
      state.count = state.count + payload.amount
    },
    [ABC]: (state, { amount }) => {
      state.abccount = state.abccount * amount + 8
    }
  },
  getters: {
    countxqian: state => state.count * 1000,
    getabcc: state => `[${state.abccount}]`
  },
  actions: {
    inc ({ commit }, pl) {
      commit(INC, pl)
    },
    abcinc ({ commit }, { amount }) {
      setTimeout(() => {
        commit(ABC, { amount })
      }, 2000)
    },
    protest ({ commit }, pl) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit(ABC, { amount: pl.amount })
          resolve()
        }, 3999)
      })
    }
  },
  modules: {
    testModule: {
      namespaced: true,
      state: {
        tms: '123mtr'
      },
      getters: {
        gettms (state, getters, { count }) {
          return state.tms + count
        }
      }
    }
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
