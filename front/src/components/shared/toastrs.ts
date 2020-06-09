import { VueConstructor } from 'vue/types/vue'

import Toastr from '@/components/shared/toastr.vue'
import Toastrs from '@/components/shared/toastrs.vue'

export default {
  install (Vue: VueConstructor) {
    Vue.component('toastrs', Toastrs)
    Vue.component('toastr', Toastr)
  }
}
