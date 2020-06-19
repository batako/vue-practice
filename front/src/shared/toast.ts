// import app from '@/main'
// import { ShareStore } from '@/store/modules/share'
import { ToastStore } from '@/store/modules/toast'

export interface Params {
  type:    'success' | 'danger';
  message: string;
  force?:  boolean;
}

export const Toast = new class {
  public show(params: Params) {
    switch (params.type) {
      case 'success':
        // vue-toasted
        // this.success(params.message, params.force)
        // ShareStore.setToastr({
        //   type:    'success',
        //   message: params.message,
        //   force:   params.force || false,
        // })

        // vuetify-toast-snackbar
        ToastStore.set({
          type:    'success',
          message: params.message,
          force:   params.force || false,
        })
        break

      case 'danger':
        // vue-toasted
        // this.error(params.message, params.force)
        // ShareStore.setToastr({
        //   type:    'danger',
        //   message: params.message,
        //   force:   params.force || false,
        // })

        // vuetify-toast-snackbar
        ToastStore.set({
          type:    'error',
          message: params.message,
          force:   params.force || false,
        })
        break
    }
  }


  // vue-toasted
  // private success(message: string, singleton?: boolean) {
  //   const options = {
  //     duration: 3000,
  //     action: {
  //       text : '[×]',
  //       onClick : (_: any, toastObject: any) => {
  //         toastObject.goAway(0)
  //       }
  //     },
  //     singleton: singleton,
  //   }

  //   app.$toasted.success(message, options)
  // }


  // vue-toasted
  // private error(message: string, singleton?: boolean) {
  //   const options = {
  //     action: {
  //       text : '[×]',
  //       onClick : (_: any, toastObject: any) => {
  //         toastObject.goAway(0)
  //       }
  //     },
  //   }
  //   app.$toasted.error(message, options)
  // }

  // vue-toasted
  // public clear() {
  //   app.$toasted.clear()
  // }
}
