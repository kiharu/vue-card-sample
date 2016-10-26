<template>
  <div class="flexbox">
    <i class="material-icons" v-el:icon>edit</i>
    <mdl-textfield class="narrow-margin" textarea rows="4" floating-label="紹介文">
      <textarea class="mdl-textfield__input" rows="4"
                slot="textarea"
                @input="changeIntro"
                @focus="onFocus"
                @blur="offFocus">{{ intro }}</textarea>
    </mdl-textfield>
  </div>
</template>

<style lang="sass" scoped>
  .mdl-textfield
    width: 400px

    textarea
      width: 100%

  i
    font-size: 24px
    color: #bdbdbd
    margin-right: 10px
    margin-top: -2.5em

</style>

<script>
  import {
    updateIntro
  } from '../../../vuex/actions'

  export default {
    props: ['intro', 'user'],

    vuex: {
      actions: {
        updateIntro
      }
    },

    methods: {
      changeIntro (e) {
        this.updateIntro(this.user, e.target.value.trim())
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
