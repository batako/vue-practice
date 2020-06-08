import { DatePicker } from 'element-ui'
import locale from 'element-ui/lib/locale'
import lang from 'element-ui/lib/locale/lang/ja'
import { VueConstructor } from 'vue/types/vue'

export default {
  install (Vue: VueConstructor) {
    Vue.use(DatePicker)
    locale.use(lang)
  }
}
