<template>
  <div>
    <router-view transition="fade" transition-mode="out-in" class="animated"></router-view>
  </div>
</template>

<script>
  import store from './vuex/store'
  export default {
    name: 'App',
    store: store
  }
</script>

<style lang="sass">
  @import "./assets/css/flex"

  $activeColor: #3f51b5

  body
    background: #FAFAFA

  .mdl-textfield--floating-label
    &.is-focused
      .mdl-textfield__label
        font-size: 12px
    &:not(.is-focused)
      .mdl-textfield__label
        font-size: 14px

  .flexbox
    @include flexbox
    @include align-items(center)

  .mdl-textfield.narrow-margin
    margin-top: -10px !important
    margin-bottom: -5px !important

  .on-active
    color: $activeColor !important

  .expand-transition
    transition: all .8s ease-in
    overflow: hidden
    max-height: 1000px

  .expand-enter, .expand-leave
    transition: all .8s ease-out
    max-height: 0
    opacity: 0

  .replace-transition
    transition: opacity .5s ease-in

  .replace-enter, .replace-leave
    opacity: 0
    max-height: 0

</style>