<template>
  <main class="page-content">
    <section class="finish">
      <h2 class="finish__title">
        <span class="finish__decor">выборы</span> <br>
        путешествие <br>
        близко!<br>
      </h2>
      <div class="cloud cloud--first"></div>
      <div class="cloud cloud--second"></div>
      <div class="cloud cloud--third"></div>
      <div class="cloud cloud--fourth"></div>
      <div class="cloud cloud--fifth"></div>
      <div class="cloud cloud--sixth"></div>
    </section>
  </main>
</template>

<script>
  export default {
    name: 'Finish',
  };
</script>

<style lang="sass">
  @keyframes clouds
    0%
      transform: translate3d(100vw,0,0)
      to
        transform: translateZ(0)
    100%
      left: -200px

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

    @media (min-width: 1140px)
      &__title
        font-size: 70px
      &__decor
        font-size: 50px

  .cloud
    position: absolute
    z-index: -2
    left: 100%

    &--first
      width: 151px
      height: 32px
      top: 2vh
      left: 10px
      animation: clouds 10s linear infinite
      background-image: url("../../static/img/cloud-1.svg")

    &--second
      width: 103px
      height: 22px
      top: 16vh
      animation: clouds 9s linear infinite
      background-image: url("../../static/img/cloud-2.svg")

    &--third
      width: 40px
      height: 12px
      top: 19vh
      animation: clouds 13s linear infinite
      background-image: url("../../static/img/cloud-3.svg")

    &--fourth
      width: 75px
      height: 18px
      top: 25vh
      animation: clouds 10s linear infinite
      background-image: url("../../static/img/cloud-4.svg")

    &--fifth
      width: 60px
      height: 18px
      top: 51vh
      animation: clouds 12s linear infinite
      background-image: url("../../static/img/cloud-5.svg")

    &--sixth
      width: 111px
      height: 27px
      top: 79vh
      animation: clouds 15s linear infinite
      background-image: url("../../static/img/cloud-6.svg")

</style>
