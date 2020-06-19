import { API } from '@/shared/api'
import { ShareModule } from '@/store/modules/share'

export default {
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
        ShareModule.setUser({avatar: response.data.avatar})
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
        ShareModule.setUser({name: name, email: email})
        resolve(response)
      }).catch((error: any) => {
        reject(error)
      })
    })
  }
}
