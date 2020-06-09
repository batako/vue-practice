import Loading from '@/components/shared/loading'
import Toastrs from '@/components/shared/toastrs'

import { VueConstructor } from 'vue/types/vue'

export default {
  install (Vue: VueConstructor) {
    Vue.use(Loading)
    Vue.use(Toastrs)
  }
}

export {
  Loading,
  Toastrs,
}
