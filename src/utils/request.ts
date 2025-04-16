// utils/request.ts
import axios, { type AxiosInstance } from 'axios'

// 动态设置 baseURL
const baseURL = import.meta.env.VITE_API_BASE_URL || '/api'
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
  (response) => response.data,
  (error) => {
    const { response } = error
    if (response) {
      switch (response.status) {
        case 200:
          console.log('请求成功')
        case 401:
          console.error('未授权，请重新登录')
          break
        case 403:
          console.error('拒绝访问')
          break
        case 404:
          console.error('请求地址不存在')
          break
        case 500:
          console.error('服务器内部错误')
          break
        default:
          console.error(`错误：${response.status}`)
      }
    } else {
      console.error('网络错误或服务器无响应')
    }
    return Promise.reject(error)
  },
)

export default request
