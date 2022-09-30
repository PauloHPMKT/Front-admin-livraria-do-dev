<template>
  <div class="content card form-content">
    <div class="icon-container">
      <font-awesome-icon icon="fa-solid fa-user-plus" />
    </div>
    <form>
      <label for="name">Nome</label>
      <base-input 
        id="name"
        text="text"
        placeholder="Nome do usuário"
        v-model="user.name"
      />
      <label for="email">E-mail</label>
      <base-input 
        id="email"
        text="text"
        placeholder="E-mail do usuário"
        v-model="user.email"
      />
      <label for="password">Senha</label>
      <base-input 
        id="password"
        text="password"
        placeholder="Digite uma senha valida"
        v-model="user.password"
      />
      <div class="btn-container">
        <button class="btn btn-primary btn-style" type="submit">Cadastrar usuário</button>
      </div>
    </form>
  </div>
</template>
<script>
import BaseInput from './Inputs/BaseInput.vue'
export default {
  components: { BaseInput },
  name: 'FormUserData',
  data() {
    return {
      user: {
        name: '',
        email: '',
        password: '',
      }
    }
  }

}
</script>

<style scoped>
.form-content {
  width: 400px;
  text-align: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: -2px 2px 5px rgba(0, 0, 0, 0.342);
  padding: 30px;
  animation: blow .5s ease-in-out;
}

.icon-container {
  width: 100%;
  margin-bottom: 30px;
}

.icon-container svg {
  font-size: 50px;
  color: #009acc;
}

.btn-container {
  display: flex;
  justify-content: center;
}

.btn-style {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7px 12px;
  border-radius: 5px;
  margin-right: 5px;
  background-color: #0044aa;
  color: #fff;
  margin: 0;
}
</style>