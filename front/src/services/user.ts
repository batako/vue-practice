import { API } from '@/shared/api'
import { ShareStore } from '@/store/modules/share'

export const UserService = {
  updateAvatar(file: any) {
    const params = new FormData()
    params.append('avatar', file)

    return new Promise((resolve, reject) => {
      API.submit({
        settings: {
          method: 'put',
          url:    '/api/users/avatar',
          data:   params,
        },
      }).then((response: any) => {
        ShareStore.setUser({avatar: response.data.avatar})
        resolve(response)
      }).catch((error: any) => {
        reject(error)
      })
    })
  },

  update(name: string, email: string) {
    return new Promise((resolve, reject) => {
      API.submit({
        settings: {
          method: 'put',
          url:    '/api/users',
          data:   {
            name:  name,
            email: email,
          },
        },
      }).then((response: any) => {
        ShareStore.setUser({name: name, email: email})
        resolve(response)
      }).catch((error: any) => {
        reject(error)
      })
    })
  }
}
