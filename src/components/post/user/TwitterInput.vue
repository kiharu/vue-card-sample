<template>
  <div class="flexbox">
    <svg v-el:icon version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 16 16">
      <path fill="#bdbdbd" d="M16 3.538c-0.588 0.263-1.222 0.438-1.884 0.516 0.678-0.406 1.197-1.050 1.444-1.816-0.634 0.375-1.338 0.65-2.084 0.797-0.6-0.638-1.453-1.034-2.397-1.034-1.813 0-3.281 1.469-3.281 3.281 0 0.256 0.028 0.506 0.084 0.747-2.728-0.138-5.147-1.444-6.766-3.431-0.281 0.484-0.444 1.050-0.444 1.65 0 1.138 0.578 2.144 1.459 2.731-0.538-0.016-1.044-0.166-1.488-0.409 0 0.013 0 0.028 0 0.041 0 1.591 1.131 2.919 2.634 3.219-0.275 0.075-0.566 0.116-0.866 0.116-0.212 0-0.416-0.022-0.619-0.059 0.419 1.303 1.631 2.253 3.066 2.281-1.125 0.881-2.538 1.406-4.078 1.406-0.266 0-0.525-0.016-0.784-0.047 1.456 0.934 3.181 1.475 5.034 1.475 6.037 0 9.341-5.003 9.341-9.341 0-0.144-0.003-0.284-0.009-0.425 0.641-0.459 1.197-1.038 1.637-1.697z"></path>
    </svg>
    <div class="twitter-input">
      <span class="atmark" v-el:icon-atmark>＠</span>
      <mdl-textfield class="narrow-margin" floating-label="Twitterアカウント">
        <input class="mdl-textfield__input" type="text"
               slot="input"
               :value="twitter"
               @input="changeTwitter"
               @focus="onFocus"
               @blur="offFocus">
      </mdl-textfield>
    </div>
  </div>
</template>

<style lang="sass" scoped>
  $activeColor: #3f51b5

  svg
    color: #bdbdbd
    margin-right: 10px
    &.on-active
      path
        fill: $activeColor

  .twitter-input
    position: relative
    display: inline-block

    input[type="text"]
      box-sizing: border-box
      padding-left: 20px

  .atmark
    display: none
    position: absolute
    left: 0
    top: 15px
    font-size: 18px

</style>

<script>
  import {
    updateTwitter
  } from '../../../vuex/actions'

  export default ({
    props: {
      'twitter': String,
      'user': Object
    },

    vuex: {
      actions: {
        updateTwitter
      }
    },

    methods: {
      changeTwitter (e) {
        this.updateTwitter(this.user, e.target.value.trim())
      },

      onFocus (e) {
        console.log('focus')
        this.$els.icon.classList.add('on-active')
        this.toggleAtmark(true)
      },

      offFocus (e) {
        console.log('offFocus')
        this.$els.icon.classList.remove('on-active')
        this.toggleAtmark(e.target.value.trim().length)
      },

      toggleAtmark (isUpgraded) {
        console.log('toggle')
        if (isUpgraded) {
          this.$els.iconAtmark.style.display = 'inline-block';
        } else {
          this.$els.iconAtmark.style.display = 'none';
        }
      }
    },

    ready: function () {
      this.toggleAtmark( this.twitter.length ? true : false )
    }
  })
</script>
