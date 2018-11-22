<template>
  <header class="page-header">
    <router-link tag="a" to="/" class="page-header__link" @click.native="setFinish">
      <picture>
        <source media="(min-width: 660px)" srcset="../../static/img/logo-desktop.svg">
        <img src="../../static/img/logo-mobile.svg" alt="Aviasales" class="page-header__img">
      </picture>
    </router-link>
  </header>
</template>

<script>
  export default {
    name: 'PageHeader',
    methods: {
      setFinish() {
        this.$store.commit('setStartState', false);
        this.$store.commit('setStartedPage');
        this.$store.commit('clearResults');
      },
    },
  };
</script>

<style lang="sass">
  .page-header
    padding: 10px
    padding-bottom: 0
</style>
