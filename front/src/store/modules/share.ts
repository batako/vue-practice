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
  dynamic:   true,
  store:     store,
  name:      'share',
  namespace: true,
})
class Share extends VuexModule {
  is_processing = false
  toastrs       = Array()

  @Mutation
  set_toastr(toastr: Toastr) {
    toastr.key = String(Date.now())

    if (toastr.force) this.toastrs = [toastr]
    else this.toastrs.push(toastr)
  }

  @Mutation
  clear_toastr() {
    this.toastrs = []
  }

  @Mutation
  start_process() {
    this.is_processing = true
  }

  @Mutation
  stop_process() {
    this.is_processing = false
  }
}

export const ShareModule = getModule(Share)
