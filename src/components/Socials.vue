<template>
  <section class="socials">

    <div class="container socials__container">
      <h2 class="socials__title">Чтобы выиграть <br class="socials__break"> путешествие</h2>
      <div class="socials__inner">
        <p class="socials__text socials__text--counter"
           :class="{'socials__text--done': isShared}"
           @click="changeSocialsShare">
          Поделитесь с друзьями:
        </p>
        <social-sharing url="https://github.com/webistomin/marketing-test"
                        title="Тестовое задание от Aviasales"
                        description="Выиграй путешествие от Aviasales"
                        quote="Давай узнаем, кто из кандидатов прислал тебе валентинку"
                        hashtags="aviasales"
                        twitter-user="vuejs"
                        inline-template
                        @close="popupOpened()"
                        :class="{'socials__list--disabled': isShared}">
          <ul class="socials__list">
            <li class="socials__item">
              <network network="vk">
                <a href="#" class="socials__link">Vkontakte</a>
              </network>
            </li>
            <li class="socials__item">
              <network network="facebook">
                <a href="#" class="socials__link">Facebook</a>
              </network>
            </li>
            <li class="socials__item">
              <network network="twitter">
                <a href="#" class="socials__link">Twitter</a>
              </network>
            </li>
            <li class="socials__item">
              <network network="odnoklassniki">
                <a href="#" class="socials__link">Odnoklassniki</a>
              </network>
            </li>
          </ul>
        </social-sharing>
      </div>
      <div class="socials__inner">
        <label class="socials__text socials__text--counter"
               :class="{'socials__text--done': isEmailValid}"
               @click="changeEmail"
               for="email">Оставь почту:</label>
        <form action="#" class="socials__form">
          <input type="email" class="socials__input" id="email" @change="checkValidation"
          :class="{'socials__input--disabled': isEmailValid}">
          <button
            class="socials__btn btn"
            :class="{'socials__btn--invalid': !getFormValidation,
            'socials__btn--valid': getFormValidation}"
            type="submit">
            Отправить
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Socials',
    data() {
      return {
        isDisabled: true,
        isShared: false,
        isEmailValid: false,
      };
    },
    methods: {
      popupOpened() {
        this.isShared = true;
      },
      changeSocialsShare() {
        this.isShared = false;
      },
      changeEmail() {
        this.isEmailValid = false;
      },
      checkValidation(event) {
        this.isEmailValid = event.target.validity.valid;
      },
    },
    computed: {
      getFormValidation() {
        return this.isShared && this.isEmailValid;
      },
    },
  };
</script>

<style lang="sass">
  @import "../assets/style"

  .socials
    display: flex
    align-items: center
    justify-content: center
    padding-top: 23px
    counter-reset: counter

    &__title
      font-family: 'Shnobel', Arial, serif
      font-size: 27px
      font-weight: 400
      text-align: center
      color: #ffffff
      margin: 0
      margin-bottom: 15px

    &__inner
      display: flex
      flex-direction: column
      align-items: center
      margin-bottom: 30px

    &__text
      width: intrinsic     /* Safari/WebKit uses a non-standard name */
      width: -moz-max-content  /* Firefox/Gecko */
      width: -webkit-max-content /* Chrome */
      position: relative
      font-family: "Open Sans", Arial, sans-serif
      color: #ffffff
      font-size: 16px
      font-weight: 400

      &--counter
        &::before
          content: counter(counter) "."
          counter-increment: counter
          position: absolute
          left: -20px

      &--done
        color: rgba(255, 255, 255, 0.5)
        &::before
          visibility: hidden
        &::after
          position: absolute
          top: 0
          left: -54px
          width: 20px
          height: 20px
          content: ""
          background-color: #7f4156
          background-image: url("../../static/img/icon-check.svg")
          background-position: center
          background-repeat: no-repeat
          cursor: pointer


    &__link
      display: block
      width: 100%
      height: 100%
      font-size: 0

    &__list
      margin-top: 15px
      display: flex

      &--disabled
        opacity: 0.5
        pointer-events: none

    &__item
      border-radius: 100px
      width: 53px
      height: 53px
      margin-right: 16px
      background-repeat: no-repeat
      background-position: center
      -webkit-transition: background-image 0.2s ease-in-out
        transition: background-image 0.2s ease-in-out

      &:first-child
        background-color: #45668e
        background-image: url("../../static/img/icon-vk.svg")

      &:nth-child(2)
        background-color: #3b5998
        background-image: url("../../static/img/icon-fb.svg")

      &:nth-child(3)
        background-color: #00aced
        background-image: url("../../static/img/icon-twitter.svg")

      &:last-child
        margin-right: 0
        background-color: #eb722e
        background-image: url("../../static/img/icon-ok.svg")

      &:hover,
      &:focus
        -webkit-transition: background-image 0.2s ease-in-out
        transition: background-image 0.2s ease-in-out
        background-image: url("../../static/img/icon-heart.svg")

    &__form
      display: flex
      flex-direction: column
      padding-top: 12px

    &__input
      width: 260px
      height: 50px
      box-sizing: border-box
      border-radius: 25px
      background-color: #ffffff
      border-color: transparent
      padding: 0 28px
      margin-bottom: 30px
      font-family: "Open Sans", Arial, sans-serif
      font-weight: 400
      font-size: 20px
      color: rgba(0, 0, 0, 0.8)

      &--disabled
        opacity: 0.5
        pointer-events: none

    &__btn
      width: 260px
      height: 60px
      border: 2px solid #ffffff
      font-family: Shnobel, Arial, sans-serif
      font-size: 30px
      font-weight: 400
      border-radius: 35px
      cursor: pointer

      &--invalid
        color: #ffffff
        background-color: transparent
        pointer-events: none

      &--valid
        background-color: #ffffff
        color: #7f4156

      &:hover,
      &:focus
        color: #ffffff
        border-color: #7f4156
        background-color: #7f4156

    @media (min-width: 660px)
      &__title
        font-size: 50px
        margin-bottom: 36px

      &__inner
        align-items: flex-start

      &__item
        margin-right: 29px

      &__text
        font-size: 18px

        &--counter
          &::before
            font-family: Shnobel, Arial, sans-serif
            font-size: 44px
            font-weight: 400
            left: -52px
            top: -10px

      &__input
        width: 302px
        margin-bottom: 40px

      &__btn
        width: 230px
        height: 70px
        margin: 0 auto

</style>
