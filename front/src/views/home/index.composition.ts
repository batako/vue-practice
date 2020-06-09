import { reactive } from '@vue/composition-api'

const composition = () => {
  const state = reactive({
  })


  const _init = () => {
    document.title = 'Home'
  }


  return {
    state,
    _init,
  }
}

export { composition }
