// utils/request.ts
import axios, { type AxiosInstance } from 'axios'
import { ElMessageBox } from 'element-plus'

// 动态设置 baseURL
const baseURL = import.meta.env.VITE_API_BASE_URL // 动态从环境变量获取 baseURL，默认为 /api

const request: AxiosInstance = axios.create({
  baseURL, // 基础 URL，baseURL 动态地从环境变量 VITE_API_BASE_URL 中获取，若未定义，则默认为 /api
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' }, //默认的请求头中设置了 Content-Type 为 application/json，表示请求体的数据格式为 JSON
})

// 请求拦截器（添加 Token）
request.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token') //从浏览器的本地存储中获取名为 token 的值
    if (token) {
      config.headers.Authorization = `Bearer ${token}` //如果 token 存在，将其添加到请求头的 Authorization 字段中，格式为 Bearer <token>
    }
    return config // 返回配置对象，继续请求
  },
  (error) => Promise.reject(error), //
)

// 响应拦截器（统一处理错误）
request.interceptors.response.use(
  (response) => {
    console.log('请求成功') // 添加成功日志
    return response.data
  },
  (error) =>
    {
    const { response } = error
    if (response) {
      switch (response.status) {
        // case 400: //重复注册
        //   ElMessageBox.alert('该用户已注册，请直接登录', '提示', {
        //     confirmButtonText: '确定',
        //     type: 'error',
        //   })
        //   console.error('用户已经注册请直接登录')
        //   break
        // case 401:
        //   ElMessageBox.alert('该用户未注册，请先注册', '提示', {
        //     confirmButtonText: '确定',
        //     type: 'error',
        //   })
        //   console.error('未授权，请重新登录')
        //   break
        // case 403:
        //   console.error('拒绝访问')
        //   ElMessageBox.alert('拒绝访问，你没有此权限，请联系管理员', '提示', {
        //     confirmButtonText: '确定',
        //     type: 'error',
        //   })
        //   break
        case 404:
          console.error('请求地址不存在')
          break
        case 500:
          console.error('服务器内部错误')
          break
        default:
          console.error(`未知错误：状态码 ${response.status}，响应内容：`, response.data)
      }
    } else {
      console.error('网络错误或服务器无响应')
      ElMessageBox.alert('网络请求错误，请检查网络设置', '提示', {
        confirmButtonText: '确定',
        type: 'error',
      })

    }
    return Promise.reject(error)
  },
)

export default request
