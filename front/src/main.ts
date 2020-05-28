import Vue from 'vue'

import App from '@/app.vue'
import router from '@/router'
import store from '@/store'

import { ShareModule } from '@/store/modules/share'

import '@/registerServiceWorker'
import '@/plugins'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  beforeCreate: () => {
    ShareModule.login()
  }
}).$mount('#app')
