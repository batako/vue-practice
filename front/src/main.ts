import '@/registerServiceWorker'
// style
import 'element-ui/lib/theme-chalk/index.css'

import Vue from 'vue'

import App from '@/app.vue'
import SharedComponents from '@/components/shared'
import Plugins from '@/plugins'
import router from '@/router'
import store from '@/store'
import { ShareModule } from '@/store/modules/share'
import Layouts from '@/views/layouts'

import vuetify from './plugins/vuetify'

Vue.use(Layouts)
Vue.use(Plugins)
Vue.use(SharedComponents)

Vue.config.productionTip = false

const app = new Vue({
  router,
  store,
  render: h => h(App),
  vuetify,

  beforeCreate: () => {
    ShareModule.login()
  }
}).$mount('#app')

export default app
