<template>
  <div>
    <main-visual></main-visual>
    <header-menu></header-menu>
    <main>
      <button class="mdl-button mdl-js-button mdl-js-ripple-effect">
          Button
      </button>
    </main>
  </div>
</template>

<script>
  import MainVisual from './MainVisual.vue'
  import HeaderMenu from '../common/HeaderMenu.vue'
  export default {
    components: {
      MainVisual,
      HeaderMenu
    }
  }
</script>
