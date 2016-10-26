<template>
  <i class="material-icons" @click="deleteUser(user)">clear</i>
</template>

<style lang="sass" scoped>
  i
    cursor: pointer
</style>

<script>
  import {
    deleteUser
  } from '../../../vuex/actions'

  export default {
    props: ['user'],

    vuex: {
      actions: {
        deleteUser
      }
    }
  }
</script>
