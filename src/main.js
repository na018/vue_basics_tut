import Vue from 'vue'
import Helper from './plugins/helperFunctions'
import store from './store'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'  // REST Vue.http.post
import {
  Vuetify,
  VApp,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VIcon,
  VGrid,
  VToolbar,
  transitions,
  VCard,
  VCheckbox,
  VSelect,
  VTextField,
  VDivider,
  VAvatar
} from 'vuetify'
import '../node_modules/vuetify/src/stylus/app.styl'
import draggable from 'vuedraggable'

Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    transitions,
    draggable,
    VCard,
    VCheckbox,
    VSelect,
    VTextField,
    VDivider,
    VAvatar
  }
})
Vue.use(VueResource)
Vue.use(Helper)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
