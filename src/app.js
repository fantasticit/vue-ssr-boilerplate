// 通用 entry
import Vue from 'vue'
import App from './App.vue'
import { sync } from 'vuex-router-sync'
import { createRouter } from './router'
import { createStore } from './store'

// 导出工厂函数
// 用于创建新的 app、router和 store 实例
export function createApp() {
  // 创建 router 和 store 实例
  const router = createRouter()
  const store = createStore()

  // 同步路由状态到 store
  sync(store, router)

  const app = new Vue({
    router, // 注入 router 到根 Vue 实例
    store,
    render: h => h(App)
  })

  return { app, router, store }
}
