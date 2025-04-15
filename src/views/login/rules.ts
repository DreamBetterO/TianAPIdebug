import type { FormRules } from 'element-plus'

export interface RuleForm {
  username: string
  password: string
  verificationCode: string
}

// 生成随机验证码
export const generateVerificationCode = (): string => {
  const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let result = ''
  for (let i = 0; i < 4; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  return result
}

export const validateUsername = (
  //验证用户名
  rule: unknown,
  value: string,
  callback: (error?: Error) => void, //回调函数
) => {
  if (value === '') {
    callback(new Error('请输入用户名'))
  } else if (value.length < 2) {
    callback(new Error('用户名长度不能小于2个字符'))
  } else {
    callback()
  }
}

export const validatePassword = (
  //验证密码
  rule: unknown,
  value: string,
  callback: (error?: Error) => void, //回调函数
) => {
  if (value === '') {
    callback(new Error('请输入密码'))
  } else if (value.length < 6) {
    callback(new Error('密码长度不能小于6个字符'))
  } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{6,}$/.test(value)) {
    callback(new Error('密码必须包含大小写字母和数字'))
  } else {
    callback()
  }
}

export const validateVerificationCode = (
  //验证验证码
  rule: unknown,
  value: string,
  callback: (error?: Error) => void, //回调函数
  correctCode: string, //正确验证码
) => {
  if (value === '') {
    callback(new Error('请输入验证码')) //如果验证码为空，则返回错误信息
  } else if (value.toUpperCase() !== correctCode) {
    callback(new Error('验证码错误')) //如果验证码错误，则返回错误信息
  } else {
    callback() //如果验证码正确，则返回空
  }
}

export const createRules = (correctCode: string): FormRules => ({
  //创建验证规则
  username: [{ validator: validateUsername, trigger: 'blur' }], //用户名验证规则
  password: [{ validator: validatePassword, trigger: 'blur' }], //密码验证规则
  verificationCode: [
    {
      validator: (rule, value, callback) =>
        validateVerificationCode(rule, value, callback, correctCode), //验证验证码
      trigger: 'blur', //触发验证
    },
  ],
})
