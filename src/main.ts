import Vue from 'vue';
import Vuetify from 'vuetify';
import vuetify from './plugins/vuetify';
import App from './App.vue';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

new Vue({
  vuetify,
  render: h => h(App),
}).$mount('#root');
