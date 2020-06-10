import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

import plugins from '@/plugins'
import router from '@/router'
import { ShareModule } from '@/store/modules/share'
import * as composition from '@/views/login/index.composition'
import LoginIndex from '@/views/login/index.vue'
import {
    createLocalVue,
    shallowMount,
  } from '@vue/test-utils'

const localVue = createLocalVue()
localVue.use(plugins)

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


  // TODO: router のテストに移行する
  it("can't go to other page", async () => {
    const wrapper = shallowMount(LoginIndex, {
      localVue,
      router,
    })

    wrapper.vm.$router.push('/sample')
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.$route.path).toBe('/')
  })


  it('can sign out', () => {
    expect(localStorage.getItem('access-token')).toBe(init_access_token)
    expect(localStorage.getItem('client')).toBe(init_client)
    expect(localStorage.getItem('uid')).toBe(init_uid)
    expect(ShareModule.is_logined).toBe(true)

    shallowMount(LoginIndex, {
      localVue,
    })

    expect(localStorage.getItem('access-token')).toBe(null)
    expect(localStorage.getItem('client')).toBe(null)
    expect(localStorage.getItem('uid')).toBe(null)
    expect(ShareModule.is_logined).toBe(false)
  })


  it('has a login form', () => {
    const wrapper = shallowMount(LoginIndex, {
      localVue,
    })
    expect(wrapper.find('form').exists()).toBe(true)
  })


  it('has a email input', () => {
    const wrapper = shallowMount(LoginIndex, {
      localVue,
    })
    expect(wrapper.find('input[type=email]').exists()).toBe(true)
  })


  it('has a password input', () => {
    const wrapper = shallowMount(LoginIndex, {
      localVue,
    })
    expect(wrapper.find('input[type=password]').exists()).toBe(true)
  })


  it('has a submit button', () => {
    const wrapper = shallowMount(LoginIndex, {
      localVue,
    })
    expect(wrapper.find('input[type=submit]').exists()).toBe(true)
  })


  it('can sign in', async () => {
    const access_token = 'sign_in_access_token'
    const client       = 'sign_in_client'
    const uid          = 'sign_in_uid'

    mockAxios.onPost('/api/auth/sign_in').reply(200, {
      status: 'sucess',
    }, {
      'access-token': access_token,
      'client':       client,
      'uid':          uid,
    })

    const {
      state,
      _init,
      login,
    } = composition.composition()
    const loginSpy = jest.fn()

    jest.spyOn(composition, 'composition').mockReturnValue({
      state,
      login: loginSpy,
      _init
    })

    const wrapper = shallowMount(LoginIndex, {
      localVue,
      router,
    })

    wrapper.find('form').trigger('submit.prevent')
    expect(loginSpy).toHaveBeenCalled()

    await wrapper.vm.$nextTick()

    await login()

    await wrapper.vm.$nextTick()

    expect(localStorage.getItem('access-token')).toBe(access_token)
    expect(localStorage.getItem('client')).toBe(client)
    expect(localStorage.getItem('uid')).toBe(uid)
    expect(ShareModule.is_logined).toBe(true)
    // パスのテストはできるが要素は変化しない
    expect(wrapper.vm.$route.path).toBe('/')
  })
})
