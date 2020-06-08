import axios from 'axios'
import VueAxios from 'vue-axios'
import { VueConstructor } from 'vue/types/vue'

export default {
  install (Vue: VueConstructor) {
    Vue.use(VueAxios, axios)
  }
}
