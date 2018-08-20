// 仅运行于浏览器
import { createApp } from './app'

const { app, router, store } = createApp()

if (window.__INITIAL_STATE__) {
  // 客户端，挂载 app 之前，store状态更换
  store.replaceState(window.__INITIAL_STATE__)
}

// App.vue 模板中跟元素具有 `id="app"`
router.onReady(_ => {
  console.log('client entry')
  app.$mount('#app') // 客户端激活
})
