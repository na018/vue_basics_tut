import Vue from 'vue'


const getKanBanBoard = function (id, cb) {
  // http://localhost:3000/kanBanBoards/1/kanBanItems
  Vue.http.get(`http://localhost:3000/kanBanItems`).then(
    resp => {
      if(cb) cb(resp.body)
    }
  )
}
const putCard = function (card) {
  // http://localhost:3000/kanBanBoards/1/kanBanItems/${card.id}
  Vue.http.put(`http://localhost:3000/kanBanBoards/1/kanBanItems/${card.id}`, card)
}
const addCard = function (card, cb) {
  Vue.http.post(`http://localhost:3000/kanBanBoards/1/kanBanItems`, card).then(
    resp => {
      if(cb) cb(resp.body)
    }
  )
}
const deleteCard = function (id) {
  Vue.http.delete(`http://localhost:3000/kanBanBoards/1/kanBanItems/${id}`)
}



export default {
  getKanBanBoard,
  putCard,
  addCard,
  deleteCard
}
