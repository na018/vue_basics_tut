import {mount} from 'avoriaz'
import KanBanCard from '@/components/kanBanComponents/KanBanCard'

import Vue from 'vue'
import {expect} from "chai"
Vue.config.ignoredElements = [
    'v-toolbar', 'v-toolbar-side-icon', 'v-toolbar-title', 'v-spacer', 'v-btn', 'v-list-tile-title', 'v-icon', 'v-list-tile-action', 'v-list-tile', 'v-list', 'v-navigation-drawer', 'v-list-tile-content', 'v-card', 'v-layout', 'v-flex', 'v-card-text', 'v-card-title', 'v-container', 'v-text-field', 'v-list-tile-avatar>'
];

describe('KanBanCard.vue', () => {
  const wrapper = mount(KanBanCard, {
    propsData: {
      boardAbbr:"KB",
      item: {
        creator: "Colin Egglesfield",
        description: "some description",
        fixed: false,
        id: 2,
        order: 1,
        refBoardId: 1,
        status: "todo",
        subTasks: Object,
        taskType: "feature",
        title: "Create Kanban Board Card Items",
      }
    }
  })
  it("KanBanCard component exists with name 'm-kan-ban-card' exists'", () => {
    expect(wrapper.name()).to.equal('m-kan-ban-card')
  })
 /* it('<m-kan-ban-card> is a <v-card>', () => {
    expect(wrapper.is('v-card')).to.equal(true)
  })*/

})
