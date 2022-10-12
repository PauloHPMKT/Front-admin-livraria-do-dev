<template>
  <div class="main-container">
    <main>
      <div class="box-content">
        <div class="form-container">
          <div class="image-container">
            <img src="/img/logo-livraria-do-dev-removebg.png" alt="logo principal livraria do dev">
          </div>
          <div class="title-content">
            <h1>Portal do administrador</h1>
            <p>Acesse seu ambiente de gestão da livraria do dev</p>
          </div>
          <form @submit.prevent="handleSubmitLogin">
            <label for="email">E-mail</label>
              <input 
                class="inputs-style"
                id="email"
                type="text"
                placeholder="meuemail@example.com"
                v-model="user.email"
              />

            <label for="password">Senha</label>
            <div class="inputs-style">            
              <input 
                id="password"
                :type="inputType"
                placeholder="digite sua senha"
                v-model="user.password"
              />
              <password-reveling 
                @teste_de_click="teste"
              />
            </div>
            <button type="submit" class="btn btn-primary">Login</button>
          </form>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import PasswordReveling from '../components/PasswordReveling.vue'
export default {
  components: { PasswordReveling },
  name: 'Login',
  data() {
    return {
      user: {
        email: '',
        password: '',
      },
      inputType: 'password',
    }
  },

  computed: {

  },

  methods: {
    handleSubmitLogin() {
      this.$store.dispatch('handleSubmitLogin', this.user)
    },

    teste() {
      alert('testando evento de click')
    }
  },

  mounted() {
    console.log(this.$store)
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/sass/lbd/variables';
@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@100;200;300;400;500;600;800;900&display=swap);

.main-container {
  font-family: 'Roboto', Arial, Helvetica, sans-serif;
  background-image: url(/img/livraria-do-dev-banner.png);
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;

  main {
    max-width: 1300px;
    margin: 0 auto;
    display: flex;

    .box-content {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100vh;

      .form-container {
        width: 50%;
        background-color: #ffe7d1;
        padding: 0 60px 60px;
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;

        .image-container {
          text-align: center;

          img {
            width: 210px;
            height: 200px;
            filter: drop-shadow(0 0 1px $white-color);
          }
        }

        .title-content {
          margin-bottom: 20px;

          h1 {
            margin: 0;
            font-size: 40px;
          }
        }

        .inputs-style {
          width: 100%;
          height: 50px;
          padding: 0 12px;
          border: none;
          margin-bottom: 10px;
          border-bottom: 1px solid #808080;
        }

        button {
          background-color: $primary-color;
          color: $white-color;
          width: 200px;
          margin-top: 20px;
        }
      }
    }

    

    & .inner-info {
      color: $white-color;
    }
  }
}
</style>