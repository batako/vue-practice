import { expect } from 'chai'
import { mount } from '@vue/test-utils'
import LoginIndex from '@/views/login/index.vue'
import '@/plugins'

describe('@/views/login/login.vue', () => {
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
})
