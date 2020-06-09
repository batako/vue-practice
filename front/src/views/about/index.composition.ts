import { reactive } from '@vue/composition-api'

const composition = () => {
  const state = reactive({
  })


  const _init = () => {
    document.title = 'About'
  }


  return {
    state,
    _init,
  }
}

export { composition }
