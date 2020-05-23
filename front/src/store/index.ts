import Vue from 'vue'
import Vuex from 'vuex'
import Storage from 'vue-ls'

Vue.use(Vuex)
Vue.use(Storage, { storage: 'local' })

interface Toastr {
  type:    'success' | 'danger' | 'warning';
  message: string;
  force:   boolean; // 他のメッセージを消すか
  key:     string;  // 自動設定
}

interface State {
  is_processing: boolean;
  toastrs:       Array<Toastr>;
}

export default new Vuex.Store({
  state: {
    is_processing: false,
    toastrs:       [],
  } as State,
  mutations: {
    // state: {
    //   AAA: {
    //     BBB: {
    //       CCC: null,
    //     }
    //   }
    // }
    // params: {
    //   name : 'AAA.BBB.CCC',
    //   value: 'CCC VALUE',
    // }
    // state.AAA.BBB.CCC = 'CCC VALUE'
    // set: (state, params) => {
    //   let scope = state
    //   const keys = (params.name || '').split('.')
    //   const scope_key = keys.pop()

    //   if (keys.length > 0) {
    //     for (const key of keys) {
    //       scope = scope[key]
    //     }
    //   }

    //   scope[scope_key] = params.value
    // },
    setToastr: (state: State, toastr: Toastr) => {
      toastr.key = String(Date.now())

      if (toastr.force) state.toastrs = [toastr]
      else state.toastrs.push(toastr)
    },
  },
  actions: {
  },
  modules: {
  }
})
