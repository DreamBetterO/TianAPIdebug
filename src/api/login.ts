// api/register.ts
import request from '@/utils/request'
import type { AxiosError } from 'axios'
import { ElMessageBox } from 'element-plus' // 引入 Element Plus 的消息提示框组件
import type { RegisterInfo, RegisterResponse, LoginInfo, LoginResponseData } from '@/types/login'

// 用户注册
export const RegisterUser = async (userData: RegisterInfo): Promise<RegisterResponse> => {
  //RegisterInfo表示用户注册所需的数据;Promise<RegisterResponse>，表示该函数会返回一个包含注册响应数据的 Promise
  try {
    const response = await request.post<RegisterResponse>('/auth/signup', userData)
    return response.data
  } catch (error) {
    const axiosError = error as AxiosError
    const { response } = axiosError
    if (response) {
      switch (response.status) {
        case 400:
          ElMessageBox.alert('该用户已注册，请直接登录', '提示', {
            confirmButtonText: '确定',
            type: 'error',
          })
          break
        case 401:
          ElMessageBox.alert('该用户未注册，请先注册', '提示', {
            confirmButtonText: '确定',
            type: 'error',
          })
          break
      }
    }
    console.error('注册失败:', error)
    throw error
  }
}

// 用户登录
export const LoginUser = async (logininfo: LoginInfo): Promise<LoginResponseData> => {
  try {
    const response = await request.post('/auth/login', logininfo)
    return response.data
  } catch (error) {
    const axiosError = error as AxiosError
    const { response } = axiosError
    if (response?.status === 401) {
      ElMessageBox.alert('该用户未注册，请先注册', '提示', {
        confirmButtonText: '确定',
        type: 'error',
      })
    }
    console.error('登录失败:', error)
    throw error
  }
}
