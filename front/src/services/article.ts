import { API } from '@/services/api'

export const ArticleService = {
  all() {
    return new Promise((resolve, reject) => {
      API.submit({
        settings: {
          method: 'get',
          url:    '/api/articles',
        },
      }).then((response: any) => {
        resolve(response)
      }).catch((error: any) => {
        reject(error)
      })
    })
  },

  post(file: any) {
    const params = new FormData()
    params.append('image', file)

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

  like(article_id: number) {
    return new Promise((resolve, reject) => {
      API.submit({
        settings: {
          method: 'post',
          url:   `/api/articles/${article_id}/like`,
        },
      }).then((response: any) => {
        resolve(response)
      }).catch((error: any) => {
        reject(error)
      })
    })
  },

  dislike(article_id: number) {
    return new Promise((resolve, reject) => {
      API.submit({
        settings: {
          method: 'delete',
          url:   `/api/articles/${article_id}/dislike`,
        },
      }).then((response: any) => {
        resolve(response)
      }).catch((error: any) => {
        reject(error)
      })
    })
  },
}
