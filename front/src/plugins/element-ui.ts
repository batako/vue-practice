import Vue from 'vue'
import { DatePicker } from 'element-ui'
import lang from 'element-ui/lib/locale/lang/ja'
import locale from 'element-ui/lib/locale'
// import 'element-ui/lib/theme-chalk/index.css'

locale.use(lang)

Vue.use(DatePicker)
