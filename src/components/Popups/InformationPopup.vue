<template>
  <div class="box">
    <div>
      O Usuário não existe
    </div>
    <div id="border"></div>
  </div>
</template>

<script>
export default {
  name: 'InformationPopup',
}
</script>

<style lang="scss" scoped>
.box {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 300px;
  height: 100px;
  background: rgb(253, 83, 83);
  color: #fff;
  border-radius: 3px;

}

#border {
  width: 100%;
  background-color: red;
  border: 4px solid red;
  position: absolute;
  bottom: 0;
  animation: slide 4s ease;
}

@keyframes slide {
  from {
    width: 100%;
    right: 0;
  }

  to { 
    width: 0;
    right: -100%;
  }
}
</style>