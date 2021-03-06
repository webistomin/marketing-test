export default {
  state: {
    questions: [
      {
        id: 1,
        questionTitle: 'Кого лайкнешь в тиндере?',
        questionValues: [
          'Вот эту блондиночку с красивой улыбкой',
          'Вот эту толпу девчонок',
          'Мужчину красят не бицепсы, а усы!',
          'Дело не в теле, а в амбициях',
          'Этого парня с голым торсом. Отличная грудь',
        ],
      },
      {
        id: 2,
        questionTitle: 'У вас мэтч! Где пройдёт свидание?',
        questionValues: [
          'Где он решит, там и пройдёт.',
          'Конечно же на моей яхте!',
          'Куда бы мы не пошли, она всё равно будет против.',
          'Прогуляемся по Тверской, посидим потом где-нибудь.',
          'В рюмочной, поближе к рабочему классу!',
        ],
      },
      {
        id: 3,
        questionTitle: 'О чём поговорите за ужином',
        questionValues: [
          'О новых моделях дронов и о дачах всяких.',
          'Сейчас не 37-й год, можем поговорить о чём угодно.',
          'О его хозяйстве (в смысле, пока только про грядки).',
          'Только не о делах прошлых!',
          'О делах государственной важности.',
        ],
      },
      {
        id: 4,
        questionTitle: 'Куда отправитесь в совместное путешествие?',
        questionValues: [
          'Как куда? На картошку!',
          'Конечно в горы, на лыжи!',
          'На Бали, только это секрет.',
          'В мою каюту.',
          'В штаты, у него там друзья',
        ],
      },
      {
        id: 5,
        questionTitle: 'Что наденешь на свидание?',
        questionValues: [
          'Костюм миллиардера.',
          'Красный свитер, напомнить ему о хорошем.',
          'Что нибудь остромодное, она в этом разбирается.',
          'Носки со смешным принтом, например, уточками.',
          'Обтягивающее платье, у меня гибкая фигура.',
        ],
      },
    ],
    currentPage: 0,
    results: [],
  },
  mutations: {
    setCurrentPage(state) {
      // eslint-disable-next-line no-param-reassign
      state.currentPage += 1;
    },
    setStartedPage(state) {
      // eslint-disable-next-line no-param-reassign
      state.currentPage = 0;
    },
    setResult(state, payload) {
      state.results.push(payload);
    },
    clearResults(state) {
      // eslint-disable-next-line no-param-reassign
      state.results = [];
    },
  },
  getters: {
    getQuestions(state) {
      return state.questions;
    },
    getCurrentPage(state) {
      return state.currentPage;
    },
    getResults(state) {
      return state.results;
    },
  },
};
