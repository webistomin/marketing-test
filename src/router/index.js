import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home';
import Results from '../components/Results';
import Finish from '../components/Finish';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/results',
      component: Results,
    },
    {
      path: '/finish',
      component: Finish,
    },
  ],
  mode: 'history',
});
