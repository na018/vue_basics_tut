import {mount} from 'avoriaz'
import KanBanBoard from '@/components/KanBanBoard'

import Vue from 'vue'
Vue.config.ignoredElements = [
  'v-toolbar', 'v-toolbar-side-icon', 'v-toolbar-title', 'v-spacer', 'v-btn', 'v-list-tile-title', 'v-icon', 'v-list-tile-action', 'v-list-tile', 'v-list', 'v-navigation-drawer', 'v-list-tile-content'
];

describe('KanBanBoard.vue', () => {
  it("KanBanBoard component exists with name 'm-kan-ban-board' exists'", () => {
    const wrapper = mount(KanBanBoard)
    expect(wrapper.name()).to.equal('m-kan-ban-board')
  })

})
