<template>
  <div>
    <header-menu></header-menu>
    <main>
      <article>
        <users v-for="user in users" :user="user" transition="expand"></users>
        <add-btn></add-btn>
        <hr>
        <contents v-for="content in contents" :content="content"></contents>
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
  import Users from './user/Users.vue'
  import AddBtn from './user/BtnAdd.vue'
  import Contents from './contents/Contents.vue'

  export default {
    vuex: {
      getters: {
        users: ({ article }) => article.users,
        contents: ({ article }) => article.contents
      }
    },
    components: {
      HeaderMenu,
      Users, Contents, AddBtn
    }
  }

</script>
