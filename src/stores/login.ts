// store/auth.ts
import { defineStore } from 'pinia'
import type { LoginInfo, RegisterInfo, RegisterResponse, LoginResponseData } from '@/types/login'
import { RegisterUser, LoginUser } from '@/api/login'

//注册状态管理
export const RegisterStore = defineStore('register', {
  //定义store的唯一ID
  state: () => ({
    //定义store的初始状态
    registerInfo: null as RegisterInfo | null, //用户信息
    RegisterResponseStore: null as RegisterResponse | null,  //注册响应数据（后端返回的数据，注意这是一个完整的响应对象）
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
    loginInfo: null as LoginInfo | null,  //登录用户信息（发送给后端）
    loginResponseDate: null as LoginResponseData | null, //登录响应数据（后端返回的数据）
    islogin: false, //登录状态
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
    setLoginResponse(response: LoginResponseData) {
      this.loginResponseDate = response
      console.log('LoginResponse updated:', this.loginResponseDate)
      if (this.loginResponseDate.id!== 0) {
        //如果登录成功，设置登录状态
        this.islogin = true
        console.log('Login successful:', this.islogin)
      }
    },
    clearLoginResponse() {
      this.islogin = false; //清除登录状态
      this.loginResponseDate = null
      console.log('LoginResponse cleared.')
    },
    async SendLoginInfo(info: LoginInfo) {
      this.setLoginInfo(info)
      if (!this.loginInfo) {
        throw new Error('LoginInfo is not valid')
      }
      try {
        /*请求成功后，先清除之前的登录状态，随后设置登录状态 */
        console.log('开始请求后端数据，请求内容为：', this.loginInfo)
        //调用注册接口
        const response = await LoginUser(this.loginInfo)
        console.log('Registration successful:', response)
        this.clearLoginResponse();
        this.setLoginResponse(response.data)
        console.log('\n\nLoginResponse updated:', this.loginResponseDate)
        //将注册响应存储到store中
        return response
      } catch (error) {
        console.error('Registration failed:', error)
        throw error
      }
    },
  },
})
