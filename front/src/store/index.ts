import Vue from 'vue'
import Vuex from 'vuex'

import { ShareState } from './modules/share'

Vue.use(Vuex)

export interface RootState {
  share: ShareState;
}

export default new Vuex.Store<RootState>({})
