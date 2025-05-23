import { defineStore } from 'pinia';
import type {
  FileSearchParams,
  FileInfoResponse,
  // PaginationResponse,
  FileUploadData,
  FileUploadResponse,
  // FileDownloadRequest,
  FileOperationParams,
  FileOperationRecord,
  BucketListData,
} from '@/types/DocOperation' // 导入你的类型定义
import { GetFiles,GetFileOperations,GetBuckets,UploadFile } from '@/api/DocOperation' // 引入文件列表查询的API
import {LoginStore} from '@/stores/LoginSystem/login' // 引入登录信息的store


// 1. ⽂件列表（查询）
export const fileList = defineStore('fileList', {
  state: () => ({
    fileList: [] as FileInfoResponse[], // 文件查询返回""content""的内容
    pagination:{  // 分页信息
      pagecount: 0,
      totalElements: 0,
      page:0,
      pageSize:0,
    }, //分页存储
  }),
  actions: {
    async fetchFileList(params: FileSearchParams) {
      try {
        console.log('开始请求文件列表')
        // 调用注册接口
        const response = await GetFiles(params)
        console.log('获取文件列表成功:', response)
        this.fileList = response.content // 设置返回值用户信息为二维数组
        this.pagination = {
          pagecount: response.totalPages,
          totalElements: response.totalElements,
          page: response.pageable.pageNumber,
          pageSize: response.pageable.pageSize,
        }//分页信息存储
        console.log('文件列表:', this.fileList)
        return fileList
      } catch (error) {
        console.error('Failed to fetch file list:', error)
      }

    },
  },
  getters: {
    totalPages(): number {  //计算属性：总页数
      return Math.ceil(this.pagination.totalElements / this.pagination.pageSize);
    }
  },
})

// 2. 文件操作记录（查询）
export const fileOperationList= defineStore('fileOperationList', {
  state: () => ({
    fileOperationResList: [] as FileOperationRecord[], //文件操作查询响应列表“content”
    pagination:{  // 分页信息
      totalPages: 0,
      totalElements: 0,
      page:1,
      pageSize:10,

    }, //分页存储
  }),
  actions: {
    async fetchFileOperationList(params: FileOperationParams) {
      try {
        console.log('开始请求文件操作列表')
        // 调用注册接口
        const response = await GetFileOperations(params)
        console.log('获取文件操作列表成功:', response)
        this.fileOperationResList = response.content // 设置返回值用户信息为二维数组
        this.pagination = {
          totalPages: response.totalPages,
          totalElements: response.totalElements,
          page: response.pageable.pageNumber,
          pageSize: response.pageable.pageSize,
        }//分页信息存储
      } catch (error) {
        console.error('Failed to fetch file operation list:', error)
      }
    }
  },
  getters: {
    totalPages(): number {  //计算属性：总页数
      return Math.ceil(this.pagination.totalElements / this.pagination.pageSize);
    }
  },
})

//3. 桶列表（查询）
export const BucketStore = defineStore('bucketList', {
  state: () => ({
    bucketList: [] as BucketListData[], // 桶列表
  }),
  actions: {
    async fetchBucketList() {
      try {
        console.log('开始请求桶列表')
        // 调用注册接口
        const response = await GetBuckets()
        this.bucketList = response   // 设置返回值用户信息为二维数组
        console.log('桶列表更新成功:', typeof(response))
        console.log('桶列表:', this.bucketList)
      } catch (error) {
        console.error('Failed to fetch bucket list:', error)
      }
    }
  },
})

//4. 文件上传
export const fileUpload = defineStore('fileUpload', {
  state: () => ({
    fileUploadRes: {} as FileUploadResponse, // 声明其类型为 FileUploadData 的单个对象
    fileUploadinfo: {} as FileUploadData, // 声明其类型为 FileUploadData 的单个对象
  }),
  actions: {
    initFileUploadInfo() {
      const loginusername = LoginStore().loginInfo?.username||'testUser' // 获取登录信息
      this.fileUploadinfo.username = loginusername // 操作账号
    },
    async fetchFileUpload(formData: FileUploadData) {
      try {
        this.initFileUploadInfo() // 初始化文件上传信息
        console.log('开始请求文件上传，请求内容为：', formData)
        // 调用注册接口
        const response = await UploadFile(formData);
        console.log('获取文件上传成功:', response);
        this.fileUploadRes = response // 设置返回值用户信息为二维数组
      } catch (error) {
        console.error('Failed to fetch file upload:', error)
      }
    }
  },
})
