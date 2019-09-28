import Vue from 'vue'
import Vuex from 'vuex'
import portal from './module/portal'
import CONSTANT from './constant'
import { Base64 } from 'js-base64'

Vue.use(Vuex)

const encodeUserInfoText = Base64.encode('userInfo')

const store = new Vuex.Store({
  state: {
    userInfo: localStorage.getItem(encodeUserInfoText) ? JSON.parse(Base64.decode(localStorage.getItem(encodeUserInfoText))) : null
  },
  mutations: {
    [CONSTANT.SET_USER_INFO]: (state, payload) => {
      state = Object.assign({}, state.userInfo, payload)
      localStorage.setItem(Base64.encode('userInfo'), Base64.encode(JSON.stringify(payload)))
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
