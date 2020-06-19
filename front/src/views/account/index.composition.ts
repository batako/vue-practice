import router from '@/router'
import { reactive } from '@vue/composition-api'
import { UserService } from '@/services/user'
import { ShareStore } from '@/store/modules/share'

const composition = () => {
  const state = reactive({
    input_image: null,
    current_user: ShareStore.current_user,
    form: {
      name:  ShareStore.current_user.name,
      email: ShareStore.current_user.email,
    },
  })


  const _init = () => {
    document.title = 'プロフィール'
  }


  const updateAvatar = () => {
    UserService.updateAvatar(state.input_image)
      .then(() => {
        state.input_image = null
      })
  }


  const updateUser = () => {
    UserService.update(state.form.name, state.form.email)
  }


  const goHome = () => {
    router.push('/')
  }


  return {
    state,
    _init,
    updateAvatar,
    updateUser,
    goHome,
  }
}

export { composition }
