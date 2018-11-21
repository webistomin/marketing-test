import Vue from 'vue';
import Vuex from 'vuex';
import Questions from './Questions';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    Questions,
  },
  strict: process.env.NODE_ENV !== 'production',
});
