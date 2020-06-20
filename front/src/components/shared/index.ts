import { VueConstructor } from 'vue/types/vue'

import Loading from '@/components/shared/loading/index.vue'
import VuetifyToastSnackbar from '@/components/shared/vuetify-toast-snackbar/index.vue'

export default {
  install (Vue: VueConstructor) {
    Vue.component('loading', Loading)
    Vue.component('vuetify-toast-snackbar', VuetifyToastSnackbar)
  }
}
