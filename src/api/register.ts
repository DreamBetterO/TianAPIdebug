// api/register.ts
import request from '@/utils/request'

// 用户注册
export const registerUser = async (userData: any) => {
  try {
    const response = await request.post('/auth/signup', userData)
    // 将 Token 存入 sessionStorage
    sessionStorage.setItem('token', response.token)
    // 提交到 Vuex 的 auth 模块
    return response
  } catch (error) {
    throw new Error('注册失败')
  }
}

// 用户登录
export const loginUser = async (credentials: any) => {
  try {
    const response = await request.post('/auth/login', credentials)
    // 将 Token 存入 sessionStorage
    sessionStorage.setItem('token', response.token)
    // 提交到 Vuex 的 auth 模块
    return response
  } catch (error) {
    throw new Error('登录失败')
  }
}
