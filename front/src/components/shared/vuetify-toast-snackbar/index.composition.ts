import { reactive } from '@vue/composition-api'
import { ToastrStore } from '@/store/modules/toastr'

const composition = () => {
  const state = reactive({
    toastrs: ToastrStore.toastrs,
  })


  return {
    state,
  }
}

export { composition }
