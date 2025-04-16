// api/register.ts
import request from '@/utils/request'
import type { RegisterInfo, RegisterResponse, LoginInfo, LoginResponse } from '@/types/login'

// 用户注册
export const RegisterUser = async (userData: RegisterInfo): Promise<RegisterResponse> => {
  //RegisterInfo表示用户注册所需的数据;Promise<RegisterResponse>，表示该函数会返回一个包含注册响应数据的 Promise
  try {
    const response = await request.post<RegisterResponse>('/auth/signup', userData)
    return response.data
  } catch (error) {
    console.error('注册失败:', error)
    throw error
  }
}

// 用户登录
export const LoginUser = async (logininfo: LoginInfo): Promise<LoginResponse> => {
  try {
    const response = await request.post<LoginResponse>('/auth/login', logininfo)
    return response.data
  } catch (error) {
    console.error('登录失败:', error)
    throw error
  }
}
