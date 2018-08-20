import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/'
      },

      {
        path: '/page1',
        component: () =>
          import(/* webpackChunkName: 'page1' */ '../views/page1.vue')
      },

      {
        path: '/page2',
        component: () => import('../views/page2.vue')
      },

      {
        path: '*',
        component: () => import('../views/notFound.vue')
      }
    ]
  })
}
