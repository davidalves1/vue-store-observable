import Vue from 'vue';
import router from './router';
import { store } from './store';
import App from './App.vue';

Vue.config.productionTip = false;

Vue.prototype.$store = store;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
