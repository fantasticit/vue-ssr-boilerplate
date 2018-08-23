import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export function createStore() {
  return new Vuex.Store({
    state: {
      count: 0
    },
    actions: {
      incrementCount({ commit, state }) {
        commit('SET_COUNT', state.count + 1)
      },

      decrementCount({ commit, state }) {
        commit('SET_COUNT', state.count - 1)
      }
    },
    mutations: {
      SET_COUNT(state, num) {
        state.count = num
      }
    }
  })
}
