import router from '@/router'
import { reactive } from '@vue/composition-api'

// import Title from '../../components/mixins/title'
import AuthService from '../../services/auth'
import { ShareModule } from '../../store/modules/share'

const composition = () => {
  const state = reactive({
    email:    'example@example.com',
    password: 'password',
  })


  const _init = () => {
    AuthService.logout()
  }


  const login = () => {
    AuthService
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
