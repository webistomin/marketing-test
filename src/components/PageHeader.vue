<template>
  <header class="page-header">
    <picture>
      <source media="(min-width: 660px)" srcset="../../static/img/logo-desktop.svg">
      <img src="../../static/img/logo-mobile.svg" alt="Aviasales" class="page-header__img">
    </picture>
  </header>
</template>

<script>
  export default {
    name: 'PageHeader',
  };
</script>

<style lang="sass">
  .page-header
    padding: 10px
    padding-bottom: 0
</style>
