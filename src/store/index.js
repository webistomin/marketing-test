import Vue from 'vue';
import Vuex from 'vuex';
import Questions from './Questions';
import Shared from './Shared';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    Questions,
    Shared,
  },
  strict: process.env.NODE_ENV !== 'production',
});
