<template>
  <main class="page-content">
    <section class="finish">
      <h2 class="finish__title">
        <span class="finish__decor">выборы</span> <br>
        путешествие <br>
        близко <br>
      </h2>
    </section>
  </main>
</template>

<script>
  export default {
    name: 'Finish',
  };
</script>

<style lang="sass">
  .page-content
    display: flex
    align-items: center
    justify-content: center
    min-height: calc(100vh - 48px)

    @media (min-width: 660px)
      min-height: calc(100vh - 44px)

  .finish
    width: 100%
    min-height: inherit
    position: relative
    display: flex
    justify-content: center
    align-items: center

    &::after
      content: ""
      position: absolute
      top: -50px
      width: 100vw
      height: 100vh
      background-image: url("../../static/img/final.svg")
      background-repeat: no-repeat
      background-size: contain
      background-position: center top
      z-index: -1

    &::before
      width: 100%
      height: 100px
      content: ""
      position: absolute
      bottom: 0
      left: 0
      background-color: #be5e7c
      z-index: -2

    &__title
      margin: 0
      text-align: center
      font-family: Shnobel, Arial, sans-serif
      font-size: 27px
      color: #ffffff
      font-weight: 400

    &__decor
      text-decoration: line-through
      color: #7f4156

    @media (min-width: 660px)
      &__title
        font-size: 50px
      &__decor
        font-size: 35px


</style>
