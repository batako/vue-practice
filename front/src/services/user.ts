import { API } from '@/shared/api'
import { ShareStore } from '@/store/modules/share'

interface UserParams {
  name?:     string;
  email?:    string;
  avatar?:   any; // File
}

export const UserService = {
  update(user_params: UserParams) {
    const params = new FormData()
    const keys = Object.keys(user_params)

    if (keys.indexOf('name') > -1)  params.append('name', user_params.name || '')
    if (keys.indexOf('email') > -1) params.append('email', user_params.email || '')
    if (user_params.avatar) params.append('avatar', user_params.avatar)

    return new Promise((resolve, reject) => {
      API.submit({
        settings: {
          method: 'put',
          url:    '/api/users',
          data:   params,
        },
      }).then((response: any) => {
        ShareStore.setUser(response.data.user)
        resolve(response)
      }).catch((error: any) => {
        reject(error)
      })
    })
  }
}
