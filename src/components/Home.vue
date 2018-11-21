<template>
  <main class="page-content">
    <intro v-show="!isStarted" @isStarted="startPoll"></intro>
    <question v-show="isStarted"></question>
  </main>
</template>

<script>
  import Socials from './Socials';
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
    },
    components: {
      Socials,
      Intro,
      Question,
    },
  };
</script>

<style>

</style>
