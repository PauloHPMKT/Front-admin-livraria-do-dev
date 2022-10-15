<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <card 
            class="strpied-table-with-hover"
            body-classes="table-full-width table-responsive"
          >
            <template slot="header">
              <h4 class="card-title">Relatório de Livros</h4>
              <p class="card-category">Relatório de livros disponíveis na plataforma</p>
            </template>
            <template>
              <actions-bar 
                :data_action="action_message"
              />
            </template> 
            <div class="table-content">
            </div> 
          </card>  
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ActionsBar from '../components/ActionsBar.vue'
import Card from "../components/Cards/Card.vue"

export default {
  name: 'BooksReports',
  components: { Card, ActionsBar }, 
  data() {
    return {
      action_message: 'Adicionar novo livro'
    }
  }
}
</script>

<style lang="scss" scoped></style>