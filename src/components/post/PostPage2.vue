<template>
  <div>
    <header-menu></header-menu>
    <main>
      <article>
        Vue-Card Test
      </article>
    </main>
  </div>
</template>

<style lang="sass" scoped>
  main
    width: 1200px
    margin: 40px auto
    text-align: center

  article
    margin: 0 15px
</style>

<script>
  import HeaderMenu from '../common/HeaderMenu.vue'

  export default {
    components: {
      HeaderMenu
    }
  }

</script>
