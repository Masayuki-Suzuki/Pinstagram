const Koa = require('koa')
const Static = require('koa-static')
const Router = require('koa-router')
const next = require('next')
const mongoose = require('mongoose')
const User = require('./models/user')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_DEV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const DB_URL = 'mongodb://localhost/pinstagram'

app.prepare().then(() => {
  const server = new Koa()
  const router = new Router()
  server.use(Static('./public'))
  server.use(router.routes())

  mongoose.connect(DB_URL, (err) => {
    if (err) {
      throw new Error(err)
    } else {
      console.log('db connected')
    }
  })

  User.findOne({ username: 'test' }, (err, testUser) => {
    if (!testUser) {
      console.log('test user did not exist; creating test user...')
      testUser = new User({
        email: 'test@test.com',
        userName: 'testUser',
        password: 'test',
        fullName: 'Test User',
        photo: null,
      })
      testUser.save()
    }
  })

  router.get('*', async (ctx) => {
    await handle(ctx.req, ctx.res)
    ctx.respond = false
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`Koa > Ready on http://localhost:${port}`)
  })

})
