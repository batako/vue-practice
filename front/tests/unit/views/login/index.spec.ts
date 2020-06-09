import plugins from '@/plugins'

import * as composition from '@/views/login/index.composition'
import LoginIndex from '@/views/login/index.vue'
import {
    createLocalVue,
    shallowMount,
  } from '@vue/test-utils'

const localVue = createLocalVue()
localVue.use(plugins)

describe('@/views/login/login.vue', () => {
  it('can sign out', () => {
    const _init = jest.fn()
    const {
      state,
      login
    } = composition.composition()

    jest.spyOn(composition, 'composition').mockReturnValue({
      state,
      login,
      _init
    })

    shallowMount(LoginIndex, {
      localVue,
    })

    expect(_init).toHaveBeenCalled()
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


  it('can sign in', () => {
    const login = jest.fn()
    const {
      state,
      _init,
    } = composition.composition()

    jest.spyOn(composition, 'composition').mockReturnValue({
      state,
      login,
      _init
    })

    const wrapper = shallowMount(LoginIndex, {
      localVue,
    })

    wrapper.find('form').trigger('submit.prevent')
    expect(login).toHaveBeenCalled()
  })
})
