// store/update.ts
import { defineStore } from 'pinia'
import type { updateUserinfo, updateUserinfoResponse } from '@/types/userlist'
import { UpdateUserInfo } from '@/api/userlists' // 引入更新用户信息的API

//用户信息更新管理
export const UpDateuser = defineStore('userList', {
  state: () => ({
    userList: [] as updateUserinfo[], // 初始化为随机值，类型与 usermember 对应
    updateuserlist: [] as updateUserinfoResponse[], // 初始化为随机值，类型与 usermember 对应
  }),
  actions: {
    setUpdateUserInfo(info: updateUserinfo) {
      this.userList = [info] // 设置用户信息为数组
      console.log('UserInfo updated:', this.userList)
      //设置用户信息
    },
    setUpdateUserList(info: updateUserinfoResponse) {
      this.updateuserlist = [info] // 设置用户信息为数组
      console.log('UserInfo updated:', this.updateuserlist)
      //设置用户信息
    },
    clearUpdateUserList() {
      this.updateuserlist = [] // 清空用户列表
      return this.updateuserlist
    },
    // 清空用户列表,
    clearUserList() {
      this.userList = []
      return this.userList
    },
    // 异步获取用户列表
    async fetchUserList(info: updateUserinfo) {
      this.setUpdateUserInfo(info) // 设置用户信息
      if (!this.userList) {
        throw new Error('所传递的用户信息不能为空')
      }
      try {
        this.clearUpdateUserList() // 清空用户列表
        console.log('开始请求后端数据，请求内容为：', this.userList[0])
        //调用注册接口
        const response = await UpdateUserInfo(this.userList[0]) //请求后端数据
        this.setUpdateUserInfo({ ...response, id: this.userList[0].id }) // 设置返回值用户信息。
        this.clearUserList() // 清空用户列表
      } catch (error) {
        console.error('Failed to fetch user list:', error)
      }
    },
  },
  getters: {
    initUserList: (state) => {
      return state.userList
    },
  },
})
