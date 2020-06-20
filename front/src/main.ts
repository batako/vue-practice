import '@/registerServiceWorker'
// style
import 'element-ui/lib/theme-chalk/index.css'
import 'vuetify/dist/vuetify.min.css'

import Vue from 'vue'

import App from '@/app.vue'
import shared from '@/components/shared'
import plugins from '@/plugins'
import { vuetify } from '@/plugins/vuetify'
import router from '@/router'
import store from '@/store'
import { ShareStore } from '@/store/modules/share'
import layouts from '@/views/layouts'

Vue.use(layouts)
Vue.use(plugins)
Vue.use(shared)

Vue.config.productionTip = false

const app = new Vue({
  router,
  store,
  render: h => h(App),
  vuetify,

  beforeCreate: () => {
    ShareStore.login()
  }
}).$mount('#app')

export default app
