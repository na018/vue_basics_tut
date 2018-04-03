// server.js
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('./server/api.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)

server.use('/kanBanBoards/:boardId/kanBanItems/:id', function (req, res) {
  res.redirect('/kanBanItems/'+req.params.id)
})

//server.use(router)
server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})
