import { reactive } from '@vue/composition-api'
import { ToastStore } from '@/store/modules/toast'

const composition = () => {
  const state = reactive({
    toastrs: ToastStore.toastrs,
  })


  return {
    state,
  }
}

export { composition }
