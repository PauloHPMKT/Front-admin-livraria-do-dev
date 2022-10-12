<template>
  <div class="box">
    <div>{{ message_data }}</div>
    <div id="border"></div>
  </div>
</template>

<script>
export default {
  name: 'InformationPopup',
  props: {
    message_data: String,
  }
}
</script>

<style lang="scss" scoped>
.box {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 40px;
  position: fixed;
  bottom: 30px;
  right: 30px;
  height: 100px;
  background: rgb(253, 83, 83);
  color: #fff;
  border-radius: 3px;
  animation: emerge .4s ease-in-out;
}

@keyframes emerge {
  0% {
    opacity: 0;
    visibility: hidden;
  }
  100% {
    opacity: 1;
    visibility: visible;
  }
}

#border {
  width: 100%;
  background-color: red;
  border: 4px solid red;
  position: absolute;
  bottom: 0;
  animation: slide 5s ease;
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