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

  router.beforeResolve((to, from, next) => {
    const matchedComponents = router.getMatchedComponents(to)
    const prevMatchedComponents = router.getMatchedComponents(from)
    const activated = matchedComponents.filter(
      (component, i) => component !== prevMatchedComponents[i]
    )

    const activatedAsyncHooks = activated
      .map(component => component && component.asyncData)
      .filter(Boolean)

    if (!activatedAsyncHooks.length) {
      return next()
    }

    // 开始预取 数据
    console.log('start fetching:')
    Promise.all(activatedAsyncHooks.map(hook => hook({ store, route: to })))
      .then(_ => {
        console.log('ok')
        next()
      })
      .catch(next)
  })

  app.$mount('#app') // 客户端激活
})

// 注册 service-worker
// location.protocol === 'https' &&
if (window && navigator.serviceWorker) {
  navigator.serviceWorker.register('/service-worker.js')
}
