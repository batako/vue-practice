import {
    Component,
    Vue,
  } from 'vue-property-decorator'
import { ShareModule } from "@/store/modules/share"
import axios from 'axios'
import router from '../../router/index'

import { ApiSubmitParams, ApiSettings } from '../../types/api'

@Component
export default class API extends Vue {
  $_api_params = {} as ApiSubmitParams
  $_api_settings = {} as ApiSettings
  $_api_action_response: any = {}
  $_api_response_status: 'success' | 'failure' | '' = ''


  $_api_initialize(params: ApiSubmitParams) {
    this.$_api_params = params
    this.$_api_settings = Object.assign({},
      params.settings, {
        headers: Object.assign({
            Accept: 'application/json',
          },
          (params.settings || {}).headers,
          {
            'access-token': this.$ls.get('access-token'),
            client:         this.$ls.get('client'),
            uid:            this.$ls.get('uid'),
          }
        )
      },
    )

    if (!params.skip_loading) ShareModule.start_process()

    if (process.env.URL_BASE && params.settings?.url) {
      params.settings.url = process.env.URL_BASE + params.settings.url
    }
  }


  $api(params: ApiSubmitParams) {
    this.$_api_initialize(params)

    return axios(this.$_api_settings)
      .then((response: any) => {
        this.$_api_sucess(response)
      }).catch((error: any) => {
        this.$_api_error(error)
      }).finally(() => {
        this.$_api_finally()
      })
  }


  $_api_sucess(response: any) {
    this.$_api_action_response = response
    this.$_api_response_status = 'success'
  }


  $_api_error(error: any) {
    this.$_api_action_response = error.response
    this.$_api_response_status = 'failure'

    if (error.response.status == 401) router.push('/Login')
  }


  $_api_finally() {
    // レスポンスがファイルの場合
    if (
      this.$_api_action_response.request.responseType == 'blob' &&
      this.$_api_action_response.headers['content-type'].match(/application\/json/)
    ) {
      const reader = new FileReader()

      reader.onload = () => {
        const response_data = JSON.parse(reader.result as string)

        if (
          response_data.message &&
          !(this.$_api_action_response.status == 200 && this.$_api_params.skip_success_toastr)
        ) {
          switch (response_data.status) {
            case 'success':
              ShareModule.set_toastr({
                type:    'success',
                message: response_data.message,
                force:   false,
              })
              break
            case 'caution':
            case 'failure':
              ShareModule.set_toastr({
                type:    'danger',
                message: response_data.message,
                force:   false,
              })
              break
            default:
              if (this.$_api_response_status == 'failure') {
                if (response_data.error_detail) {
                  ShareModule.set_toastr({
                    type:    'danger',
                    message: response_data.error_detail,
                    force:   true,
                  })
                } else if (response_data.message) {
                  ShareModule.set_toastr({
                    type:    'danger',
                    message: response_data.message,
                    force:   true,
                  })
                  console.error(`[${self.$api.$_utils_upper_case(self.$api.$_api_settings.method)}]${self.$api.$_api_settings.url}`, response_data.error_detail)
                }
              }
              break
          }
        }
      }
      reader.readAsText(this.$_api_action_response.data)

    // レスポンスにメッセージを含みトーストを表示させる必要がある場合
    } else if (
      (this.$_api_action_response.data.message || this.$_api_action_response.data.error_detail) &&
      !(this.$_api_action_response.status == 200 && this.$_api_params.skip_success_toastr)
    ) {
      switch (this.$_api_action_response.data.status) {
        case 'success':
          ShareModule.set_toastr({
            type: 'success',
            message: this.$_api_action_response.data.message,
            force: false,
          })
          break
        case 'caution':
        case 'failure':
          ShareModule.set_toastr({
            type:    'danger',
            message: this.$_api_action_response.data.error_detail || this.$_api_action_response.data.message,
            force:   false,
          })
          break
        default:
          if (this.$_api_response_status == 'failure') {
            ShareModule.set_toastr({
              type:    'danger',
              message: this.$_api_action_response.data.error_detail || this.$_api_action_response.data.message,
              force:   true,
            })
          }
          break
      }

    // エラーの場合
    } else if (this.$_api_action_response.status != 200) {
      ShareModule.set_toastr({
        type:    'danger',
        message: this.$_api_get_respose_message(),
        force:   true,
      })
    }

    if (!this.$_api_params.skip_loading) ShareModule.stop_process()

    if ( Object.keys(this.$_api_params).indexOf(this.$_api_response_status) > 0 ) {
      switch (this.$_api_response_status) {
        case 'success':
          this.$_api_params['success']()
          break;
        case 'failure':
          this.$_api_params['failure']()
          break;
      }
    }
  }


  $_api_get_respose_message(): string {
    let value = ''

    if (this.$_api_action_response.data) {
      switch (typeof this.$_api_action_response.data) {
        case 'object':
          if (this.$_api_action_response.data.errors.length > 0) {
            const errors: Array<string> = this.$_api_action_response.data.errors
            value = errors.map(error => '<div>' + error + '</div>').join()
          }
          break;
        case 'string':
          this.$_api_action_response.data
          break;
      }
    }

    return value
  }
}
