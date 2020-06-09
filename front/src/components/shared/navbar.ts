import { VueConstructor } from 'vue/types/vue'

import Navbar from '@/components/shared/navbar.vue'

export default {
  install (Vue: VueConstructor) {
    Vue.component('navbar', Navbar)
  }
}
