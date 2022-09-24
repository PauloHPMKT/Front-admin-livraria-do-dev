<template>
  <div class="main-container">
    <main>
      <div class="box-content inner-info">
        <img src="/img/logo-livraria-do-dev-removebg.png" alt="logo principal livraria do dev">
        <div>
          <h1>Portal do administrador</h1>
          <p>Acesse seu ambiente de gestão da livraria do dev</p>
        </div>
      </div>
      <div class="box-content">
        <div class="form-container">
          <form @submit.prevent="handleSubmitLogin">
            <label for="email">E-mail</label>
            <base-input 
              class="border-style"
              id="email"
              type="text"
              placeholder="meuemail@example.com"
              v-model="user.email"
              :addonLeftIcon="'nc-icon nc-email-83'"
            />

            <label for="password">Senha</label>
            <base-input 
              class="border-style"
              id="password"
              type="password"
              placeholder="digite sua senha"
              v-model="user.password"
              :addonLeftIcon="'nc-icon nc-lock-circle-open'"
            />
            <button type="submit" class="btn btn-primary">Login</button>
          </form>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import BaseInput from '../components/Inputs/BaseInput.vue'
export default {
  name: 'Login',
  components: { BaseInput },
  data() {
    return {
      user: {
        email: '',
        password: '',
      }
    }
  },

  methods: {
    async handleSubmitLogin() {
      await this.$store.dispatch('handleSubmitLogin', this.user)
    }
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
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100vh;

      .form-container {
        background-color: #ffe7d1;
        padding: 50px;
        border-radius: 20px;

        .border-style {
          border-radius: 5px;
          border: 1px solid $dark-gray;
        }

        button {
          background-color: $primary-color;
          color: $white-color;
          width: 200px;
          margin-top: 20px;
        }
      }
    }

    & img {
      width: 400px;
      filter: drop-shadow(0 0 1px $white-color);
    }

    & .inner-info {
      color: $white-color;
    }
  }
}
</style>