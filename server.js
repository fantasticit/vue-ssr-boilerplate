const fs = require('fs')
const path = require('path')
const Koa = require('koa')
const KoaRouter = require('koa-router')
const serve = require('koa-static')
const mount = require('koa-mount')
const mime = require('mime')
const { createBundleRenderer } = require('vue-server-renderer')

const app = new Koa()
const router = new KoaRouter()
const port = parseInt(process.argv[2]) || 8080 // 可以通过 npm run dev 9090 形式指定端口号
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
  readyPromise = require('./config/dev-server')(app, (bundle, options) => {
    renderer = createRenderer(bundle, options)
  })
}

function serveStatic(filePath) {
  return async (ctx, next) => {
    data = fs.createReadStream(path.resolve(__dirname, filePath))
    return (ctx.body = data)
  }
}

router.get('/service-worker.js', serveStatic('./dist/service-worker.js'))
router.get('/manifest.json', serveStatic('./manifest.json'))
router.get('*', async ctx => {
  const url = ctx.request.url

  const context = {
    title: 'Vue-SSR',
    url
  }

  if (isProd) {
    return (ctx.body = await renderer.renderToString(context))
  } else {
    return readyPromise.then(async _ => {
      return (ctx.body = await renderer.renderToString(context))
    })
  }
})

app.use(async (ctx, next) => {
  const url = ctx.request.url
  let ext = url.match(/\.\w+/g)
  ext = (ext && ext.reverse()[0]) || null
  let mimeType = mime.getType(ext) || 'text/html'
  ctx.set('Content-Type', `${mimeType}; charset=utf-8`)

  await next()
})
app.use(
  mount(
    '/dist',
    serve('dist', {
      maxAge: isProd ? 365 * 24 * 60 * 60 : 0
    })
  )
)
app.use(router.routes())

app.listen(port, err => {
  if (err) {
    throw err
  }

  console.log(`Server is running at http://localhost:${port}`)
})
