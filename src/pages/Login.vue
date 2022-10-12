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
            <div class="inputs-style">
              <input 
                id="email"
                type="text"
                placeholder="meuemail@example.com"
                v-model="user.email"
              />
            </div>

            <label for="password">Senha</label>
            <div class="inputs-style">            
              <input 
                id="password"
                :type="inputType"
                placeholder="**********"
                v-model="user.password"
              />
              <password-reveling 
                class="password_eye"
                @toggle="togglePassword"
                :isPassword="isPasswordVisible"
              />
            </div>
            <button type="submit" class="btn btn-primary">Login</button>
          </form> 
          <information-popup
            v-if="toastMessageHidden"
            :message_data="message"
           />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import PasswordReveling from '../components/PasswordReveling.vue'
import InformationPopup from '../components/Popups/InformationPopup.vue'
export default {
  components: { PasswordReveling, InformationPopup },
  name: 'Login',
  data() {
    return {
      user: {
        email: '',
        password: '',
      },
      inputType: 'password',
      message: '',
      toastMessageHidden: false,
    }
  },

  computed: {
    isPasswordVisible() {
      return this.inputType === 'password'
    }
  },

  methods: {
    togglePassword() {
      this.inputType = this.isPasswordVisible ? 'text' : 'password'
    },

    messageToast(msg) {
      this.toastMessageHidden = true
      this.message = msg
      setTimeout(() => {
        this.toastMessageHidden = false
      }, 2000)
    },

    handleSubmitLogin() {
      if (this.user.email === '' && this.user.password === '') {
        this.messageToast('Digite seus dados corretamente')
      }
      this.$store.dispatch('handleSubmitLogin', this.user)
    },
  },
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
          padding: 45px;

          img {
            width: 270px;
            filter: drop-shadow(0 0 5px $white-color);
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
          background-color: #fff;
          height: 50px;
          padding: 0 12px;
          border: none;
          margin-bottom: 10px;
          border-bottom: 1px solid #808080;
          
          #email,
          #password {
            width: 96%;
            height: 100%;
            border: none;
            outline: none;
          }
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