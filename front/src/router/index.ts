import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

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
    path: '/test',
    name: 'test',
    component: () => import('@/views/test/index.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// グローバルガード
router.beforeEach((to, from, next) => {
  if (
    to.path == '/login' || (
      Vue.ls.get('access-token') && Vue.ls.get('client') && Vue.ls.get('uid')
    )
  ) {
    next()

  } else {
    next({ path: '/login' })
  }
})

export default router
