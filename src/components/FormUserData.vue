<template>
  <div class="content card form-content">
    <div>
      <font-awesome-icon icon="fa-solid fa-user-plus" />
    </div>
    Form para novo usuario
  </div>
</template>
<script>
export default {
  name: 'FormUserData'
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
</style>