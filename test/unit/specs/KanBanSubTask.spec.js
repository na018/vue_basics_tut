import {mount} from 'avoriaz'
import KanBanSubTask from '@/components/kanBanComponents/KanBanSubTask'

import Vue from 'vue'
import {expect} from "chai"
Vue.config.ignoredElements = [
  'v-toolbar', 'v-toolbar-side-icon', 'v-toolbar-title', 'v-spacer', 'v-btn', 'v-list-tile-title', 'v-icon', 'v-list-tile-action', 'v-list-tile', 'v-list', 'v-navigation-drawer', 'v-list-tile-content'
];

describe('KanBanSubTask.vue', () => {
  const wrapper = mount(KanBanSubTask, {
    propsData: {
      color:"light-blue lighten-2",
      itemId:2,
      name:"implement",
      subTask: {
        name: "developer",
        responsible: "Colin Conjurer",
        status: "",
      }
    }
  })
  it("KanBanSubTask component with name 'm-sub-task' exists'", () => {
    expect(wrapper.name()).to.equal('m-sub-task')
  })

})
