import { VueConstructor } from 'vue/types/vue'

import AppLayout from '@/views/layouts/app/index.vue'

export default {
  install (Vue: VueConstructor) {
    Vue.component('app-layout', AppLayout)
  }
}
