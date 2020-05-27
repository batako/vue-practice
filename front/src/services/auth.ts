import Vue from 'vue'

import { API } from '../shared/api'
import { ShareModule } from '../store/modules/share'

export default {
  login(email: string, password: string) {
    return API.submit({
      settings: {
        method: 'post',
        url   : '/api/auth/sign_in',
        data: {
          email:    email,
          password: password,
        },
      },
      success: (response: any) => {
        Vue.ls.set('access-token', response.headers['access-token'])
        Vue.ls.set('client', response.headers.client)
        Vue.ls.set('uid', response.headers.uid)
        ShareModule.setLoginStatus()
      },
    })
  },


  logout() {
    Vue.ls.clear()
    ShareModule.clearLoginStatus()
  }
}
