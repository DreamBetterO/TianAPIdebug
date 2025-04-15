// store/update.ts
import { defineStore } from 'pinia'

export const useUpdateStore = defineStore({
  id: 'update',
  state: () => ({
    updateStatus: null,
  }),
  actions: {
    async updateUser(userId: number, data: any) {
      try {
        const response = await updateUser(userId, data)
        this.updateStatus = 'success'
        return response
      } catch (error) {
        this.updateStatus = 'error'
        throw error
      }
    },
  },
})
