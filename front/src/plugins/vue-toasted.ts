import VueToasted from 'vue-toasted'
import { VueConstructor } from 'vue/types/vue'

export default {
  install (Vue: VueConstructor) {
    Vue.use(VueToasted)
  }
}
