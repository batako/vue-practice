import Vue from 'vue'
import { VueConstructor } from 'vue/types/vue'
import {
    getModule,
    Module,
    Mutation,
    VuexModule,
  } from 'vuex-module-decorators'

import store from '@/store/index'
import { Toastr } from '@/types/toastr'

export interface ShareState {
  instance_vue:  VueConstructor;
  is_processing: boolean;
  toastrs:       Toastr[];
  is_logined:    boolean;
}

@Module({
  dynamic:    true,
  store:      store,
  name:       'share',
  namespaced: true,
})
class Share extends VuexModule {
  instance_vue  = Vue
  is_processing = false
  toastrs       = [] as Toastr[]
  is_logined    = false

  @Mutation
  setVue(vue: VueConstructor) {
    this.instance_vue = vue
  }

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

  @Mutation
  login() {
    this.is_logined = !!(localStorage.getItem('access-token') && localStorage.getItem('client') && localStorage.getItem('uid'))
  }

  @Mutation
  logout() {
    this.is_logined = false
  }

  public get vue(): VueConstructor {
    return this.instance_vue
  }

  public get login_status(): boolean {
    // vue-ls は監視対象外となるため is_logined を絡める
    return this.is_logined || !!(
      localStorage.getItem('access-token') && localStorage.getItem('client') && localStorage.getItem('uid')
    )
  }
}

export const ShareModule = getModule(Share)
