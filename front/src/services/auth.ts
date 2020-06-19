import { API } from '../shared/api'
import { ShareStore } from '../store/modules/share'

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
        localStorage.setItem('access-token', response.headers['access-token'] || '')
        localStorage.setItem('client',       response.headers.client || '')
        localStorage.setItem('uid',          response.headers.uid || '')
        localStorage.setItem('user',         JSON.stringify(response.data.user) ||  '')
        ShareStore.login()
        resolve(response)
      }).catch((error: any) => {
        reject(error)
      })
    })
  },


  logout() {
    localStorage.clear()
    ShareStore.logout()
  },
}
