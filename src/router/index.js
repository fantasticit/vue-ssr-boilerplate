import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        component: () =>
          import(/* webpackChunkName: 'home' */ '../views/home.vue')
      },

      {
        path: '/page1',
        component: () =>
          import(/* webpackChunkName: 'page1' */ '../views/page1.vue')
      },

      {
        path: '/page2',
        component: () =>
          import(/* webpackChunkName: 'page2' */ '../views/page2.vue')
      },

      {
        path: '*',
        component: () =>
          import(/* webpackChunkName: 'notFound' */ '../views/notFound.vue')
      }
    ]
  })
}
