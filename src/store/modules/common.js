import * as types from '../types.js'

const state = {
  ceshi: 'ddddddddddd'
}

const actions = {
  setCeshi ({ commit }, boo) {
    commit(types.SET_CESHI, boo)
  }
}

const mutations = {
  'SET_CESHI' (state, boo) {
    state.ceshi = boo
  }
}

export default {
  state,
  mutations,
  actions
}
