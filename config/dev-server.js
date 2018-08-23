process.noDeprecation = true

const path = require('path')
const MFS = require('memory-fs')
const webpack = require('webpack')
const { devMiddleware, hotMiddleware } = require('koa-webpack-middleware')

const clientConfig = require('./webpack.client.conf')
const serverConfig = require('./webpack.server.conf')

const readFile = (fs, file) => {
  try {
    return fs.readFileSync(path.join(clientConfig.output.path, file), 'utf-8')
  } catch (err) {}
}

module.exports = function setupDevServer(app, cb) {
  let bundle
  let clientManifest
  let ready

  const update = () => {
    if (bundle || clientManifest) {
      cb(bundle, {
        clientManifest
      })
      ready()
    }
  }

  // 客户端配置修改
  clientConfig.entry.app = ['webpack-hot-middleware/client?reload=true', clientConfig.entry.app]
  clientConfig.plugins.push(new webpack.NamedModulesPlugin(), new webpack.HotModuleReplacementPlugin())
  const clientCompiler = webpack(clientConfig)

  // HMR
  const devServer = devMiddleware(clientCompiler, {
    noInfo: true,
    publicPath: clientConfig.output.publicPath
  })
  app.use(devServer)
  app.use(hotMiddleware(clientCompiler, { heartbeat: 5000, log: console.log }))
  clientCompiler.plugin('done', _ => {
    clientManifest = JSON.parse(readFile(devServer.fileSystem, 'vue-ssr-client-manifest.json'))
    update()
  })

  // 服务器入口打包
  const serverCompiler = webpack(serverConfig)
  const mfs = new MFS()
  serverCompiler.outputFileSystem = mfs
  serverCompiler.watch({}, (err, stats) => {
    if (err) {
      throw err
    }
    stats = stats.toJson()
    bundle = JSON.parse(readFile(mfs, 'vue-ssr-server-bundle.json'))
    update()
  })

  return new Promise(resolve => {
    ready = resolve
  })
}
