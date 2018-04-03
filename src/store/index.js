import Vue from 'vue'
import Vuex from 'vuex'

import createLogger from './../plugins/logger'

import kanbanCards from './modules/kanbancards'
import users from './modules/users'


Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    kanbanCards,
    users
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
