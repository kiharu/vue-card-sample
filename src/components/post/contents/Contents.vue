<template>
  <div>
    <label>{{content.article.text}}</label>
    <span>{{ getUserName(content.user.id) }}</span>
  </div>
</template>

<script>
  export default {
    props: ['content'],
    vuex: {
      getters: {
        users: ({ article }) => article.users
      }
    },
    methods: {
      getUserName: function (id) {
        let user = this.users.filter(user => {
          return user.id === id
        })
        return user[0].name
      }
    }
  }
</script>

<style scoped>
</style>
