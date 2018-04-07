import {dsUsers} from '../dsConnector/index'

const state = {
  all: [],
  activeUser: {
    firstName: 'Hero',
    lastName: 'Hunter',
    img: '/static/img/avatars/hero.png',
    userName: 'heroHunter',
  },
}

const getters = {
  allUsers: state => state.all,
  activeUser: state => state.activeUser,
}

const actions = {
  getAllUsers({commit}) {
    dsUsers.getUsers(users => {
      commit('receiveUsers', {users})
    })
  },
  setUser({commit}, {obj, prop, val}) {
    commit('setUser', {name})
  },
    /**
     *
     * @param user {Object}
     * @param user.firstName {String}
     * @param user.lastName {String}
     * @param user.userName {String}
     * @param user.img {String} relative image path
     * @param user.id {Number}
     */
  setActiveUser({commit}, {user}) {
    commit('setActiveUser', {user})
  },
}

const mutations = {
  receiveUsers(state, {users}) {
    state.all = users
  },
  setUser(state, {obj, prop, val}) {
    obj[prop] = val
  },
  setActiveUser(state, {user}) {
    state.activeUser = user
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
