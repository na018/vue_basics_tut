import {mount} from 'avoriaz'
import KanBanNewInlineTask from '@/components/kanBanComponents/KanBanNewInlineTask'

import Vue from 'vue'
import {expect} from "chai"
Vue.config.ignoredElements = [
  'v-toolbar', 'v-toolbar-side-icon', 'v-toolbar-title', 'v-spacer', 'v-btn', 'v-list-tile-title', 'v-icon', 'v-list-tile-action', 'v-list-tile', 'v-list', 'v-navigation-drawer', 'v-list-tile-content'
];

describe('KanBanNewInlineTask.vue', () => {
  const wrapper = mount(KanBanNewInlineTask)
  it("KanBanNewInlineTask component exists with name 'm-kan-ban-new-inline-task' exists'", () => {
    expect(wrapper.name()).to.equal('m-kan-ban-new-inline-task')
  })
})
