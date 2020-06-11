import router from '@/router'
import { reactive } from '@vue/composition-api'

// import Title from '../../components/mixins/title'
import AuthService from '../../services/auth'
import { ShareModule } from '../../store/modules/share'

const composition = () => {
  const state = reactive({
    email:         '',
    password:      '',
    show_password: false,
  })


  const _init = () => {
    document.title = 'ログイン'
    state.email    = 'example@example.com'
    state.password = 'password'
    AuthService.logout()
  }


  const login = () => {
    return AuthService
      .login(state.email, state.password)
      .then(() => {
        router.push('/')
        ShareModule.clearToastrs()
      })
  }


  return {
    state,
    _init,
    login,
  }
}

export { composition }
