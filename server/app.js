const express = require('express')
const next = require('next')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const PORT = parseInt(process.env.PORT , 10) || 3000

app.prepare()
  .then(() => {
    const server = express()
    server.get('*', (req, res) => {
      return handle(req, res)
    })
    server.listen(PORT, (err) => {
      if(err) {
        throw err
      }
      server.keepAliveTimeout = 0
      console.log('> Ready on http://localhost:' + PORT)
    })
  })
  .catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
  })