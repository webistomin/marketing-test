<template>
  <section class="question">
    <div class="question__container">
      <h2 class="question__title">чтобы выиграть путешествие,</h2>
      <p class="question__text">ответь на пять вопросов и узнай, кто из кандидатов прислал тебе валентинку.</p>
      <div class="question__inner">
        <div class="question__block question__block--margin">
          <span class="question__counter">
            <span class="question__number">{{getCurrentPage+1}}</span>
            <svg width="66px" height="73px" viewBox="0 0 66 73" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g id="d_quest1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(-355.000000, -274.000000)">
        <g id="Group-2" transform="translate(355.000000, 274.000000)" fill="#D3839C">
            <path d="M39.2902217,10.8566142 C27.982712,-2.66472196 16.3827185,-3.55597879 4.49024107,8.18284374 C-13.3484751,25.7910775 26.8906754,75.8201302 39.2902217,72.8753261 C44.9848114,71.5229014 77.48075,17.3903959 61.7339449,5.50907326 C53.8591497,-0.432638914 46.3779086,1.34987474 39.2902217,10.8566142 Z" id="heart"></path>
        </g>
    </g>
</svg>
          </span>
          <img :src="`./../static/img/question-${getCurrentPage+1}.svg`" alt="#" class="question__img" width="356" height="299">
        </div>
        <div class="question__block">
          <span class="question__question">
            {{getQuestions[getCurrentPage].questionTitle}}
          </span>
          <div class="question__inputs">
            <div class="question__row"
                 v-for="(question, index) of getQuestions[getCurrentPage].questionValues"
                 :key="index">
              <input type="radio" :id="'question-' + index"
                     :value="index" class="question__input"
                     @click="setCurrentPage($event)">
              <label :for="'question-' + index"
                     class="question__label">
                {{question}}
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Question',
    computed: {
      getQuestions() {
        return this.$store.getters.getQuestions;
      },
      getCurrentPage() {
        return this.$store.getters.getCurrentPage;
      },
      getResults() {
        return this.$store.getters.getResults;
      },
    },
    methods: {
      setCurrentPage(event) {
        const value = event.target.value;
        this.$store.commit('setResult', value);
        if (this.getResults.length === this.getQuestions.length) {
          this.$store.commit('setStartState', false);
          this.$store.commit('setStartedPage');
          this.$router.push('/results');
        } else {
          this.$store.commit('setCurrentPage');
        }
      },
    },
  };
</script>

<style lang="sass">
  .question
    padding-top: 40px

    &__counter
      display: none
      position: absolute
      left: -100px

    &__container
      padding: 0 10px

    &__number
      font-family: Shnobel, Arial, sans-serif
      font-weight: 400
      color: #ffffff
      font-size: 50px
      position: absolute
      left: 50%
      top: 50%
      transform: translateY(-50%) translateX(-50%)

    &__title
      font-family: Shnobel, Arial, sans-serif
      font-size: 50px
      color: #ffffff
      font-weight: 400
      margin: 0
      margin-bottom: 10px
      text-align: center

    &__text,
    &__label
      font-family: "Open Sans", Arial, sans-serif
      font-size: 18px
      font-weight: 400
      color: #ffffff
      text-align: center

    &__inner
      display: flex
      flex-direction: column
      justify-content: center
      margin-top: 40px

    &__block
      display: flex
      flex-direction: column
      position: relative
      align-items: center

    &__inputs
      display: flex
      flex-direction: column

    &__question
      font-family: "Open Sans", Arial, sans-serif
      font-weight: 400
      font-size: 20px
      color: #7f4156
      margin-bottom: 40px

    &__input
      position: absolute
      opacity: 0
      cursor: pointer
      height: 0
      width: 0

    &__label
      display: block
      position: relative
      padding-left: 40px
      margin-bottom: 20px
      text-align: left
      cursor: pointer

      &::before
        width: 20px
        height: 20px
        content: ""
        position: absolute
        left: 0
        top: 50%
        transform: translateY(-50%)
        border-radius: 50%
        background-color: #ffffff

      &::after
        opacity: 0
        width: 10px
        height: 10px
        content: ""
        position: absolute
        left: 5px
        top: 50%
        transform: translateY(-50%)
        background-color: #7f4156
        border-radius: 50%
        transition: all 0.3s ease-in-out

      &:hover
        color: rgba(255, 255, 255, 0.5)
        &::after
          opacity: 1
          transition: all 0.3s ease-in-out

    @media (min-width: 1140px)
      padding-top: 0
      &__counter
        display: block
      &__inner
        flex-direction: row
      &__container
        padding: 0
      &__block
        align-items: flex-start
        &--margin
          margin-right: 40px

</style>
