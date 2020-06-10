import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import { ShareModule } from '../store/modules/share'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home/index.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/about/index.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/sample',
    name: 'sample',
    component: () => import('@/views/sample/index.vue')
  },
  {
    path: '*',
    name: '404',
    component: () => import('@/views/shared/404.vue')
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
