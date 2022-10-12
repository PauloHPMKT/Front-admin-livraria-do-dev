<template>
  <span @click="$emit('toggle')">
    <font-awesome-icon :icon="['fas', 'eye']" v-if="isPassword"/>
    <font-awesome-icon :icon="['fas', 'eye-slash']" v-else/>
  </span>
</template>
<script>
export default {
  name: 'PasswordReveling',
  emits: ['toggle'],
  props: {
    isPassword: Boolean,
  }
}
</script>

<style lang="scss" scoped>

</style>