import Loading from '@/components/shared/loading'
import Navbar from '@/components/shared/navbar'
// import Toastrs from '@/components/shared/toastrs'

import { VueConstructor } from 'vue/types/vue'

export default {
  install (Vue: VueConstructor) {
    Vue.use(Loading)
    Vue.use(Navbar)
    // Vue.use(Toastrs)
  }
}

export {
  Loading,
  Navbar,
  // Toastrs,
}
