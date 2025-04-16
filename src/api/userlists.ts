// api/update.ts
import request from '@/utils/request'
import type { updateUserinfo, updateUserinfoResponse } from '@/types/userlist'

// 更新用户信息
export const UpdateUserInfo = async (userData: updateUserinfo): Promise<updateUserinfoResponse> => {
  try {
    const response = await request.post<updateUserinfoResponse>('/auth/update', userData)
    return response.data
  } catch (error) {
    console.error('后端请求失败', error)
    throw error
  }
}
