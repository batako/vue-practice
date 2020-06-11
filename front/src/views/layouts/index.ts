import AppLayout from '@/views/layouts/app'

import { VueConstructor } from 'vue/types/vue'

export default {
  install (Vue: VueConstructor) {
    Vue.use(AppLayout)
  }
}

export {
  AppLayout,
}
