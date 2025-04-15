import { type RouteRecordRaw } from 'vue-router'

const LoginRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Login',
    component: () => import('@/views/login/LoginPage.vue'),
    meta: { title: '登录' },
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/login/RegisterPage.vue'),
    meta: { title: '注册' },
  },
]

export default LoginRoutes
