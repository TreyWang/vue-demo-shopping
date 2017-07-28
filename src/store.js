import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  isSuccessLogin: false,
  loginUser:{},
  token: null
}

const getters = {

}

const mutations = {
  loginSuccess(state, loginUser){
    state.loginUser.userId = loginUser.userId;
    state.loginUser.userName = loginUser.userName;
    state.isSuccessLogin = true;
  },
  logOut(state){
    state.loginUser.userId = '';
    state.loginUser.userName = '';
    state.isSuccessLogin = false;
  }
}

const actions = {

}


export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
