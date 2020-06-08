import VueKinesis from 'vue-kinesis';
import { VueConstructor } from 'vue/types/vue';

export default {
  install (Vue: VueConstructor) {
    Vue.use(VueKinesis)
  }
}
