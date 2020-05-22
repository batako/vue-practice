// import { mapState } from 'vuex'
import axios from 'axios'
import router from '../../router/index'

export default {
  // created () {
  //   let {title} = this.$options

  //   if (title) {
  //     title = typeof title === 'function' ? title.call(this) : title

  //     this.$data.$_utils_title = title
  //   }
  // },
  methods: {
    $_utils_axios (params) {
      // params = {
      //   settings: {
      //     method : '',
      //     url    : '',
      //     data   : {}, // BODYに含めるパラメータ
      //     params : {}, // URLに含めるパラメータ
      //   },
      //   skip_loading       : false,
      //   skip_success_toastr: false,
      //   success: function(){},
      //   failure: function(){},
      // }
      const self = this
      let action_response = {}
      let response_status = null // success or failure
      const settings = Object.assign({},
        params.settings, {
          headers: Object.assign({
              Accept: 'application/json',
              // Token: this.$ls.get('token'),
            },
            (params.settings || {}).headers,
            {
              'access-token': self.$ls.get('access-token'),
              client:         self.$ls.get('client'),
              uid:            self.$ls.get('uid'),
            }
          )
        },
      )

      if (!params.skip_loading) this.$store.commit('set', {
        name: 'is_processing',
        value: true,
      })
      if (process.env.URL_BASE) {
        settings.url = process.env.URL_BASE + settings.url
      }

      return axios(settings).then(function (response) {
        action_response = response
        response_status = 'success'

      }).catch((error) => {
        action_response = error.response
        response_status = 'failure'

        if (error.response.status == 401) router.push('/Login')

      }).finally(() => {
        if (
          action_response.request.responseType == 'blob' &&
          action_response.headers['content-type'].match(/application\/json/)
        ) {
          const reader = new FileReader()

          reader.onload = () => {
            const response_data = JSON.parse(reader.result)

            if (
              response_data.message &&
              !(action_response.status == 200 && params.skip_success_toastr)
            ) {
              switch (response_data.status) {
                case 'success':
                  self.$store.commit('setToastr', {
                    type: 'success',
                    message: response_data.message,
                    force: false,
                  })
                  break
                case 'caution':
                case 'failure':
                  self.$store.commit('setToastr', {
                    type: 'failure',
                    message: response_data.message,
                    force: false,
                  })
                  break
                default:
                  if (response_status == 'failure') {
                    if (response_data.error_detail) {
                      self.$store.commit('setToastr', {
                        type: 'failure',
                        message: response_data.error_detail,
                        force: true,
                      })
                    } else if (response_data.message) {
                      self.$store.commit('setToastr', {
                        type: 'failure',
                        message: response_data.message,
                        force: true,
                      })
                      console.error(`[${self.$_utils_upperCase(settings.method)}]${settings.url}`, response_data.error_detail)
                    }
                  }
                  break
              }
            }
          }
          reader.readAsText(action_response.data)

        } else if (
          (action_response.data.message || action_response.data.error_detail) &&
          !(action_response.status == 200 && params.skip_success_toastr)
        ) {
          switch (action_response.data.status) {
            case 'success':
              self.$store.commit('setToastr', {
                type: 'success',
                message: action_response.data.message,
                force: false,
              })
              break
            case 'caution':
            case 'failure':
              self.$store.commit('setToastr', {
                type: 'failure',
                message: action_response.data.error_detail || action_response.data.message,
                force: false,
              })
              break
            default:
              if (response_status == 'failure') {
                self.$store.commit('setToastr', {
                  type: 'failure',
                  message: action_response.data.error_detail || action_response.data.message,
                  force: true,
                })
              }
              break
          }
        }

        if (!params.skip_loading) self.$store.commit('set', {
          name: 'is_processing',
          value: false,
        })

        const after_action = params[response_status]
        if (after_action) after_action(action_response)
      })
    },
  },
  // watch: {
  //   "$data.$_utils_title" (title = '', _) {
  //     if (!title) return

  //     document.title = title
  //   },
  // },
}
