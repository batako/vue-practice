import Vue from 'vue'
import App from './app.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

// style
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

import utils from './components/mixins/utils'
Vue.mixin(utils)

import api from './components/mixins/api'
Vue.mixin(api)

import Toastrs from './components/toastrs.vue'
Vue.component('toastrs', Toastrs)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
