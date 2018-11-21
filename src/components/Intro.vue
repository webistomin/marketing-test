<template>
  <section class="intro">
    <div class="intro__container">
      <h1 class="intro__title">
        <strong class="intro__decor">Выиграй</strong>
        <br>
        путешествие от Aviasales</h1>
      <p class="intro__text">Давай узнаем, кто из кандидатов прислал тебе валентинку</p>
      <button class="intro__btn btn">Начать!</button>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Intro',
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

  .intro
    display: flex
    justify-content: center
    align-items: center
    min-height: calc(100vh - 44px)
    box-sizing: border-box
    position: relative

    &::after
      content: ""
      position: absolute
      bottom: 0
      background-image: url(https://assets.hotellook.com/kandidat/layout/images/city.7f4d2.svg)
      background-size: auto 100%
      width: 100%
      height: 100px
      animation: city 60s linear infinite
      z-index: -1

    &::before
      content: ""
      position: absolute
      top: 0
      width: 400px
      height: 400px
      background-image: url("../../static/img/angel.svg")
      animation: moving 1s alternate infinite
      background-size: contain
      background-repeat: no-repeat
      background-size: contain
      z-index: -1

    &__container
      padding-top: 100px


    &__title
      margin: 0
      margin-top: 120px
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

    &__btn
      display: block
      margin: 0 auto
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

</style>
