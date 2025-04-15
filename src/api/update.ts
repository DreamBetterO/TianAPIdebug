// api/update.ts
import request from '@/utils/request'

// 更新用户信息
export const updateUser = async (userId: number, data: any) => {
  try {
    // 审核用户只需传 id 和 status
    if (data.role === 2) {
      data = { id: userId, status: data.status }
    }
    const response = await request.post('/auth/update', data)
    return response
  } catch (error) {
    throw new Error('更新用户信息失败')
  }
}
