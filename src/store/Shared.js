export default {
  state: {
    isStarted: false,
  },
  mutations: {
    setStartState(state, payload) {
      // eslint-disable-next-line no-param-reassign
      state.isStarted = payload;
    },
  },
  getters: {
    getStartedState(state) {
      return state.isStarted;
    },
  },
};
