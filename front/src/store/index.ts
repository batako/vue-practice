import Vue from 'vue'
import Vuex from 'vuex'

import { ShareState } from './modules/share'
import { ToastrState } from './modules/toastr'

Vue.use(Vuex)

export interface RootState {
  share:  ShareState;
  toastr: ToastrState;
}

export default new Vuex.Store<RootState>({})
