<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
  };
</script>

<style lang="sass">
  html
    font-family: "Open Sans", Arial, Helvetica, sans-serif

  body
    margin: 0
    height: 100vh
    background-color: #cd718e
    box-sizing: border-box
    font-weight: 400
    -webkit-text-size-adjust: none
    -webkit-tap-highlight-color: transparent
    -webkit-appearance: none
    -webkit-overflow-scrolling: touch

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
