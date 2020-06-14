import app from '@/main'

export const Toast = new class {
  public success(message: string) {
    const options = {
      duration: 3000,
      action: {
        text : '[×]',
        onClick : (_: any, toastObject: any) => {
          toastObject.goAway(0)
        }
      },
    }

    app.$toasted.show(message)
  }

  public error(message: string) {
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
