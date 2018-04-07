import {mount} from 'avoriaz'
import KanBanBoard from '@/components/pages/KanBanBoard'
import KanBanBoardColumn from '@/components/kanBanComponents/KanBanColumn'

import Vue from 'vue'
import {expect} from "chai"
Vue.config.ignoredElements = [
    'v-toolbar', 'v-toolbar-side-icon', 'v-toolbar-title', 'v-spacer', 'v-btn', 'v-list-tile-title', 'v-icon', 'v-list-tile-action', 'v-list-tile', 'v-list', 'v-navigation-drawer', 'v-list-tile-content', 'v-card', 'v-layout', 'v-flex', 'v-card-text', 'v-card-title', 'v-container', 'v-text-field', 'v-list-tile-avatar>'
];

describe('KanBanBoard.vue', () => {
  it("KanBanBoard component exists with name 'm-kan-ban-board' exists'", () => {
    const wrapper = mount(KanBanBoard)
    expect(wrapper.name()).to.equal('m-kan-ban-board')
  })
/*  it('KanBan board contains kanban column component', () => {
    const wrapper = mount(KanBanBoardColumn)
    expect(wrapper.contains(KanBanBoardColumn)).to.equal(true)
  })*/
})
