const Koa = require('koa'),
  static = require('koa-static'),
  Router = require('koa-router'),
  next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000,
  dev = process.env.NODE_DEV !== 'production',
  app = next({ dev }),
  handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = new Koa(),
    router = new Router()

  router.get('*', async ctx => {
    await handle(ctx.req, ctx.res)
    ctx.respond = false
  })

  server.use(static('./public'))
  server.use(router.routes())
  server.listen(port, err => {
    if (err) throw err
    console.log(`Koa > Ready on http://localhost:${port}`)
  })
})
