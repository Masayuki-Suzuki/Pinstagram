// config
require('dotenv').config()
const config = require('config')
const Koa = require('koa')
const Static = require('koa-static')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
const next = require('next')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const User = require('./models/user')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_DEV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const DB_URL = config.get('DB.url')
const PUBLIC_DIR = config.get('path.public')
const SECRET_KEY = config.get('secretKey')
const SALT_ROUNDS = config.get('saltRounds')

app.prepare().then(() => {
  const server = new Koa()
  const router = new Router()
  server.use(bodyParser())
  server.use(Static(PUBLIC_DIR))
  server.use(router.routes())

  mongoose.connect(DB_URL, (err) => {
    if (err) {
      throw new Error(err)
    } else {
      console.log('db connected')
    }
  })

  User.findOneAndRemove({ userName: 'bbbb' }, (err) => {
    if (err) {
      console.log(err)
      throw new Error(err)
    }
  })

  User.find({ userName: 'testUser' }, (err, testUser) => {
    if (testUser.length === 0) {
      console.log('test user did not exist; creating test user...')
      testUser = new User({
        email: 'test@test.com',
        userName: 'testUser',
        password: 'test',
        fullName: 'Test User',
        photo: null,
      })
      testUser.save()
    } else {
      console.log('test user has already existed; passed creating test user.')
      console.log(testUser)
    }
  })

  router.post('/register', async (ctx, next) => {
    const body = await ctx.request.body
    const { userName, email } = body
    const password = body.pass
    /* eslint-disable prefer-const */
    let existUserName = false
    /* eslint-disable prefer-const */
    let existEmail = false
    const foundData = await User.find({ $or: [{ userName }, { email }] }, async (err, userData) => {
      if (err) {
        throw new Error(err)
      }
      return userData
    })
    foundData.forEach((data) => {
      if (data.userName === userName) {
        existUserName = true
      }
      if (data.email === email) {
        existEmail = true
      }
    })
    if (existUserName || existEmail) {
      ctx.response.status = 400
      ctx.response.body = { existUserName, existEmail }
      return next()
    }
    if (!existUserName || !existEmail) {
      const hash = bcrypt.hashSync(password, SALT_ROUNDS)
      const newUser = new User({
        email,
        userName,
        password: hash,
        fullName: null,
        photo: null,
      })
      const user = await newUser.save()
      const jsonWebToken = jwt.sign(
        {
          userName,
          email,
        },
        SECRET_KEY,
      )
      ctx.response.status = 200
      ctx.response.body = { userName: user.userName, id: user._id, jsonWebToken }
      return next()
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
