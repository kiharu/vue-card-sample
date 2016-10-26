<template>
  <div class="tabs">
    <div class="tab-bar">
      <a v-link="{ path: '/', activeClass: 'active', exact: true }" class="tab">Menu-HOGE1</a>
      <a v-link="{ path: '/post', activeClass: 'active', exact: true }" class="tab">Menu-HOGE2</a>
      <a v-link="{ path: '/test', activeClass: 'active', exact: true }" class="tab">Menu-HOGE3</a>
    </div>
  </div>
</template>

<style lang="sass" scoped>
  $activeColor: #3f51b5

  @mixin flexbox
    display: -webkit-box // old
    display: -moz-box // old
    display: -ms-flexbox // ie
    display: -webkit-flex // new
    display: flex // new

  @mixin flex-direction($direction)
    -webkit-flex-direction: $direction
    -ms-flex-direction: $direction
    flex-direction: $direction

  @mixin justify-content($param)
    -webkit-justify-content: $param
    -ms-flex-pack: $param
    justify-content: $param

  .tabs
    display: block
    width: 100%

  .tab-bar
    @include flexbox
    @include flex-direction(row)
    @include justify-content(center)
    -webkit-align-content: space-between
    -ms-flex-line-pack: justify
    align-content: space-between
    -webkit-align-items: flex-start
    -ms-flex-align: start
    align-items: flex-start
    height: 48px
    padding: 0
    margin: 0
    border-bottom: 1px solid #e0e0e0

  .tab
    margin: 0
    border: none
    padding: 0 24px
    float: left
    position: relative
    display: block
    text-decoration: none
    height: 48px
    line-height: 48px
    text-align: center
    font-weight: 500
    font-size: 14px
    text-transform: uppercase
    color: rgba(0,0,0,.54)
    overflow: hidden 

  .active
    color: $activeColor
    &:after
      height: 2px
      width: 100%
      display: block
      content: " "
      bottom: 0
      left: 0
      position: absolute
      background: $activeColor
      -webkit-animation: border-expand .2s cubic-bezier(.4,0,.4,1).01s alternate forwards
      animation: border-expand .2s cubic-bezier(.4,0,.4,1).01s alternate forwards
      transition: all 1s cubic-bezier(.4,0,1,1)

  .nav-menu
    background: #ba9ee9
</style>
