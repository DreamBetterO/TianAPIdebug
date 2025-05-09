// store/userlist.ts
import { defineStore } from 'pinia'
import type { UserList, AuditUserRequest } from '@/types/userlist'
import { GetUncheckList,DoAuditUser } from '@/api/userlists'

//审核列表拉取
export const Auditlist = defineStore('userList', {
  state: () => ({
    userList: [] as UserList[], // 明确指定为二维数组类型
  }),
  actions: {
    clearUserList() {
      this.userList = []
      return this.userList
    },
    setUserList(getList: UserList[]) {
      this.userList = getList // 设置用户信息为二维数组
      console.log(typeof this.userList)
    },
    async fetchUncheckUserList() {
      try {
        this.clearUserList()
        console.log('开始请求未审核的用户列表')
        // 调用注册接口
        const response = await GetUncheckList()
        console.log('获取未审核的用户列表成功:', response)
        this.setUserList(response) // 设置返回值用户信息为二维数组
      } catch (error) {
        console.error('Failed to fetch user list:', error)
      }
    },
  },
})


//审核列表管理（审核单个用户，随后传递给后端）
export const AuditUser = defineStore('auditUser', {
  state: () => ({
    audituser: {} as AuditUserRequest, // 声明其类型为 AuditUserRequest 的单个对象
  }),
  actions: {
    clearUser() {
      this.audituser = {} as AuditUserRequest; //
      return this.audituser
    },
    setUser(user: AuditUserRequest) {
      this.audituser = user // 设置用户信息为 AuditUserRequest 类型的单个对象
      console.log(typeof this.audituser)
    },
    async AuditUncheckUser(info: AuditUserRequest) {
      try {
        this.clearUser();
        this.setUser(info);
        const response = await DoAuditUser(this.audituser)
        console.log('审核用户成功:', response)
        this.setUser(response) // 设置返回值用户信息为 AuditUserRequest 类型的单个对象
        Auditlist().fetchUncheckUserList() // 重新拉取未审核用户列表
      } catch (error) {
        console.error('Failed to fetch user:', error)
      }
    },
  },
})
