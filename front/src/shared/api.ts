import axios from 'axios'

import { Toast } from '@/shared/toast'
import { ShareModule } from '@/store/modules/share'

import router from '../router/index'
import { ApiSettings, ApiSubmitParams } from '../types/api'
import { upperCase } from './util'

export const API = new class {
  private submit_params = {} as ApiSubmitParams
  private settings = {} as ApiSettings
  private action_response: any = {}
  private response_status: 'success' | 'failure' | '' = ''


  public submit(params: ApiSubmitParams) {
    this.initialize(params)

    return new Promise((resolve, reject) => {
        axios(this.settings)
          .then((response) => {
            this.sucess(response)
            resolve(response)
          }).catch((error) => {
            this.error(error)
            reject(error)
          }).finally(() => {
            this.finally()
          })
    })
  }


  private initialize(params: ApiSubmitParams) {
    this.submit_params = params
    this.settings = Object.assign({},
      params.settings, {
        headers: Object.assign({
            Accept: 'application/json',
          },
          (params.settings || {}).headers,
          {
            'access-token': localStorage.getItem('access-token'),
            client:         localStorage.getItem('client'),
            uid:            localStorage.getItem('uid'),
          }
        )
      },
    )

    if (!params.skip_loading) ShareModule.startProcess()

    if (process.env.URL_BASE && params.settings.url) {
      params.settings.url = process.env.URL_BASE + params.settings.url
    }
  }


  private sucess(response: any) {
    this.action_response = response
    this.response_status = 'success'
  }


  private error(error: any) {
    this.action_response = error.response
    this.response_status = 'failure'

    if (error.response.status == 401) router.push('/Login')
  }


  private finally() {
    // レスポンスがファイルの場合
    if (
      this.action_response.request.responseType == 'blob' &&
      this.action_response.headers['content-type'].match(/application\/json/)
    ) {
      const reader = new FileReader()

      reader.onload = () => {
        const response_data = JSON.parse(reader.result as string)

        if (
          response_data.message &&
          !(this.action_response.status == 200 && this.submit_params.skip_success_toastr)
        ) {
          switch (response_data.status) {
            case 'success':
              Toast.show({
                type:    'success',
                message: response_data.message,
                force:   false,
              })
              break
            case 'caution':
            case 'failure':
              Toast.show({
                type:    'danger',
                message: response_data.message,
                force:   false,
              })
              break
            default:
              if (this.response_status == 'failure') {
                if (response_data.error_detail) {
                  Toast.show({
                    type:    'danger',
                    message: response_data.error_detail,
                    force:   true,
                  })
                } else if (response_data.message) {
                  Toast.show({
                    type:    'danger',
                    message: response_data.message,
                    force:   true,
                  })
                  console.error(`[${upperCase(this.settings.method)}]${this.settings.url}`, response_data.error_detail)
                }
              }
              break
          }
        }
      }
      reader.readAsText(this.action_response.data)

    // レスポンスにメッセージを含みトーストを表示させる必要がある場合
    } else if (
      (this.action_response.data.message || this.action_response.data.error_detail) &&
      !(this.action_response.status == 200 && this.submit_params.skip_success_toastr)
    ) {
      switch (this.action_response.data.status) {
        case 'success':
          Toast.show({
            type: 'success',
            message: this.action_response.data.message,
            force: false,
          })
          break
        case 'caution':
        case 'failure':
          Toast.show({
            type:    'danger',
            message: this.action_response.data.error_detail || this.action_response.data.message,
            force:   false,
          })
          break
        default:
          if (this.response_status == 'failure') {
            Toast.show({
              type:    'danger',
              message: this.action_response.data.error_detail || this.action_response.data.message,
              force:   true,
            })
          }
          break
      }

    // エラーの場合
    } else if (this.action_response.status != 200) {
      Toast.show({
        type:    'danger',
        message: this.getResposeMessage(),
        force:   false,
      })
    }

    if (!this.submit_params.skip_loading) ShareModule.stopProcess()
  }


  private getResposeMessage(): string {
    let value = ''

    if (this.action_response.data) {
      switch (typeof this.action_response.data) {
        case 'object':
          if (this.action_response.data.errors && this.action_response.data.errors.length > 0) {
            const errors: Array<string> = this.action_response.data.errors
            value = errors.map(error => '<div>' + error + '</div>').join()
          } else if (this.action_response.data.error) {
            value = this.action_response.data.error
          }
          break
        case 'string':
          this.action_response.data
          break
      }
    }

    return value
  }
}
