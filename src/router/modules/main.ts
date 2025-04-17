import { type RouteRecordRaw } from 'vue-router'
import echartsRouter from './echarts'

const ManageRoutes: Array<RouteRecordRaw> = [
  {
    path: '/management-platform',
    name: 'ManagementPlatform',
    component: () => import('@/layout/ManagementSystem/index.vue'),
    meta: { title: '首页' },
    children: [
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
      },
      ...echartsRouter,
    ],
    redirect: { name: 'ManagementHome' },
  },
]

export default ManageRoutes
