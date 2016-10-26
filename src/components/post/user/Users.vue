<template>
  <div class="user">
    <mdl-card>
      <div class="card-inner" slot="supporting-text">
        <div>
          <prof-image></prof-image>
        </div>
        <div>
          <name-input :name="user.name" :user="user"></name-input>
          <twitter-input :twitter="user.twitter" :user="user"></twitter-input>
          <intro-input :intro="user.intro" :user="user"></intro-input>
        </div>
        <div>
          <btn-delete :user="user"></btn-delete>
        </div>
      </div>
    </mdl-card>
  </div>
</template>

<style lang="sass" scoped>
  @import "../../../assets/css/flex"

  .user
    text-align: center

  .mdl-card
    position: relative
    display: inline-block
    width: auto
    padding: 20px 10px
    margin-bottom: 30px

  .card-inner
    @include flexbox
    > div
      margin: 0 10px

</style>

<script>
  import NameInput from './NameInput.vue'
  import TwitterInput from './TwitterInput.vue'
  import IntroInput from './IntroInput.vue'
  import ProfImage from './ProfImage.vue'
  import BtnDelete from './BtnDelete.vue'
  import {
    deleteUser
  } from '../../../vuex/actions'

  export default {
    props: ['user'],

    vuex: {
      actions: {
        deleteUser
      }
    },

    components: {
      ProfImage,
      NameInput,
      TwitterInput,
      IntroInput,
      BtnDelete
    }

  }
</script>
