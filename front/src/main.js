import Vue from 'vue'
import Vuex from 'vuex'

import App from './App.vue'
import store from './store'
import router from './router'
import vuetify from './plugins/vuetify';

import PerfectScrollbar from "vue2-perfect-scrollbar";
import "vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css";

import '@/assets/main.sass';

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(PerfectScrollbar);

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
