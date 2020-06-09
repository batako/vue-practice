import Axios from '@/plugins/axios'
import CompositionApi from '@/plugins/composition-api'
import ElementUi from '@/plugins/element-ui'
import VueJsModal from '@/plugins/vue-js-modal'
import VueKinesis from '@/plugins/vue-kinesis'

import { VueConstructor } from 'vue/types/vue'

export default {
  install (Vue: VueConstructor) {
    Vue.use(Axios)
    Vue.use(CompositionApi)
    Vue.use(ElementUi)
    Vue.use(VueJsModal)
    Vue.use(VueKinesis)
  }
}

export {
  Axios,
  CompositionApi,
  ElementUi,
  VueJsModal,
  VueKinesis,
}
