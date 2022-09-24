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
      }).then(res => {
        
        if (res.status === 200) {
          localStorage.setItem('token', res.data.token)
          localStorage.setItem('session_id', res.data.userAuth._id)
        }
      })

      commit('authLogin', user)

      window.location.replace('/#/admin/overview')
    }

  },
  modules:{}
})