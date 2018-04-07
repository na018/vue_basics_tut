import {mount} from 'avoriaz'
import UserCard from '@/components/userAdminComponents/UserCard'

import Vue from 'vue'
import {expect} from "chai"
Vue.config.ignoredElements = [
    'v-toolbar', 'v-toolbar-side-icon', 'v-toolbar-title', 'v-spacer', 'v-btn', 'v-list-tile-title', 'v-icon', 'v-list-tile-action', 'v-list-tile', 'v-list', 'v-navigation-drawer', 'v-list-tile-content', 'v-card', 'v-layout', 'v-flex', 'v-card-text', 'v-card-title', 'v-container', 'v-text-field', 'v-list-tile-avatar>'
];

describe('UserCard.vue', () => {
  it("UserCard component with name 'm-user-card' exists'", () => {
    const wrapper = mount(UserCard,{
      propsData: {
        user: {
          firstName: "Hero",
          img: "/static/img/avatars/hero.png",
          lastName: "Hunter",
          userName: "heroHunter",
        },
        userName: 'heroHunter'
      }
    })
    expect(wrapper.name()).to.equal('m-user-card')
  })
})
