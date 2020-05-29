import Vue from 'vue';
import VueRouter from 'vue-router';
import { router } from './router';
import Vuetify from 'vuetify';
import vuetify from './plugins/vuetify';
import App from './App.vue';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);
Vue.use(VueRouter);

new Vue({
  router,
  vuetify,
  render: h => h(App),
}).$mount('#root');
