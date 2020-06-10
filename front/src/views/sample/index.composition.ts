import SampleModal from '@/components/modal/sample.vue'
import app from '@/main'
import { reactive } from '@vue/composition-api'

const composition = () => {
  const state = reactive({
    datetime: null,
  })


  const _init = () => {
    document.title = 'Sample'
  }


  const openModal = () => {
    app.$modal.show(
      SampleModal,
      {
        title: 'タイトル',
      },
      {
        height:       'auto',
        clickToClose: false,
        draggable:    '.draggable',
      },
    )
  }


  return {
    state,
    _init,
    openModal,
  }
}

export { composition }
