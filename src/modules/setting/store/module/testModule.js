export default {
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
