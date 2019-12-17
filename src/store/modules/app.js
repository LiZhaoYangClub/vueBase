const state = {
  token:'xxxx'
}

const mutations = {
  TAKE_TOKEN: (state,data) => {
    state.token = data
  }
}

const actions = {
  takeToken( {commit}, data ){
    commit('TAKE_TOKEN', data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}