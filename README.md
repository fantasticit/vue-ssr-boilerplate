# vue-ssr-boilerplate

### A boilerplate for developing Server Side Render Vue.js Application

## 服务端渲染介绍

参考文章：[Vue SSR 渲染指南](https://ssr.vuejs.org)

## 源码结构

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

## 坑点提示

1. 由于采用了服务端渲染，所有关于浏览器上属性的使用，需要首先判断 `window` 对象是否存在。

## 其他

- 如果未来需要使用到“页面缓存或组件缓存”，可参考：[缓存](https://ssr.vuejs.org/zh/guide/caching.html#%E9%A1%B5%E9%9D%A2%E7%BA%A7%E5%88%AB%E7%BC%93%E5%AD%98-page-level-caching)
