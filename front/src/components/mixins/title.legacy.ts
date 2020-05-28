import Vue from 'vue'

export default Vue.extend({
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
})
