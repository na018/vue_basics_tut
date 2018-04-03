import Vue from 'vue'
import Router from 'vue-router'
import KanBanBoard from '@/components/pages/KanBanBoard'
import UserAdmin from '@/components/pages/UserAdmin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'KanBanBoard',
      component: KanBanBoard
    },
    {
      path: '/board',
      name: 'KanBanBoard',
      component: KanBanBoard
    },
    {
      path: '/users',
      name: 'UserAdmin',
      component: UserAdmin
    }
  ],
  mode: 'history'
})
