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
            <ul>
              <li v-for="book in books" :key="book._id">
                <card>
                  <div class="book-commands" @click="rollingBookDescription(book._id)">
                    <div class="book-description">
                      <h3>{{ book.title }}</h3>
                      <p v-if="hiddenPlot">{{ book.plot }}</p>
                    </div>
                    <div class="icon-menu">
                      <font-awesome-icon icon="fa-solid fa-bars" />
                    </div>
                  </div>
                  <div class="card-book" v-if="hiddenBookDescription">
                    <div class="book-image">
                      <img :src="book.poster" alt="imagem do livro" />
                    </div>
                    <div class="book-info-content">
                      <header class="tecnichal-data">
                        <div class="rating-book">{{ book.technical.rating }}</div>
                        <div>Leram: <span>{{ book.technical.readers }}</span></div>
                        <div>Votaram: <span>{{ book.technical.votes }}</span></div>
                      </header>
                      <article class="full_plot">
                        <p>{{ book.full_plot }}</p>
                      </article>
                      <footer class="book-technical-infos">
                        <div class="technical-infos">
                          <p>Autor: {{ book.author.name }}</p>
                          <p>Editora: {{ book.publishing }}</p>
                          <p>Genero: {{ book.genres }}</p>
                        </div>
                        <div class="technical-infos">
                          <p>Idioma: {{ book.language }}</p>
                          <p>Ano de lancamento: {{ book.year }}</p>
                          <p>Número de páginas: {{ book.pages_number }}</p>
                        </div>
                      </footer>
                    </div>
                  </div>
                </card>
              </li>
            </ul>
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
      action_message: 'Adicionar novo livro',
      hiddenBookDescription: false,
      hiddenPlot: true,
      id: 0,
    }
  },

  methods: {
    async listAllBooks() {
      await ServiceBooks.listBooks().then(res => {
        this.books = res.data
      })
    },

    rollingBookDescription(id) {
      this.hiddenBookDescription = !this.hiddenBookDescription
      this.hiddenPlot = !this.hiddenPlot

      this.id = id
    }
  },

  mounted() {
    this.listAllBooks()
  }
}
</script>

<style lang="scss" scoped>
.book-commands {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .book-description {
    cursor: pointer;
  
    h3 {
      margin: 0;
      font-size: 25px;
    }
  
    p {
      margin-bottom: 5px;
      color: #808080;
    }
  }

  .icon-menu {
    background: #808080;
    padding: 10px 15px;
    border-radius: 10px;
    margin: 6px;
    cursor: pointer;
    box-shadow: -2px 2px 5px rgba(0, 0, 0, 0.24);

    svg {
      font-size: 30px;
      color: #fff;
    }
  }
}

.card-book {
  display: flex;
  margin-top: 30px;
  animation: down .5s ease-in-out;

  @keyframes down {
    from {
      display: none;
      visibility: hidden;
      opacity: 0;
      transform: translateY(-25%);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .book-image {
    width: 20%;

    img {
      width: 100%;
    }
  }

  .book-info-content {
    margin: 0 40px;
    width: 80%;
    color: #808080;

    .tecnichal-data {
      display: flex;
      margin-bottom: 20px;

      .rating-book {
        background-color: #009acc;
        color: #fff;
        border-radius: 10px;
      }

      div {
        padding: 20px;

        span {
          font-weight: 700;
          color: #009acc;
        }
      }
    }

    .full_plot {
      margin-bottom: 40px;
    }

    .book-technical-infos {
      display: flex;

      .technical-infos {
        margin-right: 50px;

        p {
          margin: 0;
        }
      }
    }
  }
}
</style>