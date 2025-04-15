// store/auth.ts
import { defineStore } from 'pinia'

interface UserInfo {
  //定义用户信息的类型
  username: string
  password: string
  email: string
  role: number
  phoneNumber: string
  organization: string
}

export const useAuthStore = defineStore('auth', {
  //定义store的唯一ID
  state: () => ({
    //定义store的初始状态
    token: sessionStorage.getItem('token') || '', //从sessionStorage中获取token
    userInfo: [] as UserInfo[], //定义用户信息的类型
  }),
  actions: {
    //定义store的方法
    setToken(token: string) {
      this.token = token
      sessionStorage.setItem('token', token)
    },
    addUser(user: UserInfo) {
      //添加用户信息
      this.userInfo.push(user)
      sessionStorage.setItem('userInfo', JSON.stringify(this.userInfo))
    },
    clearAuth() {
      //清除用户信息
      this.token = ''
      this.userInfo = []
      sessionStorage.removeItem('token')
      sessionStorage.removeItem('userInfo')
    },
  },
})
