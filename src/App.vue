<template>
  <div id="app">
    <page-header></page-header>
    <router-view></router-view>
    <div class="cloud cloud--first"></div>
    <div class="cloud cloud--second"></div>
    <div class="cloud cloud--third"></div>
    <div class="cloud cloud--fourth"></div>
    <div class="cloud cloud--fifth"></div>
    <div class="cloud cloud--sixth"></div>
  </div>
</template>

<script>
  import PageHeader from './components/PageHeader';

  export default {
    name: 'app',
    components: {
      PageHeader,
    },
  };
</script>

<style lang="sass">
  #app
    min-height: inherit
    position: relative
    overflow-x: hidden

  @keyframes clouds
    0%
      transform: translate3d(100vw,0,0)
      to
        transform: translateZ(0)
    100%
      left: -200px

  .cloud
    position: absolute
    z-index: -2
    left: 100%

    &--first
      width: 151px
      height: 32px
      top: 71px
      left: 10px
      animation: clouds 10s linear infinite
      background-image: url("../static/img/cloud-1.svg")

    &--second
      width: 103px
      height: 22px
      top: 289px
      animation: clouds 9s linear infinite
      background-image: url("../static/img/cloud-2.svg")

    &--third
      width: 40px
      height: 12px
      top: 222px
      animation: clouds 13s linear infinite
      background-image: url("../static/img/cloud-3.svg")

    &--fourth
      width: 75px
      height: 18px
      top: 328px
      animation: clouds 10s linear infinite
      background-image: url("../static/img/cloud-4.svg")

    &--fifth
      width: 60px
      height: 18px
      top: 586px
      animation: clouds 12s linear infinite
      background-image: url("../static/img/cloud-5.svg")

    &--sixth
      width: 111px
      height: 27px
      top: 559px
      animation: clouds 15s linear infinite
      background-image: url("../static/img/cloud-6.svg")

  html
    font-family: "Open Sans", Arial, Helvetica, sans-serif

  body
    margin: 0
    min-height: 100vh
    background-color: #cd718e
    box-sizing: border-box
    font-weight: 400
    -webkit-text-size-adjust: none
    -webkit-tap-highlight-color: transparent
    -webkit-appearance: none
    -webkit-overflow-scrolling: touch
    position: relative

  img
    max-width: 100%
    height: auto

  ul
    padding: 0
    margin: 0
    list-style: none

  a
    color: #ffffff
    text-decoration: none

  li
    list-style-type: none
    margin: 0
    padding: 0

  blockquote
    margin: 0

  p
    margin: 0

  picture
    display: block


  *:focus
    outline: thin dotted

</style>
