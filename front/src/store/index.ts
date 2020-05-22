import Vue from 'vue'
import Vuex from 'vuex'
import Storage from 'vue-ls'
import mutations from './mutations'

Vue.use(Vuex)
Vue.use(Storage, { storage: 'local' })

export default new Vuex.Store({
  state: {
    is_processing: false,
    toastrs: [
      // {
      //   type   : 'success',           // success or danger or warning
      //   message: 'message',
      //   force  : false,               // 他のメッセージを消すか
      //   key    : 'YYYYMMDDHHmmssSSS', // 自動設定
      // }
    ],
  },
  mutations,
  actions: {
  },
  modules: {
  }
})
