import Vue from 'vue'
import Vuex from 'vuex'
import testModule from './module/testModule'

Vue.use(Vuex)

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
    testModule
  }
})

export default store
