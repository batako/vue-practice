// import Vue from 'vue/dist/vue.esm.js'

const mutations = {
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
  set: (state, params) => {
    let scope = state
    const keys = (params.name || '').split('.')
    const scope_key = keys.pop()

    if (keys.length > 0) {
      for (const key of keys) {
        scope = scope[key]
      }
    }

    scope[scope_key] = params.value
  },
  // setToastr: (state, toastr) => {
  //   toastr.key = moment().format('YYYYMMDDHHmmssSSS')

  //   if (toastr.force) state.toastrs = [toastr]
  //   else state.toastrs.push(toastr)
  // },
  // ブラウザリロード対応 sessionStrageからstore情報を復元
  // initializeStore (state) {
  //   if (Vue.ls.get('token')) {
  //     Object.assign(state.auth, Vue.ls.get('authState'))
  //   }
  // },
}

export default mutations
