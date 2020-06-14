import { VueConstructor } from 'vue/types/vue'

import VuetifyToastSnackbar from '@/components/shared/vuetify-toast-snackbar.vue'

export default {
  install (Vue: VueConstructor) {
    Vue.component('vuetify-toast-snackbar', VuetifyToastSnackbar)
  }
}
