import {
  Component,
  Vue,
  Watch,
} from 'vue-property-decorator'

@Component
export default class Title extends Vue {
  title = ''

  created() {
    if (this.title) document.title = this.title
  }

  @Watch('title')
  $_onTitleChange(title = '') {
    if (this.title) document.title = title
  }
}
