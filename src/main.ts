import Vue from 'vue';
import VueRouter from 'vue-router';
import { router } from './router';
import Vuetify from 'vuetify';
import { vuetify } from 'plugins';
import App from './App.vue';

Vue.use(Vuetify);
Vue.use(VueRouter);

new Vue({
  router,
  vuetify,
  render: h => h(App),
}).$mount('#root');
