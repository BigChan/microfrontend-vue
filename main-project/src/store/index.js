import Vue from 'vue'
import Vuex from 'vuex'

import { SET_GLOBALDATA } from './types'

Vue.use(Vuex)

const state = {
  globalData: {},
}
const getters = {}
const mutations = {
  [SET_GLOBALDATA](state, data) {
    state.globalData = {
      ...state.globalData,
      ...data,
    }
  },
}
const actions = {}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
})
