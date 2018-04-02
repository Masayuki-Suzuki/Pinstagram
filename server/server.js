const Koa = require('koa')
const Static = require('koa-static')
const Router = require('koa-router')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_DEV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = new Koa()
  const router = new Router()
  server.use(Static('./public'))
  server.use(router.routes())

  router.get('*', async (ctx) => {
    await handle(ctx.req, ctx.res)
    ctx.respond = false
  })
  server.listen(port, (err) => {
    if (err) throw err
    console.log(`Koa > Ready on http://localhost:${port}`)
  })
})
