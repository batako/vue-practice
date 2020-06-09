import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import Vue from 'vue'

import plugins from '@/plugins'
import { ShareModule } from '@/store/modules/share'
import LoginIndex from '@/views/login/index.vue'
import { mount } from '@vue/test-utils'

Vue.use(plugins)

const init_access_token = 'init_access_token'
const init_client       = 'init_client'
const init_uid          = 'init_uid'

describe('@/views/login/login.vue', () => {
  let mockAxios: MockAdapter

  beforeEach(() => {
    mockAxios = new MockAdapter(axios)

    localStorage.setItem('access-token', init_access_token)
    localStorage.setItem('client',       init_client)
    localStorage.setItem('uid',          init_uid)
    ShareModule.login()
  })


  it('sign out', () => {
    expect(localStorage.getItem('access-token')).toBe(init_access_token)
    expect(localStorage.getItem('client')).toBe(init_client)
    expect(localStorage.getItem('uid')).toBe(init_uid)
    expect(ShareModule.is_logined).toBe(true)

    mount(LoginIndex)

    expect(localStorage.getItem('access-token')).toBe(null)
    expect(localStorage.getItem('client')).toBe(null)
    expect(localStorage.getItem('uid')).toBe(null)
    expect(ShareModule.is_logined).toBe(false)
  })


  it('has a login form', () => {
    const wrapper = mount(LoginIndex)
    expect(wrapper.find('form').exists()).toBe(true)
  })


  it('has a email input', () => {
    const wrapper = mount(LoginIndex)
    expect(wrapper.find('input[type=email]').exists()).toBe(true)
  })


  it('has a password input', () => {
    const wrapper = mount(LoginIndex)
    expect(wrapper.find('input[type=password]').exists()).toBe(true)
  })


  it('has a submit button', () => {
    const wrapper = mount(LoginIndex)
    expect(wrapper.find('input[type=submit]').exists()).toBe(true)
  })


  it('can sign in', () => {
    const access_token = 'sign_in_access_token'
    const client = 'sign_in_client'
    const uid = 'sign_in_uid'

    mockAxios.onPost('/api/auth/sign_in').reply(200, {
      status: 'sucess',
    }, {
      'access-token': access_token,
      'client':       client,
      'uid':          uid,
    })

    const wrapper = mount(LoginIndex)
    wrapper.find('form').trigger('submit.prevent')

    // TODO: 他の書き方がないか要検討
    setTimeout(() => {
      expect(localStorage.getItem('access-token')).toBe(access_token)
      expect(localStorage.getItem('client')).toBe(client)
      expect(localStorage.getItem('uid')).toBe(uid)
      expect(ShareModule.is_logined).toBe(true)
    })
  })
})
