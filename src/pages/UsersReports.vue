<template>
  <div>
    <h2>Teste de exibicao de usuarios</h2>
    <ul>
      <li v-for="user in users" :key="user._id">{{ user.name }} - {{ user.email }}</li>
    </ul>
    <!--<ul>
      <li v-for="user in users" :key="user._id">{{ user.name }}</li>
    </ul>-->
  </div>
</template>

<script>
import Service from '../services/axios-requests'
export default {
  name: 'UsersReports',
  data() {
    return {
      users: [],
    }
  },

  methods: {
    async listUsers() {
      await Service.listar().then(res => {
        this.users = res.data
      })
    }
  },
  mounted() {
    this.listUsers()
  }
}
</script>

<style lang="scss" scoped>
  
</style>