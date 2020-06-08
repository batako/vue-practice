import { VueConstructor } from 'vue/types/vue'

import Loading from '@/components/loading.vue'

export default {
  install (Vue: VueConstructor) {
    Vue.component('loading', Loading)
  }
}
