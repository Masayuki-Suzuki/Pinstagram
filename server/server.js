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
const SALT_ROUNDS = config.get('saltRounds') || 10

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

  // User.findOneAndRemove({ userName: 'bbbb' }, (err) => {
  //   if (err) {
  //     console.log(err)
  //     throw new Error(err)
  //   }
  // })

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
    const { userName, email, pass: password } = body
    /* eslint-disable prefer-const */
    let existUserName = false
    /* eslint-disable prefer-const */
    let existEmail = false
    // get user name and email address on db.
    const foundData = await User.find({ $or: [{ userName }, { email }] }, async (err, userData) => {
      if (err) {
        throw new Error(err)
      }
      return userData
    })
    // Valid data.
    foundData.forEach((data) => {
      if (data.userName === userName) {
        existUserName = true
      }
      if (data.email === email) {
        existEmail = true
      }
    })
    // if username or email address already exist return 400 state and existing flag.
    if (existUserName || existEmail) {
      ctx.response.status = 400
      ctx.response.body = { existUserName, existEmail }
      return next()
    }
    if (!existUserName || !existEmail) {
      // encrypt password for saving to db.
      const hash = await bcrypt.hash(password, SALT_ROUNDS)
      // Save user data for db.
      const newUser = new User({
        email,
        userName,
        password: hash,
        fullName: null,
        photo: null,
      })
      const user = await newUser.save()
      // create jwt
      const jsonWebToken = jwt.sign(
        {
          id: user._id,
          mail: user.email,
        },
        SECRET_KEY,
      )
      // Respond to client side with user data and jwt
      ctx.response.status = 200
      ctx.response.body = { userName: user.userName, id: user._id, jsonWebToken }
      return next()
    }
  })

  router.post('/login', async (ctx, next) => {
    const { email, pass: password, jwt: clientJWT } = await ctx.request.body
    // If the client sent jwt to the server,
    if (clientJWT) {
      const userData = await jwt.verify(clientJWT, SECRET_KEY, async (err, decode) => {
        if (err) {
          console.log(err)
          ctx.response.status = 400
          ctx.response.body = err
          return next()
        }
        return await User.findOne({ _id: decode.id }, (err, dbUserData) => {
          if (err) {
            ctx.response.status = 400
            ctx.response.body = err
            return next()
          }
          return dbUserData
        })
      })
      ctx.response.status = 200
      ctx.response.body = {
        id: userData._id,
        userName: userData.userName,
      }
      return next()
    }
    // If "jwd" was not sent by the client, the server determines this is the first login.
    // Get user data from db with an email address.
    const foundData = await User.findOne({ email }, (err, userData) => {
      if (err) {
        ctx.response.status = 400
        ctx.response.body = err
        return next()
      }
      return userData
    })
    // If found user data on db, validates password with hash
    if (foundData && bcrypt.compareSync(password, foundData.password)) {
      // create json web token after validate password and correct it.
      const jsonWebToken = jwt.sign(
        {
          id: foundData._id,
          email,
        },
        SECRET_KEY,
      )
      // respond user data and json web token for client
      ctx.response.status = 200
      ctx.response.body = {
        id: foundData._id,
        userName: foundData.userName,
        jsonWebToken,
      }
      return next()
    }
    // If email address isn't on the db or password was incorrect, respond error state and flag.
    ctx.response.status = 400
    ctx.response.body = { error: true }
  })

  router.get('*', async (ctx) => {
    await handle(ctx.req, ctx.res)
    ctx.respond = false
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log('Koa > Ready on %o', `http://localhost:${port}`)
  })
})
