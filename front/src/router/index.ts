import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import { ShareModule } from '../store/modules/share'

import Layout from '@/layout'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    component: Layout,
    name: 'home',
    component: () => import('@/views/home/index.vue')
  },
  {
    path: '/about',
    component: Layout,
    name: 'about',
    component: () => import('@/views/about/index.vue')
  },
  {
    path: '/login',
    component: Layout,
    name: 'login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/sample',
    component: Layout,
    name: 'sample',
    component: () => import('@/views/sample/index.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// グローバルガード
router.beforeEach((to, from, next) => {
  // ShareModule.login() より先に実行されるので vue-ls からログイン状態を取得する
  if (to.path == '/login' || ShareModule.login_status) {
    next()
  } else {
    next({ path: '/login' })
  }
})

export default router
