import { VueConstructor } from 'vue/types/vue'

import VuetifyToastSnackbar from '@/components/shared/vuetify-toast-snackbar/index.vue'

export default {
  install (Vue: VueConstructor) {
    Vue.component('vuetify-toast-snackbar', VuetifyToastSnackbar)
  }
}
