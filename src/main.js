// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import socialsSharing from 'vue-social-sharing';
import App from './App';
import router from './router';
import './assets/style.sass';

Vue.use(socialsSharing);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
