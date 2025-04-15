import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

// 1. 导入所有路由模块
import LoginRoutes from './modules/login'
import ManagementRoutes from './modules/main'
import RegisterPage from '@/views/login/RegisterPage.vue'

// 2. 合并所有路由配置
const routes: RouteRecordRaw[] = [
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
  // 注册页面
  {
    path: '/register',
    name: 'Register',
    component: RegisterPage,
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

export default router
