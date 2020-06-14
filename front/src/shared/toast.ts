import app from '@/main'
// import { ShareModule } from '@/store/modules/share'

export interface Params {
  type:    'success' | 'danger';
  message: string;
  force?:  boolean;
}

export const Toast = new class {
  public show(params: Params) {
    switch (params.type) {
      case 'success':
        this.success(params.message, params.force)
        // ShareModule.setToastr({
        //   type:    'success',
        //   message: params.message,
        //   force:   params.force || false,
        // })
        break

      case 'danger':
        this.error(params.message, params.force)
        // ShareModule.setToastr({
        //   type:    'danger',
        //   message: params.message,
        //   force:   params.force || false,
        // })
        break
    }
  }


  private success(message: string, singleton?: boolean) {
    const options = {
      duration: 3000,
      action: {
        text : '[×]',
        onClick : (_: any, toastObject: any) => {
          toastObject.goAway(0)
        }
      },
      singleton: singleton,
    }

    app.$toasted.success(message, options)
  }


  private error(message: string, singleton?: boolean) {
    const options = {
      action: {
        text : '[×]',
        onClick : (_: any, toastObject: any) => {
          toastObject.goAway(0)
        }
      },
    }
    app.$toasted.error(message, options)
  }


  public clear() {
    app.$toasted.clear()
  }
}