import Vue from 'vue'
import {mount} from 'avoriaz'
import sinon from 'sinon'
import {expect} from 'chai'
import Vuex from 'vuex'
import 'babel-polyfill'
import module from '../../../src/store/modules/users'
import Nav from '@/components/nav/Nav'
import topNav from '@/components/nav/components/topNav'
import leftNavLinks from '@/components/nav/components/leftNavLinks'
import leftNav from '@/components/nav/components/leftNav'
import rightNav from '@/components/nav/components/rightNav'
Vue.use(Vuex)

Vue.config.ignoredElements = [
  'v-toolbar', 'v-toolbar-side-icon', 'v-toolbar-title', 'v-spacer', 'v-btn', 'v-list-tile-title', 'v-icon', 'v-list-tile-action', 'v-list-tile', 'v-list', 'v-navigation-drawer', 'v-list-tile-content', 'v-card', 'v-layout', 'v-flex', 'v-card-text', 'v-card-title', 'v-container', 'v-text-field', 'v-list-tile-avatar>'
];


describe('Nav.vue', () => {
  it("Navigation component exists with name 'm-nav'exists'", () => {
    const wrapper = mount(Nav)
    expect(wrapper.name()).to.equal('m-nav')
  })
  it('Navigation contains topNav component', () => {
    const wrapper = mount(Nav)
    expect(wrapper.contains(topNav)).to.equal(true)
  })
  it('Navigation contains leftNav component', () => {
    const wrapper = mount(Nav)
    expect(wrapper.contains(leftNav)).to.equal(true)
  })

  it('Navigation rightNav component', () => {
    const wrapper = mount(Nav)
    expect(wrapper.contains(rightNav)).to.equal(true)
  })
})

describe('topNav.vue', () => {
  const wrapper = mount(topNav, {
    propsData: {
      clipped: false,
      miniVariant: true,
      drawer: true,
      title: 'test title',
    },
  })
  it('m-top-nav exists', () => {
    expect(wrapper.name()).to.equal('m-top-nav')
  })
  it('<m-top-nav> is a <v-toolbar>', () => {
    expect(wrapper.is('v-toolbar')).to.equal(true)
  })
})
describe('leftNav.vue', () => {
  let state
  let store
  let activeUser = {
    firstName: 'Hero',
    lastName: 'Hunter',
    img: '/static/img/avatars/hero.png',
    userName: 'heroHunter',
  }
/*  beforeEach(() => {
    state = {
      module: {
        activeUser
      }
    }
    store = new Vuex.Store({
      state,
      getters: module.getters
    })
  })*/
  const wrapper = mount(leftNav, {
/*    store,*/
    propsData: {
      clipped: true,
      miniVariant: true,
      drawer: true,
    }
  })

  it('m-left-nav exists', () => {
    expect(wrapper.name()).to.equal('m-left-nav')
  })
  it('<m-left-nav> is a <v-navigation-drawer>', () => {
    const wrapper = mount(leftNav, {
     /* store,*/
      propsData: {
        clipped: true,
        miniVariant: true,
        drawer: true,
      }
    })
    expect(wrapper.name()).to.equal('m-left-nav')
  })
})
describe('rightNav.vue', () => {
  const wrapper = mount(rightNav, {
    propsData: {
      rightDrawer: false,
      right: true,
    },
  })
  it('m-right-nav exists', () => {
    expect(wrapper.name()).to.equal('m-right-nav')
  })
  it('<m-right-nav> is a <v-navigation-drawer>', () => {
    expect(wrapper.is('v-navigation-drawer')).to.equal(true)
  })
})
describe('leftNavLinks.vue', () => {
    const wrapper = mount(leftNavLinks)
    it('m-right-nav exists', () => {
        expect(wrapper.name()).to.equal('m-left-nav-links')
    })
    it('<m-left-nav-links> is a <v-list>', () => {
        expect(wrapper.is('v-list')).to.equal(true)
    })
})

