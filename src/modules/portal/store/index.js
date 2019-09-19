import Vue from 'vue'
import Vuex from 'vuex'
import portal from './module/portal'
import CONSTANT from './constant'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    userInfo: JSON.parse(localStorage.getItem('userInfo'))
  },
  mutations: {
    [CONSTANT.SET_USER_INFO]: (state, payload) => {
      state = Object.assign({}, state.userInfo, payload)
      localStorage.setItem('userInfo', JSON.stringify(payload))
    }
  },
  getters: {
  },
  actions: {
  },
  modules: {
    portal
  }
})

export default store
