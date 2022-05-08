import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    firstLine: 0
  },
  mutations: {
    SET_FIRSTLINE(state,data) {
      state.firstLine = data
    }
  }
})

export default store