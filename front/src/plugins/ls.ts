import Storage from 'vue-ls';
import { VueConstructor } from 'vue/types/vue';

export default {
  install (Vue: VueConstructor) {
    Vue.use(Storage, { storage: 'local' })
  }
}
