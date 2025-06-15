import { type RouteRecordRaw } from 'vue-router'
import echartsRouter from './echarts'
import LoginRoutes from './login'
// 引入登录信息
import {LoginStore} from '@/stores/LoginSystem/login'
import { ElMessageBox } from 'element-plus' // 引入 Element Plus 的消息提示框组件

const ManageRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'ManagementPlatform',
    component: () => import('@/layout/ManagementSystem/index.vue'),
    meta: { title: '首页' },
    children: [
      ...LoginRoutes,
      {
        path: '/home',
        name: 'ManagementHome',
        component: () => import('@/views/home/index.vue'),
      },
      {
        path: '/data-upload',
        name: 'DataUpload',
        component: () => import('@/views/DataUpload/index.vue'),
        meta: { title: '数据上传' },
      },
      {
        path: '/data-usege-status-statistics',
        name: 'DataUsegeStatusStatistics',
        component: () => import('@/views/DataUsegeStatusStatistics/index.vue'),
        meta: { title: '数据使用状态统计' },
      },
      {
        path: '/data-retrieval',
        name: 'DataRetrieval',
        component: () => import('@/views/DataRetrieval/index.vue'),
        meta: { title: '数据检索' },
      },
      {
        path: '/user-management',
        name: 'UserManagement',
        component: () => import('@/views/UserManagement/index.vue'),
        meta: { title: '用户管理' },
        beforeEnter: (to, from, next) => {
          if (LoginStore().loginResponseDate?.role === 1) {
            next()
          } else {
            ElMessageBox.alert('您没有权限访问此页面，请联系管理员！', '提示', {
              confirmButtonText: '确定',
              type: 'error',
            }).then(() => {
                next(from.fullPath) // 重定向到原有页面
            })
          }
        }
      },
      {
        path: '/data-inspection',
        name: 'DataInspection',
        component: () => import('@/views/DataInspection/index.vue'),
      },
      {
        path: '/file-directories',
        name: 'FileDirectories',
        component: () => import('@/views/FileDirectories/index.vue'),
      },
      ...echartsRouter,
    ],
    redirect: { name: 'ManagementHome' },
  },
]

export default ManageRoutes


