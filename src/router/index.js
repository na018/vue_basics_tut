import Vue from 'vue'
import Router from 'vue-router'
import UserAdmin from '@/components/pages/UserAdmin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      name: 'UserAdmin',
      component: UserAdmin
    }
  ],
  mode: 'history'
})
