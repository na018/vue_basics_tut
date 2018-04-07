import {mount} from 'avoriaz'
import UserAdmin from '@/components/pages/UserAdmin'

import Vue from 'vue'
import {expect} from "chai"
Vue.config.ignoredElements = [
    'v-toolbar', 'v-toolbar-side-icon', 'v-toolbar-title', 'v-spacer', 'v-btn', 'v-list-tile-title', 'v-icon', 'v-list-tile-action', 'v-list-tile', 'v-list', 'v-navigation-drawer', 'v-list-tile-content', 'v-card', 'v-layout', 'v-flex', 'v-card-text', 'v-card-title', 'v-container', 'v-text-field', 'v-list-tile-avatar>'
];

describe('UserAdmin.vue', () => {
  it("UserAdmin component with name 'm-user-admin' exists'", () => {
    const wrapper = mount(UserAdmin)
    expect(wrapper.name()).to.equal('m-user-admin')
  })
})
