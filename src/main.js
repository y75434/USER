import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import $ from 'jquery'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import thousandsFilter from './filter/thousands'
import App from './App.vue'
import router from './router'
import 'bootstrap'

Vue.config.productionTip = false

window.$ = $

Vue.component('Loading', Loading)
Vue.use(VueAxios, axios)
Vue.filter('thousands', thousandsFilter)

Vue.prototype.$bus = new Vue()

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
