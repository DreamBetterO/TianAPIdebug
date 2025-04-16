// store/userlist.ts
import { defineStore } from 'pinia'
import type { UserList } from '@/types/userlist'
import { GetUncheckList } from '@/api/userlists'

export const useUserListStore = defineStore('userList', {
  state: () => ({
    userList: [
      {
        id: 1,
        username: '张三',
        email: 'zhangsan@example.com',
        status: 1,
        organization: '南京大学',
        role: 0,
      },
      {
        id: 2,
        username: '李四',
        email: 'lisi@example.com',
        status: 0,
        organization: '东南大学',
        role: 1,
      },
      {
        id: 3,
        username: '王五',
        email: 'wangwu@example.com',
        status: 1,
        organization: '河海大学',
        role: 2,
      },
    ] as UserList[], // 初始化为随机值，类型与 usermember 对应
  }),
  actions: {
    clearUserList() {
      this.userList = []
      return this.userList
    },
    setUserList(userList: UserList[]) {
      this.userList = [...userList] // 设置用户信息为数组
      console.log('UserList updated:', this.userList)
    },
    async fetchUncheckUserList() {
      try{
        console.log('开始请求未审核的用户列表');
        //调用注册接口
        const response = await GetUncheckList()
        console.log('获取未审核的用户列表成功:', response);
        this.setUserList(response.data) // 设置返回值用户信息。
      } catch (error) {
        console.error('Failed to fetch user list:', error)
      }
  },
  getters: {
    initUserList() {
      return this.userList
    },},
  },
})
