import VModal from 'vue-js-modal'
import { VueConstructor } from 'vue/types/vue'

export default {
  install (Vue: VueConstructor) {
    Vue.use(VModal, { dynamic: true, injectModalsContainer: true })
  }
}
