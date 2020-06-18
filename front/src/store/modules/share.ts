import {
    getModule,
    Module,
    Mutation,
    VuexModule,
  } from 'vuex-module-decorators'

import store from '@/store/index'
import { Toastr } from '@/types/toastr'

interface User {
  login_id: string;
  name:     string;
  email:    string;
  avatar:   string;
}
export interface ShareState {
  is_processing: boolean;
  toastrs:       Toastr[];
  is_logined:    boolean;
  current_user:  User;
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
  is_logined    = false
  current_user  = {} as User

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
    this.current_user = JSON.parse(localStorage.getItem('user') as string)
  }

  @Mutation
  logout() {
    this.is_logined = false
  }

  @Mutation
  setAvatar(image_base64: string) {
    this.current_user.avatar = image_base64
    localStorage.setItem('user', JSON.stringify(this.current_user))
  }

  @Mutation
  setUser(name: string, email: string) {
    this.current_user.name  = name
    this.current_user.email = email
    localStorage.setItem('user', JSON.stringify(this.current_user))
  }

  public get login_status(): boolean {
    // vue-ls は監視対象外となるため is_logined を絡める
    return this.is_logined || !!(
      localStorage.getItem('access-token') && localStorage.getItem('client') && localStorage.getItem('uid')
    )
  }
}

export const ShareModule = getModule(Share)
