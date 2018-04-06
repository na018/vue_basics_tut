import {mount} from 'avoriaz'
import KanBanBoardColumn from '@/components/kanBanComponents/KanBanColumn'

import Vue from 'vue'
import {expect} from "chai"
Vue.config.ignoredElements = [
  'v-toolbar', 'v-toolbar-side-icon', 'v-toolbar-title', 'v-spacer', 'v-btn', 'v-list-tile-title', 'v-icon', 'v-list-tile-action', 'v-list-tile', 'v-list', 'v-navigation-drawer', 'v-list-tile-content'
];

describe('KanBanBoardColumn.vue', () => {
  it("KanBanBoardColumn component exists with name 'm-kan-ban-column' exists'", () => {
    const wrapper = mount(KanBanBoardColumn)
    expect(wrapper.name()).to.equal('m-kan-ban-column')
  })
})
