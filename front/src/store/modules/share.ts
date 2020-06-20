import {
    getModule,
    Module,
    Mutation,
    VuexModule,
  } from 'vuex-module-decorators'

import store from '@/store/index'

interface User {
  login_id: string;
  name:     string;
  email:    string;
  avatar:   string;
}
interface UserParams {
  login_id?: string;
  name?:     string;
  email?:    string;
  avatar?:   string;
}
export interface ShareState {
  is_processing: boolean;
  is_logined:    boolean;
  current_user:  User;
}

@Module({
  dynamic:    true,
  store:      store,
  name:       'share',
  namespaced: true,
})
class Share extends VuexModule implements ShareState {
  is_processing = false
  is_logined    = false
  current_user  = {} as User

  @Mutation
  public startProcess() {
    this.is_processing = true
  }

  @Mutation
  public stopProcess() {
    this.is_processing = false
  }

  @Mutation
  public login() {
    this.is_logined = !!(localStorage.getItem('access-token') && localStorage.getItem('client') && localStorage.getItem('uid'))
    this.current_user = JSON.parse(localStorage.getItem('user') as string)
  }

  @Mutation
  public logout() {
    this.is_logined = false
  }

  @Mutation
  public setUser(user_params: UserParams) {
    const keys = Object.keys(user_params)

    if (keys.indexOf('login_id') > -1) this.current_user.login_id = user_params.login_id || ''
    if (keys.indexOf('name') > -1)     this.current_user.name     = user_params.name     || ''
    if (keys.indexOf('email') > -1)    this.current_user.email    = user_params.email    || ''
    if (keys.indexOf('avatar') > -1)   this.current_user.avatar   = user_params.avatar   || ''

    localStorage.setItem('user', JSON.stringify(this.current_user))
  }

  public get login_status(): boolean {
    // vue-ls は監視対象外となるため is_logined を絡める
    return this.is_logined || !!(
      localStorage.getItem('access-token') && localStorage.getItem('client') && localStorage.getItem('uid')
    )
  }
}

export const ShareStore = getModule(Share)
