import VueCompositionApi from '@vue/composition-api'
import { VueConstructor } from 'vue/types/vue'

export default {
  install (Vue: VueConstructor) {
    Vue.use(VueCompositionApi)
  }
}
