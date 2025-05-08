// 公共分页参数类型（保持不变）
export interface PaginationParams {
  page: number // 当前页码（从0开始）
  size: number // 每页数量
  sort?: string // 排序字段（格式：字段名,asc|desc）
}



// 1. 文件列表查询请求参数（完全对齐）
export interface FileSearchParams extends PaginationParams {
  filename?: string // 文件名，支持模糊查询
  updateUser?: string // 创建和更新用户名
  bucketName?: string // 桶名
  path?: string // 文件路径
  minSize: number // 文件大小下限，需要转换为字节
  maxSize: number
  startCreateTime?: string // 文件创建开始时间（格式：YYYY-MM-DD HH:mm:ss）
  endCreateTime?: string
  startUploadTime?: string
  endUploadTime?: string
  startUpdateTime?: string
  endUpdateTime?: string
  startObserveTime?: string // 观察时间开始时间（格式：YYYY-MM-DD HH:mm:ss）
  endObserveTime?: string
  dataType?: string // 数据类型
  observeDevice?: string // 观察设备
}

// 公共分页响应类型（保持不变）
export interface PaginationResponse {
  content: FileInfoResponse[] // 文件列表查询响应
  pageable: {
    pageNumber: number
    pageSize: number
    sort: {
      sorted: boolean
      unsorted: boolean
      empty: boolean
    }
    offset: number
    paged: boolean
    unpaged: boolean
    totalElements: number
    totalPages: number
    numberOfElements: number
  }
  last: boolean
  totalElements: number
  totalPages: number
  size: number
  number: number
  sort: {
    sorted: boolean
    unsorted: boolean
    empty: boolean
  }
  first: boolean
  numberOfElements: number
  empty: boolean
}

// 文件列表响应数据（完全对齐）
export interface FileInfoResponse {
  id: number
  filename: string
  size: number
  createTime: string // 格式：YYYY-MM-DD HH:mm:ss
  uploadTime: string
  updateTime: string
  observeTime: string
  updateUser: string
  bucketName: string
  path: string
  downloadUrl: string | null
  observeObject: string
  dataType: string | null
  observeDevice: string | null
}

// // 文件操作类型枚举
// export enum FileOperationType {
//   DOWNLOAD = 'DOWNLOAD',
//   VIEW = 'VIEW',
//   SHARE = 'SHARE',
//   DELETE = 'DELETE',
//   UPLOAD = 'UPLOAD'
// }

// 2. 文件操作列表查询请求参数
export interface FileOperationParams extends PaginationParams {
  filename?: string
  operateUsername?: string
  updateUser?: string // 创建和更新用户名
  bucketName?: string // 桶名
  path?: string
  minSize?: number
  maxSize?: number
  startCreateTime?: string // 格式：YYYY-MM-DD HH:mm:ss
  endCreateTime?: string
  startUploadTime?: string
  endUploadTime?: string
  startUpdateTime?: string
  endUpdateTime?: string
  startObserveTime?: string
  endObserveTime?: string // 格式：YYYY-MM-DD HH:mm:ss
  dataType?: string
  observeDevice?: string
}

// 文件操作记录响应数据
export interface FileOperationResponse {
  content:  FileOperationRecord[] // 文件列表查询响应
  pageable: {
    pageNumber: number
    pageSize: number
    sort: {
      sorted: boolean
      unsorted: boolean
      empty: boolean
    }
    offset: number
    paged: boolean
    unpaged: boolean
    totalElements: number
    totalPages: number
    numberOfElements: number
  }
  last: boolean
  totalElements: number
  totalPages: number
  size: number
  number: number
  sort: {
    sorted: boolean
    unsorted: boolean
    empty: boolean
  }
  first: boolean
  numberOfElements: number
  empty: boolean
}

export interface FileOperationRecord {
  id: number
  operateUsername: string
  operateType: string
  fileIndexId: number
  filename: string
  size: number
  createTime: string
  uploadTime: string
  updateTime: string
  observeTime: string
  updateUser: string
  bucketName: string
  path: string
  downloadUrl: string | null
  observeObject: string
  dataType: string | null
  observeDevice: string | null
}

// 3. 桶列表响应（修正字段名称和结构）
export interface BucketListResponse {
  status: number // 修正拼写错误：satus → status
  message: string
  data: BucketListData[] // 直接使用具体类型而非泛型
}

// 桶信息响应数据
export interface BucketListData {
  name: string
  size: number
  lastModified: string // ISO 8601格式
}

// 4. 文件上传请求参数
export interface FileUploadData {
  username: string
  bucket_name: string
  path: string
  filename: string
  observer_time: string // 格式：YYYY-MM-DD HH:mm:ss
  observer_object: string
  create_time: string // 格式：YYYY-MM-DD HH:mm:ss
  data_type: string
  observer_device: string
  file: File
}

// 文件上传响应
export interface FileUploadResponse {
  status: number
  message: string
  data?: string
}

// 5. 文件下载
export interface FileDownloadRequest {
  operateUsername: string
  fileIndexId: number
}

// 补充缺失的接口定义(未确认)
export interface FileDownloadResponse {
  status: number
  message: string
  data: Blob // 实际应为文件流或Blob类型
}

//6.浏览文件详情

