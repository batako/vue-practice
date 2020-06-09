import '@/registerServiceWorker'
// style
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'element-ui/lib/theme-chalk/index.css'

import Vue from 'vue'

import App from '@/app.vue'
import SharedComponents from '@/components/shared'
import Plugins from '@/plugins'
import router from '@/router'
import store from '@/store'
import { ShareModule } from '@/store/modules/share'

Vue.use(Plugins)
Vue.use(SharedComponents)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  beforeCreate: () => {
    ShareModule.login()
  }
}).$mount('#app')
