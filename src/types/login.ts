export interface LoginInfo {
  username: string //用户名
  password: string //密码
}

export interface RegisterInfo {
  username: string //用户名
  password: string
  email: string
  role: number //普通用户(0) 管理用户(1) 管理员(2)
  phoneNumber: string
  organization: string
}

export interface RegisterResponse {
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

export interface LoginResponse {
  status: number //状态码  (例子为200)
  message: string //提示信息 Success
  data: {
    id: number //用户ID 5
    username: string //用户名 username
    email: string //邮箱  192@qlo.com
    status: number //审核状态 0表示需要审核，1表示审核成功
    organization: string //组织名称
    role: number //角色 0表示普通用户，1表示管理用户，2表示管理员
  }
}

export interface LoginResponseData {
  id: number //用户ID 5
  username: string //用户名 username
  email: string //邮箱  192@qlo.com
  status: number //审核状态 0表示需要审核，1表示审核成功
  organization: string //组织名称
  role: number //角色 0表示普通用户，1表示管理用户，2表示管理员
}

