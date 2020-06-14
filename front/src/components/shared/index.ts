import { VueConstructor } from 'vue/types/vue'

import Loading from '@/components/shared/loading'
import Navbar from '@/components/shared/navbar'
// import Toastrs from '@/components/shared/toastrs'
import VuetifyToastSnackbar from '@/components/shared/vuetify-toast-snackbar'

export default {
  install (Vue: VueConstructor) {
    Vue.use(Loading)
    Vue.use(Navbar)
    // Vue.use(Toastrs)
    Vue.use(VuetifyToastSnackbar)
  }
}

export {
  Loading,
  Navbar,
  // Toastrs,
  VuetifyToastSnackbar,
}
