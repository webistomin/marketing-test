<template>
  <section class="intro">
    <div class="intro__container">
      <h1 class="intro__title">
        <strong class="intro__decor">Выиграй</strong>
        <br>
        путешествие от Aviasales</h1>
      <p class="intro__text">Давай узнаем, кто из кандидатов прислал тебе валентинку</p>
      <button class="intro__btn btn" @click="setStart">Начать!</button>
    </div>
    <div class="cloud cloud--first"></div>
    <div class="cloud cloud--second"></div>
    <div class="cloud cloud--third"></div>
    <div class="cloud cloud--fourth"></div>
    <div class="cloud cloud--fifth"></div>
    <div class="cloud cloud--sixth"></div>
  </section>
</template>

<script>
  export default {
    name: 'Intro',
    methods: {
      setStart() {
        this.$store.commit('setStartState', true);
      },
    },
  };
</script>

<style lang="sass">
  @keyframes moving
    0%
      transform: translate3d(0, -1vh, 0)
    100%
      transform: translate3d(0, 1vh, 0)

  @keyframes city
    0%
      background-position: 0 0
    100%
      background-position: -100vw 0

  @keyframes clouds
    0%
      transform: translate3d(100vw,0,0)
      to
        transform: translateZ(0)
    100%
      left: -200px

  .intro
    display: flex
    justify-content: center
    align-items: center
    box-sizing: border-box
    position: relative
    width: 100%
    min-height: inherit

    &::after
      content: ""
      position: absolute
      bottom: 0
      background-image: url("../../static/img/city.svg")
      background-size: auto 100%
      width: 100%
      height: 100px
      animation: city 60s linear infinite
      z-index: -1

    &::before
      content: ""
      position: absolute
      top: 0
      width: 300px
      height: 400px
      background-image: url("../../static/img/angel.svg")
      animation: moving 1s alternate infinite
      background-repeat: no-repeat
      background-size: contain
      z-index: -1

    &__container
      padding-top: 100px


    &__title
      margin: 0
      margin-top: 120px
      margin-bottom: 10px
      text-align: center
      font-family: Shnobel, Arial, sans-serif
      font-weight: 400
      font-size: 50px
      color: #ffffff

    &__decor
      font-size: 100px

    &__text
      font-family: "Open Sans", Arial, sans-serif
      font-weight: 400
      color: #7f4156
      font-size: 20px
      margin-bottom: 40px
      text-align: center

    &__btn
      display: block
      margin: 0 auto
      margin-bottom: 40px
      width: 260px
      height: 60px
      border: 2px solid #ffffff
      font-family: Shnobel, Arial, sans-serif
      font-size: 30px
      font-weight: 400
      border-radius: 35px
      cursor: pointer
      background-color: transparent
      color: #ffffff

      &:hover,
      &:focus
        color: #ffffff
        border-color: #7f4156
        background-color: #7f4156

    @media (min-width: 660px)
      min-height: calc(100vh - 44px)

      &::before
        width: 400px


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
