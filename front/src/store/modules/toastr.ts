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

export interface ToastrState {
  toastrs: Toastr[];
}

@Module({
  dynamic:    true,
  store:      store,
  name:       'toast',
  namespaced: true,
})
class Toast extends VuexModule implements ToastrState {
  toastrs = [] as Toastr[]

  @Mutation
  public set(toastr: Toastr) {
    toastr.key = String(Date.now())

    if (toastr.force) this.toastrs = [toastr]
    else this.toastrs.push(toastr)
  }

  @Mutation
  public clear() {
    this.toastrs = []
  }
}

export const ToastrStore = getModule(Toast)
