import '@/plugins'

import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { expect } from 'chai'
import Vue from 'vue'

import { ShareModule } from '@/store/modules/share'
import LoginIndex from '@/views/login/index.vue'
import { mount } from '@vue/test-utils'

const init_access_token = 'init_access_token'
const init_client       = 'init_client'
const init_uid          = 'init_uid'

describe('@/views/login/login.vue', () => {
  let mockAxios: MockAdapter

  beforeEach(() => {
    mockAxios = new MockAdapter(axios)

    Vue.ls.set('access-token', init_access_token)
    Vue.ls.set('client',       init_client)
    Vue.ls.set('uid',          init_uid)
    ShareModule.login()
  });


  it('sign out', () => {
    expect(Vue.ls.get('access-token')).to.equal(init_access_token)
    expect(Vue.ls.get('client')).to.equal(init_client)
    expect(Vue.ls.get('uid')).to.equal(init_uid)
    expect(ShareModule.is_logined).to.be.true

    mount(LoginIndex)

    expect(Vue.ls.get('access-token')).to.be.null
    expect(Vue.ls.get('client')).to.be.null
    expect(Vue.ls.get('uid')).to.be.null
    expect(ShareModule.is_logined).to.be.false
  })


  it('has a login form', () => {
    const wrapper = mount(LoginIndex)
    expect(wrapper.find('form').exists()).to.be.true
  })


  it('has a email input', () => {
    const wrapper = mount(LoginIndex)
    expect(wrapper.find('input[type=email]').exists()).to.be.true
  })


  it('has a password input', () => {
    const wrapper = mount(LoginIndex)
    expect(wrapper.find('input[type=password]').exists()).to.be.true
  })


  it('has a submit button', () => {
    const wrapper = mount(LoginIndex)
    expect(wrapper.find('input[type=submit]').exists()).to.be.true
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
      expect(Vue.ls.get('access-token')).to.equal(access_token)
      expect(Vue.ls.get('client')).to.equal(client)
      expect(Vue.ls.get('uid')).to.equal(uid)
      expect(ShareModule.is_logined).to.be.true
    })
  })
})
