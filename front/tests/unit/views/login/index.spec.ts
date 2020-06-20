import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

import plugins from '@/plugins'
import { vuetify } from '@/plugins/vuetify'
import router from '@/router'
import { ShareStore } from '@/store/modules/share'
import { ToastrStore } from '@/store/modules/toastr'
import * as composition from '@/views/login/index.composition'
import LoginIndex from '@/views/login/index.vue'
import {
    createLocalVue,
    mount,
    shallowMount,
  } from '@vue/test-utils'

const localVue = createLocalVue()
localVue.use(plugins)

// vuetify 内部では Vue.extend を使用しているためグローバルにインストールする必要がある
// see: https://github.com/vuetifyjs/vuetify/discussions/4068
// import Vue from 'vue'
// Vue.use(plugins)
// Vue.use(vuetify)

const init_access_token = 'init_access_token'
const init_client       = 'init_client'
const init_uid          = 'init_uid'

const signin = () => {
  localStorage.setItem('access-token', init_access_token)
  localStorage.setItem('client',       init_client)
  localStorage.setItem('uid',          init_uid)
  ShareStore.login()
}

const {
  state,
  _init,
  login,
} = composition.composition()

describe('@/views/login/login.vue', () => {
  let mockAxios: MockAdapter

  beforeEach(() => {
    mockAxios = new MockAdapter(axios)

    signin()

    // reset composition
    jest.spyOn(composition, 'composition').mockReturnValue({
      state,
      _init,
      login,
    })
  })


  it('is ready for testing', () => {
    expect(localStorage.getItem('access-token')).toBe(init_access_token)
    expect(localStorage.getItem('client')).toBe(init_client)
    expect(localStorage.getItem('uid')).toBe(init_uid)
    expect(ShareStore.is_logined).toBe(true)
    expect(ShareStore.login_status).toBe(true)
  })


  it('has a login form', () => {
    const wrapper = mount(LoginIndex, {
      localVue,
      vuetify,
    })

    expect(wrapper.find('form').exists()).toBe(true)
    expect(wrapper.find('[test-email]').exists()).toBe(true)
    expect(wrapper.find('[test-password]').exists()).toBe(true)
    expect(wrapper.find('[test-submit]').exists()).toBe(true)
  })


  // TODO: router のテストに移行する
  it("can't go to other page", async () => {
    const wrapper = shallowMount(LoginIndex, {
      localVue,
      vuetify,
      router,
    })

    wrapper.vm.$router.push('/sample')
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.$route.path).toBe('/')
  })


  it('call _init', () => {
    const initSpy = jest.fn()

    jest.spyOn(composition, 'composition').mockReturnValue({
      state,
      login,
      _init: initSpy,
    })

    shallowMount(LoginIndex, {
      localVue,
      vuetify,
    })

    expect(initSpy).toHaveBeenCalled()
    // TODO: 初期設定値が想定している要素に設定されているか検証したい
  })


  // NOTE: composition でテストしているため必要かどうか要検討
  it('can sign out', () => {
    shallowMount(LoginIndex, {
      localVue,
      vuetify,
    })

    expect(Object.keys(localStorage).length).toBe(0)
    expect(ShareStore.is_logined).toBe(false)
    expect(ShareStore.login_status).toBe(false)
  })


  it('call login', async () => {
    const loginMock = jest.fn()

    jest.spyOn(composition, 'composition').mockReturnValue({
      state,
      _init,
      login: loginMock
    })

    const wrapper = mount(LoginIndex, {
      localVue,
      vuetify,
    })

    wrapper.find('[test-submit]').trigger('click')

    expect(loginMock).toHaveBeenCalled()
  })


  it('redirect to root page on successful login', async () => {
    const access_token = 'sign_in_access_token'
    const client       = 'sign_in_client'
    const uid          = 'sign_in_uid'

    mockAxios.onPost('/api/auth/sign_in').reply(200, {
      status: 'sucess',
      user: {
        avatar:   'http://localhost:8080/rails/active_storage/blobs/hoge.png',
        email:    'example1@example.com',
        login_id: 'example1',
        name:     'example1',
      },
    }, {
      'access-token': access_token,
      'client':       client,
      'uid':          uid,
    })

    const wrapper = shallowMount(LoginIndex, {
      localVue,
      vuetify,
      router,
    })

    await login()

    // パスのテストはできるが要素は変化しない => 要調査
    // TODO: ホームディレクトリを / 以外に変更してテストする
    expect(wrapper.vm.$route.path).toBe('/')
  })


  // NOTE: composition でテストしているため必要かどうか要検討
  it('can sign in', async () => {
    const access_token = 'sign_in_access_token'
    const client       = 'sign_in_client'
    const uid          = 'sign_in_uid'

    mockAxios.onPost('/api/auth/sign_in').reply(200, {
      status: 'sucess',
      user: {
        avatar:   'http://localhost:8080/rails/active_storage/blobs/hoge.png',
        email:    'example1@example.com',
        login_id: 'example1',
        name:     'example1',
      },
    }, {
      'access-token': access_token,
      'client':       client,
      'uid':          uid,
    })

    const wrapper = shallowMount(LoginIndex, {
      localVue,
      vuetify,
      router,
    })

    await login()

    expect(localStorage.getItem('access-token')).toBe(access_token)
    expect(localStorage.getItem('client')).toBe(client)
    expect(localStorage.getItem('uid')).toBe(uid)
    expect(ShareStore.is_logined).toBe(true)
    expect(ShareStore.login_status).toBe(true)
    expect(ToastrStore.toastrs.length).toBe(0)
  })
})
