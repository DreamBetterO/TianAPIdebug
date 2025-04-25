// import { defineStore } from 'pinia';
// import request from '@/utils/request'; // 你的请求封装库
// import type {
//   FileSearchParams,
//   FileInfoResponse,
//   PaginationResponse,
//   FileUploadData,
//   FileDownloadRequest,
//   FileOperationParams,
//   FileOperationRecord,
//   BucketListData,
//   BucketListResponse
// } from '@/types/file';

// export const useFileStore = defineStore('file', {
//   state: () => ({
//     files: [] as FileInfoResponse[], // 文件列表
//     fileOperations: [] as FileOperationRecord[], // 文件操作记录
//     buckets: [] as BucketListData[], // 桶列表
//     loading: false, // 全局加载状态
//     error: null as string | null, // 错误信息
//     pagination: {
//       page: 0,
//       size: 10,
//       sort: 'createTime,desc' // 默认排序
//     },
//     queryParams: {} as Partial<FileSearchParams>, // 用户自定义查询参数
//     downloadUrl: '' // 下载链接
//   }),
//   getters: {
//     // 计算属性：总页数
//     totalPages(): number {
//       return Math.ceil(this.pagination.totalElements / this.pagination.size);
//     }
//   },
//   actions: {
//     // 1. 文件列表查询
//     async fetchFiles() {
//       this.loading = true;
//       this.error = null;

//       try {
//         // 合并默认分页参数和用户自定义查询参数
//         const params = {
//           ...this.pagination,
//           ...this.queryParams
//         };

//         const response = await request.post<PaginationResponse<FileInfoResponse>>(
//           '/api/file_index/search',
//           params
//         );

//         this.files = response.data.content;
//         this.pagination.totalElements = response.data.totalElements;
//       } catch (err) {
//         this.error = '文件列表加载失败';
//         console.error('API Error:', err);
//       } finally {
//         this.loading = false;
//       }
//     },

//     // 2. 文件上传
//     async uploadFile(formData: FileUploadData) {
//       this.loading = true;
//       this.error = null;

//       try {
//         const response = await request.post('/files/upload', formData, {
//           headers: { 'Content-Type': 'multipart/form-data' }
//         });

//         this.$toast.success('文件上传成功');
//         return response.data;
//       } catch (err) {
//         this.error = '文件上传失败';
//         console.error('Upload Error:', err);
//         throw err;
//       } finally {
//         this.loading = false;
//       }
//     },

//     // 3. 文件下载
//     async downloadFile(params: FileDownloadRequest) {
//       this.loading = true;
//       this.error = null;

//       try {
//         const blob = await request.post('/file/download', params, {
//           responseType: 'blob'
//         });

//         const url = window.URL.createObjectURL(blob);
//         this.downloadUrl = url;
//         // 触发下载（示例）
//         const link = document.createElement('a');
//         link.href = url;
//         link.download = 'file.zip';
//         link.click();
//         URL.revokeObjectURL(url);
//       } catch (err) {
//         this.error = '文件下载失败';
//         console.error('Download Error:', err);
//       } finally {
//         this.loading = false;
//       }
//     },

//     // 4. 文件操作记录查询
//     async fetchFileOperations() {
//       this.loading = true;
//       this.error = null;

//       try {
//         const response = await request.post<PaginationResponse<FileOperationRecord>>(
//           '/api/file_operate/search',
//           this.queryParams
//         );
//         this.fileOperations = response.data.content;
//       } catch (err) {
//         this.error = '操作记录加载失败';
//         console.error('API Error:', err);
//       } finally {
//         this.loading = false;
//       }
//     },

//     // 5. 桶列表查询
//     async fetchBuckets() {
//       this.loading = true;
//       this.error = null;

//       try {
//         const response = await request.post<BucketListResponse>('/api/buckets');
//         this.buckets = response.data;
//       } catch (err) {
//         this.error = '桶列表加载失败';
//         console.error('API Error:', err);
//       } finally {
//         this.loading = false;
//       }
//     },

//     // 更新查询参数（用于前端筛选）
//     updateQueryParams(newParams: Partial<FileSearchParams>) {
//       this.queryParams = { ...this.queryParams, ...newParams };
//     },

//     // 分页控制
//     updatePagination(page: number, size: number) {
//       this.pagination.page = page;
//       this.pagination.size = size;
//     }
//   }
// });
