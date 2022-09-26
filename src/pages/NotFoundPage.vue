<template>
  <div class="error-page">
    <div>
      <img src="/img/robot-error-removebg.png" alt="robo error">
    </div>
    <div class="align-text">
      <h2>Página não encontrada</h2>
      <p>Desculpe, nós não conseguimos a página que voce está procurando. <span>Sugerimos que retorne para a sessão de login.</span></p>

      <router-link to="/login">Vá para o login</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFoundPage'
}

</script>
<style scoped>
.error-page {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
}
.error-page img {
  filter: drop-shadow(-2px 2px 3px #00445a91)
}

.error-page .align-text {
  text-align: center;
}

.error-page span {
  display: block;
}

a {
  padding: 10px;
}
</style>