// store/userlist.ts
import { defineStore } from 'pinia'
import type { usermember } from '@/types/userlist'

export const useUserListStore = defineStore('userList', {
  state: () => ({
    userList: [
      {
        id: 1,
        username: '张三',
        email: 'zhangsan@example.com',
        status: 1,
        organization: '技术部',
        role: 0,
        phoneNumber: '12345678901',
      },
      {
        id: 2,
        username: '李四',
        email: 'lisi@example.com',
        status: 0,
        organization: '市场部',
        role: 1,
        phoneNumber: '19876543210',
      },
      {
        id: 3,
        username: '王五',
        email: 'wangwu@example.com',
        status: 1,
        organization: '财务部',
        role: 2,
        phoneNumber: '13579246810',
      },
    ] as usermember[], // 初始化为随机值，类型与 usermember 对应
  }),
  actions: {
    clearUserList() {
      this.userList = []
      return this.userList
    },
  },
  getters: {
    initUserList: (state) => {
      return state.userList
    },
  },
})
