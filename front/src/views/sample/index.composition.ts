import { reactive } from '@vue/composition-api'
import { ShareModule } from '@/store/modules/share'
import SampleModal from '@/components/modal/sample.vue'

const composition = () => {
  const state = reactive({
    datetime: null,
  })


  const _init = () => {
    document.title = 'Sample'
  }


  const openModal = () => {
    ShareModule.vue.$modal.show(
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
