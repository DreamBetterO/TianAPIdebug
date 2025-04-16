// store/auth.ts
import { defineStore } from 'pinia'
import type { LoginInfo, RegisterInfo, RegisterResponse, LoginResponse } from '@/types/login'
import { RegisterUser, LoginUser } from '@/api/login'

//注册状态管理
export const RegisterStore = defineStore('register', {
  //定义store的唯一ID
  state: () => ({
    //定义store的初始状态
    registerInfo: null as RegisterInfo | null, //用户信息
    RegisterResponseStore: null as RegisterResponse | null,
  }),
  actions: {
    //定义store的方法
    setRegisterInfo(info: RegisterInfo) {
      this.registerInfo = info
      console.log('RegisterInfo updated:', this.registerInfo)
    },
    clearRegisterInfo(state: { registerInfo: null }) {
      state.registerInfo = null
      console.log('RegisterInfo cleared.')
    },
    setRegisterResponseStore(response: RegisterResponse) {
      this.RegisterResponseStore = response
      console.log('RegisterResponse updated:', this.RegisterResponseStore)
    },
    clearRegisterResponseStore(state: { RegisterResponseStore: null }) {
      state.RegisterResponseStore = null
      console.log('RegisterResponse cleared.')
    },
    async SendRegisterInfo(info: RegisterInfo) {
      this.setRegisterInfo(info)
      if (!this.registerInfo) {
        throw new Error('RegisterInfo is not valid')
      }
      try {
        console.log('开始请求后端数据，请求内容为：', this.registerInfo)
        //调用注册接口
        const response = await RegisterUser(this.registerInfo)
        console.log('Registration successful:', response)
        this.setRegisterResponseStore(response)
        console.log('\n\nRegisterResponseStore updated:', this.RegisterResponseStore)
        //将注册响应存储到store中
        return response
      } catch (error) {
        console.error('Registration failed:', error)
        throw error
      }
    },
  },
})

//登录状态管理
export const LoginStore = defineStore('login', {
  //定义store的唯一ID
  state: () => ({
    //定义store的初始状态
    loginInfo: null as LoginInfo | null,
    loginResponse: null as LoginResponse | null,
  }),
  actions: {
    //定义store的方法
    setLoginInfo(info: LoginInfo) {
      //设置登录信息
      this.loginInfo = info
      console.log('LoginInfo updated:', this.loginInfo)
    },
    clearLoginInfo(state: { loginInfo: LoginInfo | null }) {
      state.loginInfo = null
      console.log('LoginInfo cleared.')
    },
    setLoginResponse(response: LoginResponse) {
      this.loginResponse = response
      console.log('LoginResponse updated:', this.loginResponse)
    },
    clearLoginResponse(state: { loginResponse: null }) {
      state.loginResponse = null
      console.log('LoginResponse cleared.')
    },
    async SendLoginInfo(info: LoginInfo) {
      this.setLoginInfo(info)
      if (!this.loginInfo) {
        throw new Error('LoginInfo is not valid')
      }
      try {
        console.log('开始请求后端数据，请求内容为：', this.loginInfo)
        //调用注册接口
        const response = await LoginUser(this.loginInfo)
        console.log('Registration successful:', response)
        this.setLoginResponse(response)
        console.log('\n\nLoginResponse updated:', this.loginResponse)
        //将注册响应存储到store中
        return response
      } catch (error) {
        console.error('Registration failed:', error)
        throw error
      }
    },
  },
})
