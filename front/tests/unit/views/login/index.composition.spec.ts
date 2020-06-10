import plugins from '@/plugins'
import {
    createLocalVue,
  } from '@vue/test-utils'

const localVue = createLocalVue()
localVue.use(plugins)

import { composition } from '@/views/login/index.composition'
import { ShareModule } from '@/store/modules/share'

import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

import AuthService from '@/services/auth'

describe('@/views/login/index.composition.ts', () => {
  it('state', () => {
    const {
      state,
    } = composition()

    expect(state.email).toBe('')
    expect(state.password).toBe('')
  })


  it('_init', () => {
    const {
      state,
      _init,
    } = composition()
    const logoutSpy = jest.spyOn(AuthService, 'logout')

    localStorage.setItem('access-token', 'dumy')
    localStorage.setItem('client',       'dumy')
    localStorage.setItem('uid',          'dumy')

    // NOTE: AuthService.logout() のテストを分離すべきか？
    ShareModule.login()
    expect(Object.keys(localStorage).length).toBe(3)
    expect(ShareModule.is_logined).toBe(true)

    _init()

    expect(document.title).toBe('ログイン')
    expect(state.email).toBe('example@example.com')
    expect(state.password).toBe('password')
    expect(logoutSpy).toHaveBeenCalled()

    // NOTE: AuthService.logout() のテストを分離すべきか？
    expect(Object.keys(localStorage).length).toBe(0)
    expect(ShareModule.is_logined).toBe(false)
  })


  it('login', async () => {
    const {
      login,
    } = composition()
    const access_token = 'sign_in_access_token'
    const client       = 'sign_in_client'
    const uid          = 'sign_in_uid'
    const mockAxios = new MockAdapter(axios)
    const loginSpy = jest.spyOn(AuthService, 'login')

    mockAxios.onPost('/api/auth/sign_in').reply(200, {
      status: 'sucess',
    }, {
      'access-token': access_token,
      'client':       client,
      'uid':          uid,
    })

    ShareModule.setToastr({
      type:    'success',
      message: 'message',
      force:   false,
    })

    expect(ShareModule.toastrs.length).toBe(1)

    await login()

    expect(loginSpy).toHaveBeenCalled()
    expect(ShareModule.toastrs.length).toBe(0)
    // TODO: ログイン成功時のページ遷移テストを追加（viewのテスト？e2eのテスト？）
  })
})
