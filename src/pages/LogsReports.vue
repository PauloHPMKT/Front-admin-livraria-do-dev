<template>
  <div class="card content">
    <card class="bg-color">
      <template slot="header">
        <h4>Gerenciamento de logs</h4>
        <p>Relatório de logs dos usuários logado na plataforma</p>
      </template>
      <ul class="report-content">
        <li v-for="session in sessions" :key="session._id">{{ session.userKey }}</li>
      </ul>
    </card>
      
  </div>
</template>

<script>
import Card from '../components/Cards/Card.vue'
import Service from '../services/axios-session.request'

export default {
  components: { Card },
  name: 'LogsReports',
  data() {
    return {
      sessions: [],
    }
  },

  methods: {
    listAllUserSessions() {
      Service.listSessions().then(res => {
        const parseSession = JSON.parse(JSON.stringify(res.data))

        return this.sessions = parseSession
      })
    },
  },

  mounted() {
    this.listAllUserSessions()
  }
}
</script>

<style lang="scss" scoped>
.bg-color h4 {
  margin: 0 0 10px;
  font-weight: 500;
}

.report-content {
  padding: 10px 0;
}

.report-content li {
  padding: 25px;
  border-radius: 5px;
  box-shadow: -2px 2px 5px rgba(0, 0, 0, 0.062);
  margin: 4px;
}
</style>