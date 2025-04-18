import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

// 1. 导入所有路由模块
import LoginRoutes from './modules/login'
import ManagementRoutes from './modules/main'


// 2. 合并所有路由配置
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'WelcomePage',
    component: () => import('@/views/Welecome.vue'),
    meta: { title: '首页' },
  },
  // 登录模块
  ...LoginRoutes,
  ...ManagementRoutes,
  // 404 页面（可选）
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/components/ErrorMessage/404.vue'),
  },
  {
    path: '/workingForNew',
    name: 'WorkingForNew',
    component: () => import('@/views/WorkingForNew.vue'),
    meta: { title: '工作台' },
  },
]


// 3. 创建路由实例
const router = createRouter({
  history: createWebHistory(),
  routes,
})

// 4. 全局前置守卫（示例：简单权限校验）
router.beforeEach((to, from, next) => {
  if (to.path === '/admin') {
    next('/home') // 无权限则重定向
  } else {
    next()
  }
})

router.onError((error) => {
  console.error('路由错误:', error);
});

export default router
