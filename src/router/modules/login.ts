import { type RouteRecordRaw } from 'vue-router'
// import {RegisterStore, LoginStore}from '@/stores/login'


//代办事项：设置路由守卫，当LoginStore.isLogin为true时，跳转到首页,且不允许访问登录和注册页面。
//

const LoginRoutes: Array<RouteRecordRaw> = [

  {
    path: '/Login&Register',
    name: 'LoginLayout',
    component: () => import('@/views/login/layout.vue'),
    meta: { title: '登录布局' },
    children: [
      { path: '/Login',
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

    ],
    redirect: { name: 'Register' },
  },
]


export default LoginRoutes

