import {dsCards} from '../dsConnector/index'
import Vue from 'vue'

const state = {
    all: [],
    cardsByStatus: {},
    activeBoard: {
        name: 'kanban',
        abbr: 'KB',
        id: 1,
    },
    status: [],
    /* todo |KB-9| define status type (e.g. status: ['inProgress', 'done'...]) used in 'src/components/kanBanComponents/KanBanColumn.vue' defining the columns, in 'src/components/kanBanComponents/KanBanCard.vue' defining the card view & in 'src/store/modules/kanbancards.js' receiveAllCards() for Ordering the cards by status*/
}

const getters = {
    allCards: state => state.all,
    cardsByStatus: state => state.cardsByStatus,
    activeBoard: state => state.activeBoard,
    // todo |KB-9| implement 'getStatus' getter returning the status possibilities of the kanban column & card status types (e.g. inProgress, done)
}

const actions = {
    getCards({commit}, {id}) {
        dsCards.getKanBanBoard(id, (cards) => {
            commit('receiveCards', {cards})
        })
    },
    setCard({commit}, {obj, prop, val, cb2, id}) {
        commit('setCard', {obj, prop, val, cb2, id})
    },
    putCard({commit}, {card}) {
        dsCards.putCard(card)
    },
    updateStatus({commit}) {
        commit('updateStatus')
    },
    addCard({commit}, {card}) {
        dsCards.addCard(generateCard(card))
        commit('addCard', {card: generateCard(card)})
    },
    deleteCard({commit}, {id}) {
        dsCards.deleteCard(id)
        commit('deleteCard', {id})
    },
}

function getCardId() {
    let highestId = 0
    state.all.filter(item => {
        if (item.id > highestId) { highestId = item.id}
    })
    return (highestId + 1)
}

function getCardOrder() {
    let highestOrderNumber = 0
    state.all.filter(item => {
        if (item.order > highestOrderNumber) { highestOrderNumber = item.order}
    })
    return (highestOrderNumber + 1)
}

const mutations = {
    setCard(state, {obj, prop, val, cb2, id}) {
        Vue.set(obj, prop, val)
        if (cb2 && id) {
            let foundIndex = state.all.findIndex(item => item.id === id)
            cb2(state.all[foundIndex])
        }
    },
    receiveCards(state, {cards}) {
        state.all = cards
        state.status.forEach(item => Vue.set(state.cardsByStatus, item, []))
        state.all.forEach(card => {
            if (!state.cardsByStatus[card.status]) {Vue.set(state.cardsByStatus, card.status, [])}
            state.cardsByStatus[card.status].push(card)
        })
        this.highestId = getCardId()
    },
    updateStatus(state) {
        let items = state.cardsByStatus
        state.status.forEach(status => {
            items[status].forEach(item => {
                if (item.status !== status) item.status = status
            })
        })
    },
    addCard(state, {card}) {

        let highestId = 0
        state.all.filter(item => {
            if (item._id > highestId) { highestId = item._id}
        })
        card._id = highestId + 1
        card.order = state.all.length
        state.all.push(card)
        state.cardsByStatus['todo'].unshift(card)
    },
    deleteCard(state, {id}) {
        let foundIndex = state.all.findIndex(item => item.id === id)
        let foundCard = state.all[foundIndex]
        let cardInStatusObjIndex = state.cardsByStatus[foundCard.status].findIndex(item => item.id === id)

        Vue.delete(state.all, foundIndex)
        Vue.delete(state.cardsByStatus[foundCard.status], cardInStatusObjIndex)
    },
}

function generateCard(card) {
    return {
        id: getCardId(),
        refBoardId: state.activeBoard.id,
        title: card.title,
        description: card.description,
        status: card.status,
        subTasks: {
            implement: {
                responsible: '',
                name: 'developer',
                status: '',
            },
            test: {
                responsible: '',
                name: 'tester',
                status: '',
            },
            document: {
                responsible: '',
                name: 'writer',
                status: '',
            },
            review: {
                responsible: '',
                name: 'reviewer',
                status: '',
            },
        },
        creator: card.creator,
        order: getCardOrder(),
        fixed: false,
        taskType: card.taskType,
    }
}

export default {
    state,
    getters,
    actions,
    mutations,
}
