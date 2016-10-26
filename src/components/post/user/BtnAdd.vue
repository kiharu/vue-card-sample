<template>
  <mdl-button class="" v-mdl-ripple-effect raised colored @click="addUser()">
    ADD
  </mdl-button>
</template>

<script>
  import {
    addUser
  } from '../../../vuex/actions'

  export default {
    vuex: {
      actions: {
        addUser
      }
    }
  }
</script>

<style lang="sass">
</style>
