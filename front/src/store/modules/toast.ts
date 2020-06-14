import {
    getModule,
    Module,
    Mutation,
    VuexModule,
  } from 'vuex-module-decorators'

import store from '@/store/index'

export interface Toastr {
  type:    'success' | 'info' | 'warning' | 'error';
  message: string;
  force?:  boolean;
  key?:    string;  // v-for の key
}

export interface ToastsState {
  toastrs: Toastr[];
}

@Module({
  dynamic:    true,
  store:      store,
  name:       'toast',
  namespaced: true,
})
class Toast extends VuexModule {
  toastrs = [] as Toastr[]

  @Mutation
  set(toastr: Toastr) {
    toastr.key = String(Date.now())

    if (toastr.force) this.toastrs = [toastr]
    else this.toastrs.push(toastr)
  }

  @Mutation
  clear() {
    this.toastrs = []
  }
}

export const ToastStore = getModule(Toast)
