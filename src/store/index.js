import Vue from 'vue'
import vuex from 'vuex'
import Service from '../services/axios-requests'

Vue.use(vuex)

export default new vuex.Store({
  state: {
    user: {
      name: '',
      email: '',
      password: '',
    },
    access_token: '',
  },
  mutations: {
    authLogin(state, payload) {
      state.access_token = payload.access_token
      state.user = payload.user
    }
  },
  actions: {
    async handleSubmitLogin( { commit }, user ) {
      await Service.login({
        email: user.email,
        password: user.password
      }).then(res => res.data)

      commit('authLogin', res.data)
    }

  },
  modules:{}
})