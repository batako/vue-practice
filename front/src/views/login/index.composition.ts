// import Title from '@/components/mixins/title'
import router from '@/router'
import AuthService from '@/services/auth'
// import { ShareStore } from '@/store/modules/share'
import { ToastStore } from '@/store/modules/toast'
import { reactive } from '@vue/composition-api'

const composition = () => {
  const state = reactive({
    email:         '',
    password:      '',
    show_password: false,
  })


  const _init = () => {
    document.title = 'ログイン'
    state.email    = 'example1@example.com'
    state.password = 'password'
    AuthService.logout()
  }


  const login = () => {
    return AuthService
      .login(state.email, state.password)
      .then(() => {
        router.push('/')
        // ShareStore.clearToastrs()
        ToastStore.clear()
      })
  }


  return {
    state,
    _init,
    login,
  }
}

export { composition }
