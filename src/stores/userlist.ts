// store/userlist.ts
import { defineStore } from 'pinia'
import type { UserList } from '@/types/userlist'
import { GetUncheckList } from '@/api/userlists'

export const useUserListStore = defineStore('userList', {
  state: () => ({
    userList: [] as UserList[], // 明确指定为二维数组类型
  }),
  actions: {
    clearUserList() {
      this.userList = []
      return this.userList
    },
    setUserList(getList: UserList[]) {
      this.userList = getList // 设置用户信息为二维数组
      console.log(typeof this.userList)
    },
    async fetchUncheckUserList() {
      try {
        this.clearUserList()
        console.log('开始请求未审核的用户列表')
        // 调用注册接口
        const response = await GetUncheckList()
        console.log('获取未审核的用户列表成功:', response)
        this.setUserList(response) // 设置返回值用户信息为二维数组
      } catch (error) {
        console.error('Failed to fetch user list:', error)
      }
    },
  },
})
