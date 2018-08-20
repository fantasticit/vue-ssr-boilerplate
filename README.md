# vue-ssr

### A boilerplate for developing Server Side Render Vue.js Application

## 服务端渲染介绍

### 什么是服务端渲染？

服务端渲染的 Vue.js 应用程序也可以称为“同构”或“通用”，大部分代码在服务端和客户端都可以运行。服务端渲染是将同一组件渲染为 HTML 字符串，然后直接发送给浏览器，然后将其“激活”成为在客户端可交互的应用程序。

### 为什么使用服务端渲染？

- 更好的 SEO

- 更快的内容到达时间（time-to-content）

## SSR 的基本用法

### 安装

```shell
npm i -S vue vue-server-rendere
```

### 渲染 Vue 实例

```JavaScript
// 第 1 步：创建一个 Vue 实例
const Vue = require('vue')
const app = new Vue({
  template: `<div>Hello World</div>`
})

// 第 2 步：创建一个 renderer
const renderer = require('vue-server-renderer').createRenderer()

// 第 3 步：将 Vue 实例渲染为 HTML
renderer.renderToString(app, (err, html) => {
  if (err) throw err
  console.log(html)
  // => <div data-server-rendered="true">Hello World</div>
})

// 在 2.5.0+，如果没有传入回调函数，则会返回 Promise：
renderer
  .renderToString(app)
  .then(html => {
    console.log(html)
  })
  .catch(err => {
    console.error(err)
  })
```

## 源码结构

### 避免状态单例

服务端渲染应当为每个请求创建一个新的根 Vue 实例。如果在多个请求之间共享一个实例，显然是错误的。所以所有的根实例、根路由、根状态都应当是一个工厂函数，每次请求都应当得到一个新的根实例。

### 构建流程

对于客户端和服务端应用程序，我们都使用 webpack 打包。服务器需要【服务器 bundle】用于服务器端渲染，而【客户端 bundle】则发送给浏览器用于混合静态标记。

![构建流程](https://cloud.githubusercontent.com/assets/499550/17607895/786a415a-5fee-11e6-9c11-45a2cfdf085c.png)

### 使用 webpack 结构

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
