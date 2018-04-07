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
    },
      // todo |KB-7| implement routes to '/' '/board' '/users' to UserAdmin page & KanBanBoard page
  ],
  mode: 'history'
})
