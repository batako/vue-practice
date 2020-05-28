import Vue from 'vue'

import { API } from '../shared/api'
import { ShareModule } from '../store/modules/share'

export default {
  login(email: string, password: string) {
    return new Promise((resolve, reject) => {
      API.submit({
        settings: {
          method: 'post',
          url   : '/api/auth/sign_in',
          data: {
            email:    email,
            password: password,
          },
        },
      }).then((response: any) => {
        Vue.ls.set('access-token', response.headers['access-token'])
        Vue.ls.set('client', response.headers.client)
        Vue.ls.set('uid', response.headers.uid)
        ShareModule.login()
        resolve(response)
      }).catch((error: any) => {
        reject(error)
      })
    })
  },


  logout() {
    Vue.ls.clear()
    ShareModule.logout()
  },
}
