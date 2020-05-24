import Vue from 'vue'
import Vuex from 'vuex'
import Storage from 'vue-ls'

import { ShareState } from "./modules/share"

Vue.use(Vuex)
Vue.use(Storage, { storage: 'local' })

export interface RootState {
  share: ShareState;
}

export default new Vuex.Store<RootState>({})
