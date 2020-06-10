import VueRouter from 'vue-router'
import { VueConstructor } from 'vue/types/vue'

export default {
  install (Vue: VueConstructor) {
    Vue.use(VueRouter)
  }
}
