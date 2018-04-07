import Vue from 'vue'
import Router from 'vue-router'
import UserAdmin from '@/components/pages/UserAdmin'
import KanBanBoard from '@/components/pages/KanBanBoard'

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
