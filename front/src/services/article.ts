import { API } from '@/shared/api'

export default {
  post(file: File) {
    const params = new FormData()
    params.append('file', file)

    return new Promise((resolve, reject) => {
      API.submit({
        settings: {
          method: 'post',
          url:    '/api/articles',
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
