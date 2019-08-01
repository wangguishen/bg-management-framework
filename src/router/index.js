// 项目路由配置
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/About.vue')
  },
  {
    path: '/404',
    name: 'err404',
    component: () => import('@/views/err/404.vue')
  },
  {
    path: '/50X',
    name: 'err50X',
    component: () => import('@/views/err/50X.vue')
  },
  {
    path: '*',
    redirect: '/404'
  }
]

const router = new VueRouter({
  routes
})

export default router;
