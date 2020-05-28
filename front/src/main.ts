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

import Toastrs from './components/toastrs.vue'
Vue.component('toastrs', Toastrs)
import Toastr from './components/toastr.vue'
Vue.component('toastr', Toastr)

import VModal from 'vue-js-modal'
Vue.use(VModal, { dynamic: true, injectModalsContainer: true })

import Loading from '@/components/loading.vue'
Vue.component('loading', Loading)

import VueKinesis from 'vue-kinesis'
Vue.use(VueKinesis)

import { DatePicker } from 'element-ui'
import lang from 'element-ui/lib/locale/lang/ja'
import locale from 'element-ui/lib/locale'
import 'element-ui/lib/theme-chalk/index.css'
locale.use(lang)
Vue.use(DatePicker)

Vue.config.productionTip = false

import { ShareModule } from '@/store/modules/share'

new Vue({
  router,
  store,
  render: h => h(App),
  beforeCreate: () => {
    ShareModule.login()
  }
}).$mount('#app')
