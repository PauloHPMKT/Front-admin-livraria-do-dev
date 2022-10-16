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
          </card>  
          <div class="table-content card">
            <div class="container-box card"> 
              <ul>
                <li v-for="book in books" :key="book._id">{{ book.title }}</li>
              </ul>
            </div>
          </div> 
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ServiceBooks from '../services/axios-books.request'
import ActionsBar from '../components/ActionsBar.vue'
import Card from "../components/Cards/Card.vue"

export default {
  name: 'BooksReports',
  components: { Card, ActionsBar }, 
  data() {
    return {
      books: [],
      action_message: 'Adicionar novo livro'
    }
  },

  methods: {
    async listAllBooks() {
      await ServiceBooks.listBooks().then(res => {
        this.books = res.data
      })
    }
  },

  mounted() {
    this.listAllBooks()
  }
}
</script>

<style lang="scss" scoped>
.container-box {
  padding: 20px 0;

  ul {
    padding: 0 20px;
  }
}
</style>