const fs = require('fs')
const path = require('path')
const Koa = require('koa')
const KoaRouter = require('koa-router')
const { createBundleRenderer } = require('vue-server-renderer')

const port = 4001
const server = new Koa()
const router = new KoaRouter()
const templatePath = path.resolve(__dirname, './index.template.html')

function createRenderer(bundle, options = {}) {
  return createBundleRenderer(
    bundle,
    Object.assign(options, {
      basedir: path.resolve(__dirname, './dist'),
      runInNewContext: false,
      template: fs.readFileSync(templatePath, 'utf-8')
    })
  )
}

const isProd = process.env.NODE_ENV === 'production'
let renderer
let readyPromise

if (isProd) {
  const bundle = require('./dist/vue-ssr-server-bundle.json')

  renderer = createRenderer(bundle)
} else {
  readyPromise = require('./config/dev-server')(server, (bundle, options) => {
    renderer = createRenderer(bundle, options)
  })
}

router.get('*', async ctx => {
  const context = {
    title: 'Vue-SSR',
    url: ctx.request.url
  }

  if (isProd) {
    return (ctx.body = await renderer.renderToString(context))
  } else {
    return readyPromise.then(async _ => {
      return (ctx.body = await renderer.renderToString(context))
    })
  }
})

server.use(async (ctx, next) => {
  try {
    ctx.set('Content-Type', 'text/html')
    await next()
  } catch (err) {
    ctx.status = err.code || 500
    return (ctx.body = err)
  }
})

server.use(router.routes())
server.listen(port, err => {
  if (err) {
    throw err
  }

  console.log(`Server is running at http://localhost:${port}`)
})
