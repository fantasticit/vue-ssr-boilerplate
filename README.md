<p align="center">
  <br>
  <img width="200" src="http://pcj3271t7.bkt.clouddn.com/logo-2.png" alt="logo of vue-ssr-bolilerplate repository">
  <br>
  <br>
</p>

# vue-ssr-boilerplate

> 仅用于学习，生产环境请使用官方更加完善的渲染框架 [nuxt.js](https://github.com/nuxt/nuxt.js) 。

### A boilerplate for developing Server Side Render Vue.js Application

## 1. 服务端渲染介绍

参考文章：[Vue SSR 渲染指南](https://ssr.vuejs.org)

## 2. 如何使用

使用的前提是安装依赖,即: `npm i`.

### 2.1 开发模式

执行 `npm run dev` 即可.

### 2.2 生产模式

生产模式,首先进行打包,然后再运行相关服务,即:

```shell
npm run build && npm start # 如果线上使用 pm2,也可以用 npm run pm2
```

生产模式如果要启用 `service-worker(pwa)`,首先确保部署时采用了 `https` 协议,然后修改 `build/webpack.client.conf.js` 中 SWPlugin 相关配置,例如:

```javascript
new SWPrecachePlugin({
  cacheId: 'vue-ssr-justemit',
  filename: 'service-worker.js',
  minify: true,
  // 设置为 false, sw生成的缓存是 filename?hash 形式，以便于浏览器更新缓存
  dontCacheBustUrlsMatching: false,
  // 忽略文件
  staticFileGlobsIgnorePatterns: [/\.map$/, /\.css$/],
  // For unknown URLs, fallback to the index page
  navigateFallback: 'https://example/', // 这里修改为 线上部署的地址
  // 运行时缓存
  runtimeCaching: [ // 这里修改为您实际开发时所需要的相关路由
    {
      urlPattern: '/',
      handler: 'networkFirst'
    },
    {
      urlPattern: /\/(page1|page2|page3)/,
      handler: 'networkFirst'
    }
  ]
}
```

存在的问题:
当浏览器访问 `https://example.com/` 时,注册的 service-worker 的域是 `https://example.com/` ,是不能直接浏览器输入 `https://example.com/page1` 来访问 `/page1` 这个路由的的.

解决办法: 浏览器新标签直接访问 `https://example.com/page1` (直接访问走的是 服务端的路由匹配,即 `entry-server`), 将该域的 service-worker 注册,其他路由同理.

希望有懂这一块的小伙伴可以帮忙解决.(:

## 3 源码结构

服务端渲染应当为每个请求创建一个新的根 Vue 实例。如果在多个请求之间共享一个实例，显然是错误的。所以所有的根实例、根路由、根状态都应当是一个工厂函数，每次请求都应当得到一个新的根实例。

```shell
src
├── components # 组件
├── router # vue-router
├── store # vuex store
├── App.vue
├── app.js # 通用 entry(universal entry)
├── entry-client.js # 仅运行于浏览器
└── entry-server.js # 仅运行于服务器
```

- `app.js`

  `app.js` 是程序的“通用入口”。在客户端程序中，直接用此文件创建根 Vue 实例，并直接挂载到 DOM（激活）。在服务端渲染中，则将责任转到客户端入口文件。`app.js` 只是简单到处 `createApp` 函数。

- `entry-client.js`

  客户端入口只需要创建应用程序，并将其挂载到 DOM 中：

  ```JavaScript
  import { createApp } from './app'

  const { app } = createApp()
  app.$mount('#app')
  ```

- `entry-server.js`

  服务器入口使用 `export default` 导出函数，并在每次渲染时重复调用此函数，用于创建和返回应用程序实例。也可以用于服务器端路由匹配和数据预取逻辑。

再次强调，如果使用了 `vue-router`、`vuex` 等，需要导出的均是一个工厂函数，而不是一个单例。

## 4 坑点提示

### 4.1 window 及其他浏览器环境下属性

由于采用了服务端渲染，所有关于浏览器上属性的使用，需要首先判断 `window` 对象是否存在。

### 4.2 单元测试

默认采用 `jest` 和 `vue-test-utils` 进行测试，如果测试的组件需要用到 `vuex`，需要在测试的代码中新创建一个 `store` 传入，例如：

```javascript
import { createStore } from '@/store'

const store = createStore()

test('test', () => {
  const wrapper = shallow(Component, { store })
})
```

## 5 其他

- 如果未来需要使用到“页面缓存或组件缓存”，可参考：[缓存](https://ssr.vuejs.org/zh/guide/caching.html#%E9%A1%B5%E9%9D%A2%E7%BA%A7%E5%88%AB%E7%BC%93%E5%AD%98-page-level-caching)

## LICENSE

MIT
