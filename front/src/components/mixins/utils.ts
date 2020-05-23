import {
  Component,
  Vue,
  Watch,
} from 'vue-property-decorator'

@Component
export default class Utils extends Vue {
  $_utils_title = ''

  $_utils_upper_case(str: string) {
    return (str || '').replace(/[a-z]/g, function(ch) {return String.fromCharCode(ch.charCodeAt(0) & ~32);})
  }

  $_utils_nl2br(str: string) {
    return (str || '').replace(/\r?\n/g, '<br>')
  }

  @Watch('$data.$_utils_title')
  $_utils_change_title(title = '') {
    if (!title) return

    document.title = title
  }
}
