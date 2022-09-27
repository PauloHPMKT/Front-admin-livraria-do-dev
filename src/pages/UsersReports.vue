<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <card 
            class="strpied-tabled-with-hover"
            body-classes="table-full-width table-responsive"
          >
            <template slot="header">
              <h4 class="card-title">Relatório de usuários</h4>
              <p class="card-category">Usuários disponíveis na plataforma</p>
            </template>
            <table class="table">
              <thead>
                <tr>
                  <th 
                    v-for="(column, index) in columns" 
                    :key="index">{{ column }}
                  </th>
                </tr>
              </thead>
              <tbody v-for="user in users" :key="user._id">
                <tr>
                  <td>{{ user.name }}</td>
                  <td>{{ user.email }}</td>
                </tr>
              </tbody>
            </table>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import LTable from 'src/components/Table.vue'
import Card from 'src/components/Cards/Card.vue'
import Service from '../services/axios-requests'
const tableColumns = ['Nome', 'E-mail']

export default {
  components: {
    LTable,
    Card
  },
  data () {
    return {
      columns: [...tableColumns],
      users: [],
    }
  },
  methods: {
    listUsers() {
      Service.listar().then(res => {
        const dataParse = JSON.parse(JSON.stringify(res.data))
        this.users = dataParse
      })
    }
  },

  mounted() {
    this.listUsers()
  }
}
</script>
<style>
</style>
