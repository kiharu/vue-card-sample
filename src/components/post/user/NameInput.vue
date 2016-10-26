<template>
  <div class="flexbox">
    <i class="material-icons" v-el:icon>face</i>
    <mdl-textfield class="narrow-margin" floating-label="名前" autocomplete="off">
      <input class="mdl-textfield__input" type="text"
             slot="input"
             :value="name"
             @input="changeName"
             @focus="onFocus"
             @blur="offFocus">
    </mdl-textfield>
  </div>
</template>

<style lang="sass" scoped>
  i
    font-size: 24px
    color: #bdbdbd
    margin-right: 10px

</style>

<script>
  import {
    updateName
  } from '../../../vuex/actions'

  export default {
    props: ['name', 'user'],

    vuex: {
      actions: {
        updateName
      }
    },

    methods: {
      changeName (e) {
        this.updateName(this.user, e.target.value.trim())
      },

      onFocus (e) {
        this.$els.icon.classList.add('on-active')
      },

      offFocus (e) {
        this.$els.icon.classList.remove('on-active')
      }
    }
  }
</script>
