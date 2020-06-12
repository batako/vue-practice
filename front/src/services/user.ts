import { API } from '@/shared/api'

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
        resolve(response)
      }).catch((error: any) => {
        reject(error)
      })
    })
  },
}
