import Vue from 'vue'

const getUsers = function (cb) {
  Vue.http.get('http://localhost:3000/users').then(
    resp => {
      console.log(resp.body)
      formatUsers({users: resp.body, cb})
    }
  )
}

function formatUsers({users, cb}) {
  let userObj={}
  console.log('format users')
  users.forEach(user => userObj[user.userName] = user)
  console.log(userObj)
  cb(userObj)
}


export default {
  getUsers
}
