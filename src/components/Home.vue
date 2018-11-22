<template>
  <main class="page-content">
    <intro v-show="!getStartedState"></intro>
    <question v-show="getStartedState"></question>
  </main>
</template>

<script>
  import Intro from './Intro';
  import Question from './Question';

  export default {
    name: 'Home',
    computed: {
      getStartedState() {
        return this.$store.getters.getStartedState;
      },
    },
    components: {
      Intro,
      Question,
    },
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

</style>
