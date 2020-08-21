import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import $ from 'jquery';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import App from './App.vue';
import router from './router';
import 'bootstrap';
import './bus';
Vue.config.productionTip = false;

windows.$ = $;//後面的$是上面jquery的$

Vue.component('Loading', Loading);
Vue.use(VueAxios, axios);




new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
