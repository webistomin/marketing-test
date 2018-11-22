<template>
  <section class="intro">
    <div class="intro__container">
      <button class="intro__angel">
        <span class="intro__angel-body"></span>
        <span class="intro__angel-face"></span>
        <span class="intro__angel-wing intro__angel-wing--left"></span>
        <span class="intro__angel-wing intro__angel-wing--right"></span>
        <span class="intro__angel-shadow"></span>
      </button>
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

  @keyframes angelWingLeft
    0%
      transform: rotate(-10deg) skewX(-10deg)
    100%
      transform: rotate(0deg) skewX(0deg)

  @keyframes angelWingRight
    0%
      transform: rotate(5deg) skewX(-10deg)
    100%
      transform: rotate(0deg) skewX(0deg)


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

    &__angel
      background-color: transparent
      border: none
      cursor: pointer
      position: absolute
      top: 0
      left: 50%
      transform: translateX(-50%)
      width: 300px
      height: 250px
      outline: none

    &__angel-body
      width: 300px
      height: 250px
      position: absolute
      top: 0
      left: 0
      background-image: url("../../static/img/angel.svg")
      animation: moving 1s alternate infinite
      background-repeat: no-repeat
      background-size: contain
      z-index: -1

    &__angel-face
      width: 42px
      height: 42px
      position: absolute
      right: 48px
      top: 25px
      background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzgiIGhlaWdodD0iNzgiIHZpZXdCb3g9IjAgMCAzOCA3OCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBpZD0iQXJ0Ym9hcmQtQ29weSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBpZD0iR3JvdXAtMTgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDYgNCkiPjxwYXRoIGQ9Ik0yMy4yMjggMjcuMzg0Yy41OTYuODkgMi42MzcgMS4xNzggNC4wNzcuNTI0IDEuNDQtLjY1NCAxLjc4LTIuMTk4LjIzNi0yLjUzOC0yLjI5NC0uNTA2LTQuOTEgMS4xMjQtNC4zMTMgMi4wMTR6IiBpZD0iUGF0aC0yNC1Db3B5LTIiIGZpbGw9IiNDRDcxOEUiIHRyYW5zZm9ybT0icm90YXRlKDYgMjUuODQ3IDI2Ljc3KSIvPjxwYXRoIGQ9Ik05LjIxMyAxMy4wNjJTLS4wNTUgMTIuMTIzLjQ5IDguMzA3Yy4zNjMtMi41NDQgMi4zNjItMy4xNCA1Ljk5Ny0xLjc4Ny4zNjMtMi41NDQgMS42MzYtMy40NTMgMy44MTYtMi43MjYgMy4yNzEgMS4wOS0xLjA5IDkuMjY4LTEuMDkgOS4yNjh6IiBpZD0iUGF0aC01MCIgZmlsbD0iI0NENzE4RSIgdHJhbnNmb3JtPSJyb3RhdGUoNiA1Ljk5MyA4LjMwNykiLz48cGF0aCBkPSJNMjUuODI4IDUuMjczUzIwLjk3IDQuNzggMjEuMjU3IDIuNzhjLjE5LTEuMzMzIDEuMjM4LTEuNjQ1IDMuMTQyLS45MzYuMTktMS4zMzQuODU3LTEuODEgMi0xLjQyOSAxLjcxNC41NzEtLjU3MSA0Ljg1Ny0uNTcxIDQuODU3eiIgaWQ9IlBhdGgtNTAtQ29weSIgZmlsbD0iI0JFNUU3QyIgdHJhbnNmb3JtPSJyb3RhdGUoNiAyNC4xNCAyLjc4MSkiLz48L2c+PGcgaWQ9Ikdyb3VwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1IDQyKSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48cGF0aCBkPSJNMSAxMC4xMjRzNCAzLjY0IDYgMi43M0M4LjMzMyAxMi4yNDcgOC4zMzMgMTAuNjI5IDcgOCIgaWQ9IlBhdGgtMjQiIHN0cm9rZT0iIzYwMzc0MSIgdHJhbnNmb3JtPSJyb3RhdGUoNiA0LjUgMTAuNSkiLz48cGF0aCBkPSJNMjAgMjguODE1czMuNTE3IDIuODU0IDUuNDAzIDIuMDM5YzEuMjU4LS41NDQgMS43NzMtMS40OTUgMS41NDQtMi44NTQiIGlkPSJQYXRoLTI0LUNvcHktMiIgc3Ryb2tlPSIjQ0Q3MThFIiB0cmFuc2Zvcm09InJvdGF0ZSg2IDIzLjUgMjkuNSkiLz48cGF0aCBkPSJNMjMgMi41ODJzMS41NTYgMS43MzUgMy4xMTEgMS4zNjdDMjcuMTQ4IDMuNzAzIDI3LjI3OCAyLjcyIDI2LjUgMSIgaWQ9IlBhdGgtMjQtQ29weSIgc3Ryb2tlPSIjNjAzNzQxIiB0cmFuc2Zvcm09InJvdGF0ZSgyMCAyNSAyLjUpIi8+PC9nPjwvZz48L3N2Zz4=)
      background-position: 0 0
      animation: moving 1s alternate infinite

    &__angel-shadow
      width: 100%
      height: 150px
      position: absolute
      top: 20px
      left: -78px
      background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTUyIiBoZWlnaHQ9IjI2MSIgdmlld0JveD0iMCAwIDU1MiAyNjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgaWQ9ImRfaG9tZSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzIzIC0zNykiPjxwYXRoIGQ9Ik04NjAuNzgyIDM3Yy00LjUgMC0zMjguNSAzOC0zNDMuNSA0OC41LTEwIDcgNS42NjcgOSA0NyA2LTg5LjMzMyAxMy4zMzMtMTMwLjUgMjIuODMzLTEyMy41IDI4LjUgNyA1LjY2NyA0OC4xNjcgMy44MzMgMTIzLjUtNS41LTUwLjY2NiA2LTc0LjY2NiAxMi4xNjctNzIgMTguNSAyLjY2NyA2LjMzMyAyNi42NjcgNy4zMzMgNzIgMy0xNDkgMTkuNjY3LTIxNy4zMzMgMzIuODMzLTIwNSAzOS41IDEyLjMzNCA2LjY2NyA4Mi41IDQuNSAyMTAuNS02LjUtOTUuNjY2IDktMTQzLjgzMyAxNi41LTE0NC41IDIyLjUtLjY2NiA2IDQ5LjY2NyA0LjUgMTUxLTQuNS0xMTUgMTIuMzMzLTE3NC4zMzMgMjMuMzMzLTE3OCAzMy0zLjY2NiA5LjY2NyA2MC41IDEyIDE5Mi41IDctOTguMzMzIDEwLjMzMy0xNDcuNSAxOS42NjctMTQ3LjUgMjggMCAxMi41IDE5NC0xMy41IDE4OC41LTNzLTMxOS41IDM0LTMwOC41IDQyLjUgMzUxLTMgNDE1LTEyLjUgMTEwLTI1IDEyOC00Ny41IDAtMTgyLjUgMC0xODItMS0xNS41LTUuNS0xNS41eiIgaWQ9ImFuZ2VsX3NoYWRvdyIgZmlsbD0iI0JFNUU3QyIvPjwvZz48L3N2Zz4=)
      z-index: -3
      background-size: 95%
      animation: moving 1s alternate infinite

    &__angel-wing
      width: 100px
      height: 96px
      position: absolute
      background-repeat: no-repeat
      &--left
        left: 103px
        top: 16px
        background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzciIGhlaWdodD0iNzciIHZpZXdCb3g9IjAgMCA3NyA3NyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBpZD0iZF9ob21lIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC03MzMgLTYwKSI+PGcgaWQ9Im1pbG9uLWNvcHkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDU0OCAzMCkiPjxnIGlkPSJhbmdlbF93aW5nX2xlZnQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE3OCAyOSkiPjxwYXRoIGQ9Ik00Ny44OTggMTEuMjI2YzAtMi41My02LjY3Mi0yLjI5IDUuMDAzLTQuNThzOC4wMDYgMi4wNSA4LjAwNiA0LjU4YzAgMjEuMzk4IDguMzY1IDQ3LjY1OCAyNS4wMTggNjAuODQ4IDIuMDA2IDEuNTkgMSAzLjkyNi0xLjMzNSAzLjkyNnMtNy42NjctMy42NDUtOS42NzMtNS4yMzRjLTE4LjgyNS0xNC45MTItMjcuMDItMzUuMzQ1LTI3LjAyLTU5LjU0eiIgaWQ9Ik92YWwtNC1Db3B5LTMiIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0ibm9uemVybyIgdHJhbnNmb3JtPSJyb3RhdGUoNiA2Ni41IDQxKSIvPjxwYXRoIGQ9Ik01My40OTQgNC4zOGMwIC45NzItNTEuNzctMi45MTItNDkuNDE2IDIuOTE0IDEuNTY5IDMuODg0IDguMjkyIDcuMjI4IDIwLjE3IDEwLjAzMy0xMi43NzUtLjY0Ny0xOC4zNzcuNTQtMTYuODA5IDMuNTYgMS41NyAzLjAyIDcuNTA4IDUuNjEgMTcuODE3IDcuNzY4LTExLjIwNS40MzEtMTUuMDE1IDIuMjY1LTExLjQzIDUuNTAyIDMuNTg2IDMuMjM2IDkuNDEzIDQuODU1IDE3LjQ4MSA0Ljg1NS05LjYzNy44NjMtMTIuNDM4IDMuMDItOC40MDQgNi40NzMgNC4wMzQgMy40NTIgMTAuNjQ1IDUuMjg2IDE5LjgzNCA1LjUwMi03LjYyIDEuMjk0LTkuNDEzIDMuNDUyLTUuMzc5IDYuNDczQzQzLjQxIDYxLjk5IDYwLjU1MyA2Ni44NDYgNzQgNjUuODc1Yy0uNjcyLS4zMjQtMy42OTgtMi45MTMtMy4wMjUtMy4yMzdDNTMuMzIgNDQuOTg3IDUzLjQ5NCAzLjQzNiA1My40OTQgNC4zODF6IiBpZD0iUGF0aC0xNiIgZmlsbD0iI0ZGQUJDNSIgdHJhbnNmb3JtPSJyb3RhdGUoNiAzOSAzNSkiLz48cGF0aCBkPSJNNTMuNTY0IDQuMDQzYzAgLjk4OS0zOS44Mi0yLjMwNi0zNy40NjMgMy42MjQgMS41NzEgMy45NTMgNy44ODUgNy4yNjcgMTguOTM5IDkuOTQxLTEyLjkwMy0uNTE3LTE4LjU0Mi44OTItMTYuOTE4IDQuMjI1IDEuNjIzIDMuMzMzIDcuNiA1Ljc2OCAxNy45MjggNy4zMDUtMTAuMzgtMS4xMzctMTQuMzM2LS4wNTgtMTEuODY2IDMuMjM2IDIuNDcgMy4yOTUgOC40NDYgNS43MyAxNy45MjkgNy4zMDYtOC45MyAxLjU3Ni0xMS43MzYgMy43NzMtOC40MiA2LjU4OSAzLjMxNiAyLjgxNiA5Ljk0IDQuNjgzIDE5Ljg3MSA1LjYtNi43ODgtLjI1OC05LjUwOC43MS04LjE2MSAyLjkwN0M0Ny40MjMgNTguMDcgNTguNTM4IDYzLjAxMiA3MSA2NCA1NC4xNiA0NS42MSA1My41NjQgMy4wNTUgNTMuNTY0IDQuMDQzeiIgaWQ9IlBhdGgtMTYiIGZpbGw9IiNGRENCREIiIHRyYW5zZm9ybT0icm90YXRlKDYgNDMuNSAzNCkiLz48cGF0aCBkPSJNNTQuMDU2IDUuMDQ4Yy00LjI5IDEuNTg1LTI5LjgzNS4xNzctMjcuOTU4IDQuODAzIDEuMjUyIDMuMDg0IDguNDMxIDUuNTg0IDIxLjU0IDcuNS0xMi44MzctMS4wOC0xOC44MDUtLjQzMi0xNy45MDQgMS45NDIuOSAyLjM3NCA2Ljg2OSA0Ljk2NCAxNy45MDQgNy43Ny0xMi4wMzYtMS4xOTUtMTcuMDctLjUwOC0xNS4xMDQgMi4wNjEgMS45NjYgMi41NyA5Ljc2MiA1LjEyIDIzLjM5IDcuNjUyLTExLjc2OC0uOTAyLTE2LjMzMS0uMjU1LTEzLjY5MSAxLjk0MiAyLjY0IDIuMTk3IDguMjcgNC41NzEgMTYuODkgNy4xMjMtNi43NTYtMS43MjctOS4xMi0xLjE4Ny03LjA5NCAxLjYxOUM1NS4wNyA1MS42NjkgNjcuMjMgNjAuMDg2IDc1IDYzIDUzLjI4MSA0MS42NyA1OC4zNDYgMy40NjMgNTQuMDU2IDUuMDQ4eiIgaWQ9IlBhdGgtMTYiIGZpbGw9IiNGRkYiIHRyYW5zZm9ybT0icm90YXRlKDYgNTAuNSAzNCkiLz48L2c+PC9nPjwvZz48L3N2Zz4=)
        animation: angelWingLeft 1s alternate infinite

      &--right
        left: 111px
        top: 0
        z-index: -2
        background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjkiIGhlaWdodD0iOTIiIHZpZXdCb3g9IjAgMCA2OSA5MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBpZD0iZF9ob21lIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC03NDkgLTQ5KSI+PGcgaWQ9Im1pbG9uLWNvcHkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDU0OCAzMCkiIGZpbGw9IiNFNzg2QTQiIGZpbGwtcnVsZT0ibm9uemVybyI+PHBhdGggZD0iTTI0Ni4xNzYgMjguNDc3YzE2LjQ5My0yLjMwOCA5Ljc2MSAyLjYzOSA4Ljc1MSA2LjkyNi01LjE5OCAyMi4wNzMgMi45OTkgNTEuMTA3IDE4LjI0NSA2Ny42NTUgMS44MzYgMS45OTQuMzg1IDQuMjgtMi4wNjcgMy45LTIuNDUxLS4zOC03LjQzLTUuMDcyLTkuMjY4LTcuMDY2YTgwLjEwMiA4MC4xMDIgMCAwIDEtNC4yMzUtNC45ODZjLTEyLjI3LS4xOC0yOS41NTctNi42OTctMzQuNDg4LTExLjg1Ni0zLjY4NS0zLjg1NC0xLjQ0Ny01Ljg1MiA2LjcxMi01Ljk5My05LjUzNS0xLjcxNC0xNi4xMDctNC43MjctMTkuNzE4LTkuMDQtMy42MS00LjMxMS0uMzIzLTYuMTQ2IDkuODY0LTUuNTAzLTguNDA1LTEuMzA0LTE0LjE5Ny0zLjk2Mi0xNy4zNzgtNy45NzMtMy4xOC00LjAxIDEuMTAzLTUuMzQgMTIuODUtMy45ODUtMTAuMzctMy45NTQtMTYuMTEzLTcuNjYtMTcuMjMtMTEuMTE1LTEuMTE2LTMuNDU3IDQuOTI0LTMuODA5IDE4LjEyLTEuMDU4LTExLjg5Mi00Ljg5My0xOC4zMjMtOS41MjYtMTkuMjkyLTEzLjg5Ny0xLjI3LTUuNzMgMjYuMyA3LjE4NyA0OS4xMzQgMy45OTF6IiBpZD0iYW5nZWxfd2luZ19yaWdodCIgdHJhbnNmb3JtPSJyb3RhdGUoNiAyMzUuNSA2NSkiLz48L2c+PC9nPjwvc3ZnPg==)
        animation: angelWingRight 1s alternate infinite

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

      &__angel-body,
      &__angel
        width: 400px

      &__angel-wing
        &--left
          left: 150px
          top: 40px

        &--right
          left: 160px
          top: 20px

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
