<template>
  <div class="content"> 
    <base-input 
      v-model="user.name"
      class="input-lg"
      placeholder="Procure por um usuário"
    />
    <button 
      class="btn-style"
      @click="teste"  
    >Pesquisa
    </button>
    <button
      class="btn-style"
    >
    Adicionar novo usuário
    <i class="nc-icon nc-simple-add"></i>
    </button>
  </div>
</template>

<script>
export default {
  name: 'ActionsBar',
  data() {
    return {
      user: {
        name: ''
      }
    }
  },

  methods: {
    teste() {
      alert(this.user.name)
      this.user = ''
    }
  }
}
</script>

<style lang="scss" scoped> 
.content {
  display: flex;
  justify-content: flex-start;
  align-items: center;

  .input-lg {
    width: 400px;
  }  

  .btn-style {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 7px 12px;
    border-radius: 5px;
    margin-right: 5px;
  
    i {
      margin-left: 10px;
      font-weight: 900;
    }
  }
}
</style>