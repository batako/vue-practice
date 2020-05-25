import store from '@/store/index'
import {
    getModule,
    Module,
    Mutation,
    VuexModule,
  } from 'vuex-module-decorators'

import { Toastr } from '@/types/toastr'

export interface ShareState {
  is_processing: boolean;
  toastrs:       Toastr[];
}

@Module({
  dynamic:    true,
  store:      store,
  name:       'share',
  namespaced: true,
})
class Share extends VuexModule {
  is_processing = false
  toastrs       = [] as Toastr[]

  @Mutation
  setToastr(toastr: Toastr) {
    toastr.key = String(Date.now())

    if (toastr.force) this.toastrs = [toastr]
    else this.toastrs.push(toastr)
  }

  @Mutation
  clearToastrs() {
    this.toastrs = []
  }

  @Mutation
  startProcess() {
    this.is_processing = true
  }

  @Mutation
  stopProcess() {
    this.is_processing = false
  }
}

export const ShareModule = getModule(Share)
