import request from '@/utils/request' // 假设这是你的封装请求库
import type { AxiosError } from 'axios';
import type {
  FileSearchParams,
  // FileInfoResponse,
  PaginationResponse,
  FileUploadData,
  FileUploadResponse,
  FileDownloadRequest,
  FileOperationParams,
  // FileOperationRecord,
  BucketListResponse,
  FileOperationResponse,
} from '@/types/DocOperation' // 导入你的类型定义

// 1. 文件列表查询
export const GetFiles = async (params: FileSearchParams): Promise<PaginationResponse> => {
  try {
    const response = await request.post<PaginationResponse>('/file_index/search', params)
    return response.data // 这里的data应该是一个对象，包含响应参数所有信息，即PaginationResponse内容
  } catch (error) {
    const axiosError = error as AxiosError;
    const { response } = axiosError;
    switch (response?.status) {
      case 400:
        console.error('请求参数错误:', response.data)
        break
    }
    console.error('文件列表查询失败:', error)
    throw error
}
}

// 2. 文件操作记录查询
export const GetFileOperations = async (
  params: FileOperationParams,
): Promise<FileOperationResponse> => {
  try {
    const response = await request.post<FileOperationResponse>(
      '/api/file_operate/search',
      params,
    )
    return response.data // 这里的data应该是一个对象，包含响应参数所有信息，即PaginationResponse内容
  } catch (error) {
    console.error('文件操作记录查询失败:', error)
    throw error
  }
}

// 3. 桶列表查询
export const GetBuckets = async (): Promise<BucketListResponse> => {
  try {
    const response = await request.post<BucketListResponse>('/buckets')
    return response.data
  } catch (error) {
    console.error('桶列表查询失败:', error)
    throw error
  }
}

//4 . 文件上传
export const UploadFile = async (formData: FileUploadData): Promise<FileUploadResponse> => {
  try {
    const response = await request.post<FileUploadResponse>('/files/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data', // 关键配置：指定请求头为表单数据
      },
    })
    return response.data
  } catch (error) {
    console.error('文件上传失败:', error)
    throw error
  }
}

// 5. 文件下载（需配合前端下载逻辑）
export const DownloadFile = async (params: FileDownloadRequest): Promise<Blob> => {
  try {
    const response = await request.post('/file/download', params, {
      responseType: 'blob', // 关键配置：指定响应类型为Blob
    })
    return response.data
  } catch (error) {
    console.error('文件下载失败:', error)
    throw error
  }
}
