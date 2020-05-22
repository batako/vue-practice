import Vue from 'vue'
import Vuex from 'vuex'
import Storage from 'vue-ls'
import mutations from './mutations'

Vue.use(Vuex)
Vue.use(Storage, { storage: 'local' })

export default new Vuex.Store({
  state: {
  },
  mutations,
  actions: {
  },
  modules: {
  }
})
