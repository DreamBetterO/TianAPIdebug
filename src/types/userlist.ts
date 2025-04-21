export interface unchecklist {
  status: number //状态码
  message: string //提示信息
  data: [
    {
      id: number //用户ID
      username: string //用户名
      email: string //邮箱
      status: number //审核状态 0表示需要审核，1表示审核成功
      organization: string //组织名称
      role: number //角色 0表示普通用户，1表示管理用户，2表示管理员}
    },
    {
      id: number //用户ID
      username: string //用户名
      email: string //邮箱
      status: number //审核状态 0表示需要审核，1表示审核成功
      organization: string //组织名称
      role: number //角色 0表示普通用户，1表示管理用户，2表示管理员
    },
  ]
}

export interface UserList {
  id: number //用户ID
  username: string //用户名
  email: string //邮箱
  status: number //审核状态 0表示需要审核，1表示审核成功
  organization: string //组织名称
  role: number //角色 0表示普通用户，1表示管理用户，2表示管理员
}

//更新用户信息请求
export interface updateUserinfo {
  id: number //用户ID
  username?: string //用户名
  email?: string //邮箱
  status: number //审核状态 0表示需要审核，1表示审核成功
  organization?: string //组织名称
  phoneNumber?: string //电话号码
}

//审核用户请求
export interface AuditUserRequest {
  id: number //用户ID
  status: number //审核状态 0表示需要审核，1表示审核成功
}

//更新用户信息
export interface updateUserinfoResponse {
  status: number //状态码
  message: string //提示信息
  data: {
    id: number //用户ID
    username: string //用户名
    email: string //邮箱
    status: number //审核状态 0表示需要审核，1表示审核成功
    organization: string //组织名称
    role: number //角色 0表示普通用户，1表示管理用户，2表示管理员
  }
}

export interface usermember {
  id: number //用户ID
  username: string //用户名
  email: string //邮箱
  status: number //审核状态 0表示需要审核，1表示审核成功
  organization: string //组织名称
  role: number //角色 0表示普通用户，1表示管理用户，2表示管理员
  phoneNumber: string //电话号码
}


