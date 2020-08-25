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

windows.$ = $// 後面的$是上面jquery的$

Vue.component('Loading', Loading)
Vue.use(VueAxios, axios)
Vue.component('Loading', Loading)
Vue.filter('thousands', thousandsFilter)

Vue.prototype.$bus = new Vue()

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
