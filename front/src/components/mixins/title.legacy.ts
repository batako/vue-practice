export default {
  data() {
    return {
      title: '',
    }
  },
  created() {
    if (this.title) document.title = this.title
  },
  watch: {
    title: function (title = '') {
      if (this.title) document.title = title
    },
  }
}
