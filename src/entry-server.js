// 仅运行于服务器
import { createApp } from './app'

export default context => {
  // 因为有可能是 异步路由钩子或组件，返回一个 promise
  // 便于 服务器能够等待所有的内容在渲染前，就已经准备就绪
  return new Promise((resolve, reject) => {
    const { app, router, store } = createApp()

    // 设置服务器端 router 的位置
    router.push(context.url)

    router.onReady(_ => {
      const matchedComponnets = router.getMatchedComponents()

      // 匹配不到路由，直接 404
      if (!matchedComponnets.length) {
        return reject({ code: 404 })
      }

      // 服务端数据预取
      // 在路由组件上定义静态函数 asyncData,该函数在组件实例化之前调用，因而无法访问this
      // 如果匹配到的路由组建暴露了 asyncData，就调用该方法
      Promise.all(
        matchedComponnets.map(component => {
          if (component && component.asyncData) {
            return component.asyncData({
              store,
              route: router.currentRoute
            })
          }
        })
      )
        .then(_ => {
          // 数据预取完成
          context.state = store.state
          resolve(app)
        })
        .catch(reject)
    }, reject)
  })
}
