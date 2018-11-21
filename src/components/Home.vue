<template>
  <main class="page-content">
    <intro v-show="!isStarted" @isStarted="startPoll"></intro>
    <question v-show="isStarted" @isFinished="endPoll"></question>
  </main>
</template>

<script>
  import Intro from './Intro';
  import Question from './Question';

  export default {
    name: 'Home',
    data() {
      return {
        isStarted: false,
      };
    },
    methods: {
      startPoll() {
        this.isStarted = true;
      },
      endPoll() {
        this.isStarted = false;
      },
    },
    components: {
      Intro,
      Question,
    },
  };
</script>

<style>

</style>
