// store/userlist.ts
import { defineStore } from 'pinia'

export const useUserListStore = defineStore({
  id: 'userlist',
  state: () => ({
    unverifiedUsers: [] as any[],
  }),
  actions: {
    async fetchUnverifiedUsers() {
      try {
        const response = await getUnverifiedUsers()
        this.unverifiedUsers = response.data
        return response
      } catch (error) {
        console.error('获取未审核用户失败:', error)
      }
    },
  },
})
