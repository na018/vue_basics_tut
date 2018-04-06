import Vue from 'vue'

const getUsers = function (cb) {
  Vue.http.get('http://localhost:3000/users').then(
    resp => {
      formatUsers({users: resp.body, cb})
    }
  )
}

function formatUsers({users, cb}) {
  let userObj={}
  users.forEach(user => userObj[user.userName] = user)
  cb(userObj)
}


export default {
  getUsers
}
