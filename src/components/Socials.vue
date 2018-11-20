<template>
  <section class="socials">
    <div class="container socials__container">
      <h2 class="socials__title">Чтобы выиграть <br class="socials__break"> путешествие</h2>
      <div class="socials__inner">
        <span class="socials__counter">1.</span>
        <div class="socials__block">
        <p class="socials__text">Поделитесь с друзьями</p>
        <ul class="socials__list">
          <li class="socials__item">
            <a href="#" class="socials__link">Vkontakte</a>
          </li>
          <li class="socials__item">
            <a href="#" class="socials__link">Facebook</a>
          </li>
          <li class="socials__item">
            <a href="#" class="socials__link">Twitter</a>
          </li>
          <li class="socials__item">
            <a href="#" class="socials__link">Odnoklassniki</a>
          </li>
        </ul>
      </div>
      </div>
      <div class="socials__inner">
        <span class="socials__counter">2.</span>
        <div class="socials__block">
          <label class="socials__text" for="email">Оставь почту</label>
          <form action="#" class="socials__form">
            <input type="email" class="socials__input" id="email">
            <button class="socials__btn btn" type="submit">Отправить</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Socials',
  };
</script>

<style scoped>

</style>
