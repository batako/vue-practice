import router from '@/router'
import { reactive } from '@vue/composition-api'
import UserService from '@/services/user'
import { ShareModule } from '@/store/modules/share'

const composition = () => {
  const state = reactive({
    input_image: null,
    current_user: ShareModule.current_user,
    form: {
      name:  ShareModule.current_user.name,
      email: ShareModule.current_user.email,
    },
  })


  const _init = () => {
    document.title = 'プロフィール'
  }


  const updateAvatar = (file: any) => {
    if (file === undefined || file === null) return

    UserService
      .updateAvatar(state.input_image)
      .then(() => {
        state.input_image = null
      })
  }


  const updateUser = () => {
    UserService
      .update(state.form.name, state.form.email)
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
