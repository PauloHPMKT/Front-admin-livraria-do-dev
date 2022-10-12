import Vue from 'vue'
import vuex from 'vuex'
import Service from '../services/axios-requests'

Vue.use(vuex)

export default new vuex.Store({
  state: {
    user: {
      email: '',
      password: '',
    },
    token: '',
  },
  mutations: {
    authLogin(state, payload) {
      state.user = payload
    },
  },
  actions: {
    /* eslint-disable prettier/prettier */
    async handleSubmitLogin( { commit }, user ) {
      await Service.login({
        email: user.email,
        password: user.password

      }).then(res => {        
        if (res.status === 200) {
          if (res.data.token) {
            localStorage.setItem('token', res.data.token)
            localStorage.setItem('email', res.data.userAuth.email)
            localStorage.setItem('name', res.data.userAuth.name)
          }
        }

        commit('authLogin', res.data.userAuth)
        window.location.replace('/#/admin/overview')
      })
    }
  },
  modules:{}
})