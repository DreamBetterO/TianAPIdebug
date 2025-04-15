// utils/request.ts
import axios, { type AxiosInstance, AxiosResponse } from 'axios'

// 动态设置 baseURL
const baseURL = import.meta.env.VITE_API_BASE_URL || '/api'
const request: AxiosInstance = axios.create({
  baseURL,
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
})

// 请求拦截器（添加 Token）
request.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error),
)

// 响应拦截器（统一处理错误）
request.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const { response } = error
    if (response) {
      switch (response.status) {
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
