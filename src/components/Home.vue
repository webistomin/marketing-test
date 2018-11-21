<template>
  <main class="page-content">
    <intro v-show="!isStarted" @isStarted="startPoll"></intro>
    <socials v-show="isStarted"></socials>
  </main>
</template>

<script>
  import Socials from './Socials';
  import Intro from './Intro';

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
    },
  };
</script>

<style>

</style>
