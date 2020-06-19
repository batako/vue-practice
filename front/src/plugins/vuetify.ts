// 一括でロードする場合
// import Vuetify from 'vuetify/lib'

// 個別にロードする場合（別途CSSをインポートする必要あり）
import Vuetify from 'vuetify'
// import 'vuetify/dist/vuetify.min.css'
import { VueConstructor } from 'vue/types/vue'

export default {
  install (Vue: VueConstructor) {
    Vue.use(Vuetify)
  }
}

const opts = {}
export const vuetify = new Vuetify(opts)
