<template>
  <div class="DataUpload-DataDownload">
    <el-scrollbar class="scrollbar" style="height: 100vh;">
      <!--数据上传-->
      <el-container class="data-upload-container">
        <el-header class="header">
          <span>数据上传</span>
        </el-header>
        <el-container direction="vertical" class="uploadContainer">
          <el-form :inline="true" label-width="120px" class="data-upload-form">
            <el-row gitter="12">
              <el-col :span="6">
                <el-form-item label="观测对象">
                  <el-input v-model="uploadIterm.observer_object" placeholder="请输入观测对象"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="观测时间">
                  <el-date-picker v-model="uploadIterm.observer_time" type="datetime" placeholder="选择观测时间"
                    format="YYYY-MM-DD HH:mm:ss " value-format="YYYY-MM-DD HH:mm:ss"></el-date-picker>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="设备编号">
                  <el-input v-model="uploadIterm.observer_device" placeholder="请输入设备编号"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="文件名">
                  <el-input v-model="uploadIterm.filename" placeholder="请输入文件名"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row gitter="12">
              <el-col :span="6">
                <el-form-item label="文件路径">
                  <el-input v-model="uploadIterm.path" placeholder="请输入文件路径"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">

                <el-form-item label="数据类型" class="data-type-item">
                  <el-select v-model="uploadIterm.data_type" placeholder="请选择数据类型" style="width: 200px;">
                    <el-option label="temperature" value="temperature"></el-option>
                    <el-option label="txt" value="txt"></el-option>
                    <el-option label="pdf" value="pdf"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="桶名称" required="true">
                  <el-select v-model="uploadIterm.bucketName" placeholder="请输入储存桶名称" style="width: 200px;">
                    <el-option v-for="item in bucketListStore" :key="item.name" :label="item.name" :value="item.name">
                      {{ item.name }}
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="文件创建时间" style="max-width: 314px;">
                  <el-date-picker v-model="uploadIterm.createTime" type="datetime" placeholder="选择观测时间"
                    format="YYYY-MM-DD HH:mm:ss " value-format="YYYY-MM-DD HH:mm:ss"></el-date-picker>
                </el-form-item>

              </el-col>
            </el-row>
          </el-form>
          <el-container class="file-upload" direction="horizontal">
            <el-container class="upload-container" diection="vertical">
              <el-upload style="width: 45%; height: 100px; border: 2px;" drag action="/upload" :before-upload="handleBeforeUpload"
                :on-change="handleChange" :on-success="handleSuccess" :on-error="handleError"
                :on-progress="handleProgress" multiple>
                <el-icon class="el-icon--upload"><upload-filled /></el-icon>
                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
              </el-upload>
              <!-- 显示上传进度 -->
              <el-container v-if="uploadProgress > 0" class="progress-container">
                <el-progress :percentage="uploadProgress" status="success"></el-progress>
              </el-container>
              <!--显示上传的文件和上传按钮-->
              <el-container class="uploaded-files-container" direction="vertical">
                <el-table :data="uploadedFiles" style="width: 100%">
                  <el-table-column prop="name" label="文件名" width="180"></el-table-column>
                  <el-table-column label="操作" width="100">
                    <template #default="scope">
                      <el-button type="danger" size="small" @click="removeFile(scope.$index)">删除</el-button>
                    </template>
                  </el-table-column>
                </el-table>
                <div style="margin: 20px;">
                  <el-button type="default" @click="DataReset">重置</el-button>
                  <el-button type="primary" @click="UploadToServer">上传到服务器</el-button>
                </div>
              </el-container>
            </el-container>
          </el-container>
        </el-container>
      </el-container>
      <!--文件操作列表查询-->
      <el-container class="upload-history-container">
        <el-main class="main">
          <el-header class="header">
            <span>文件操作列表查询</span>
          </el-header>
          <el-container direction="horizontal" class="FileOperationList">
            <el-form :inline="true" label-align="left" class="FileOperationList">
              <el-row :gutter="12">
                <el-col :span="6">
                  <el-form-item label="文件名" required="true">
                    <el-input v-model="FileOperationListParams.filename" placeholder="请输入文件名"
                      style="margin-left: 12px; width: 218px ;"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item label="操作用户名">
                    <el-input v-model="FileOperationListParams.operateUsername" placeholder="请输入操作用户名"
                      style="width: 216px;"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item label="更新用户">
                    <el-input v-model="FileOperationListParams.updateUser" placeholder="请输入更新用户"
                      style="width: 216px;"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item label="观测设备">
                    <el-input v-model="FileOperationListParams.observeDevice" placeholder="请输入观测设备"
                      style="width: 216px;"></el-input>
                  </el-form-item>

                </el-col>
              </el-row>
              <el-row :gutter="12">
                <el-col :span="6">
                  <el-form-item label="创建时间">
                    <el-date-picker v-model="FileOperationListParams.startCreateTime" type="datetime" placeholder="开始时间"
                      style="width:35%;" format="YYYY-MM-DD HH:mm:ss"
                      value-format="YYYY-MM-DD HH:mm:ss"></el-date-picker>
                    <span style="margin: 0 5px;">~</span>
                    <el-date-picker v-model="FileOperationListParams.endCreateTime" type="datetime" placeholder="结束时间"
                      style="width:35%;" format="YYYY-MM-DD HH:mm:ss"
                      value-format="YYYY-MM-DD HH:mm:ss"></el-date-picker>
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item label="更新时间">
                    <el-date-picker v-model="FileOperationListParams.startUpdateTime" type="datetime" placeholder="开始时间"
                      style="width:35%; margin-left: 12px;" format="YYYY-MM-DD HH:mm:ss"
                      value-format="YYYY-MM-DD HH:mm:ss"></el-date-picker>
                    <span style="margin: 0 5px;">~</span>
                    <el-date-picker v-model="FileOperationListParams.endUpdateTime" type="datetime" placeholder="结束时间"
                      style="width:35%;" format="YYYY-MM-DD HH:mm:ss"
                      value-format="YYYY-MM-DD HH:mm:ss"></el-date-picker>
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item label="观测时间">
                    <el-date-picker v-model="FileOperationListParams.startObserveTime" type="datetime"
                      placeholder="开始时间" style="width:35%;" format="YYYY-MM-DD HH:mm:ss"
                      value-format="YYYY-MM-DD HH:mm:ss"></el-date-picker>
                    <span style="margin: 0 5px;">~</span>
                    <el-date-picker v-model="FileOperationListParams.endObserveTime" type="datetime" placeholder="结束时间"
                      style="width:35%;" format="YYYY-MM-DD HH:mm:ss"
                      value-format="YYYY-MM-DD HH:mm:ss"></el-date-picker>
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item label="文件大小" required="true">
                    <el-input v-model="FileOperationListParams.minSize" placeholder="最小值"
                      style="width: 37%;"></el-input>
                    <span style="margin: 0 5px;">~</span>
                    <el-input v-model="FileOperationListParams.maxSize" placeholder="最大值"
                      style="width: 37%;"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="12">
                <el-col :span="6">
                  <el-form-item label="存储桶名称" required="true">
                    <el-select v-model="FileOperationListParams.bucketName" placeholder="请输入存储桶名称" style="width: 204px;"
                      class="custom-placeholder">
                      <el-option v-for="item in bucketListStore" :key="item.name" :label="item.name" :value="item.name">
                        {{ item.name }}
                      </el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item label="数据类型" required="true">
                    <el-select v-model="FileOperationListParams.dataType" placeholder="请选择数据类型" style="width: 220px;">
                      <el-option label="txt" value="txt"></el-option>
                      <el-option label="pdf" value="pdf"></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>

                <el-col :span="6">
                  <el-form-item>
                    <el-button type="primary" @click="FilesOperationListSubmit">查询</el-button>
                    <el-button type="default" @click="FilesOperationListReset">重置</el-button>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-form>
          </el-container>
          <!--分页表格-->
          <el-container direction="vertical">
            <el-table :data="FileListStore" stripe style="width: 98%; padding: 5px;margin: 5px 20px;"
              table-layout="fixed">
              <el-table-column prop="filename" label="文件名" width="120" show-overflow-tooltip></el-table-column>
              <el-table-column prop="operateUsername" label="操作用户名" width="120" show-overflow-tooltip></el-table-column>
              <el-table-column prop="operateType" label="操作类型" width="100" show-overflow-tooltip></el-table-column>
              <el-table-column prop="createTime" label="创建时间" width="120" show-overflow-tooltip></el-table-column>
              <el-table-column prop="updateTime" label="更新时间" width="120" show-overflow-tooltip></el-table-column>
              <el-table-column prop="observeTime" label="观测时间" width="120" show-overflow-tooltip></el-table-column>
              <el-table-column prop="uploadTime" label="上传时间" width="120" show-overflow-tooltip></el-table-column>
              <el-table-column prop="updateUser" label="更新用户" width="80" show-overflow-tooltip></el-table-column>
              <el-table-column prop="bucketName" label="存储桶名称" width="100" show-overflow-tooltip></el-table-column>
              <el-table-column prop="observeObject" label="观测对象" width="100" show-overflow-tooltip></el-table-column>
              <el-table-column prop="dataType" label="数据类型" width="80" show-overflow-tooltip></el-table-column>
              <el-table-column prop="observeDevice" label="设备编号" width="100" show-overflow-tooltip></el-table-column>
              <el-table-column prop="path" label="文件路径" width="120" show-overflow-tooltip></el-table-column>
              <el-table-column prop="downloadUrl" label="操作" width="180" show-overflow-tooltip>
                <template #default="scope">
                  <el-button type="primary" size="small" @click="openDownloadUrl(scope.row.downloadUrl)">下载</el-button>
                  <el-button type="warning" size="small" @click="() => handleDelete(scope.row.id)">分享</el-button>
                </template>
              </el-table-column>
            </el-table>
            <!-- 分页组件 -->
            <div style="margin: 20px 20px 0px; display: flex; justify-content: flex-end;">
              <el-pagination v-if="FileListStore.length > 0" :current-page="currentPage"
                :page-size="FileOperationListParams.size" :total="totalElements" :page-count="pagecount"
                @current-change="handlePageChange" layout="prev, pager, next, jumper, total,slot"
                class="pagination-container">
                <template #slot> </template><span style="margin-left: 12px;">共 {{ pagecount }} 页</span></el-pagination>
            </div>
          </el-container>
        </el-main>
      </el-container>
      <!--功能性展示-->
      <!-- <el-container class="Functional-display-container">
      <el-main class="main">
        <el-container direction="vertical" class="bucket-list-container">
          <el-header class="header">
            <span>桶列表查询</span>
          </el-header>
          <el-button type="primary" @click="GetbucketList">查询存储桶列表</el-button>
          <el-table :data="bucketListStore" style="width: 100% ; max-height: 666px;" stripe>
            <el-table-column prop="name" label="存储桶名称" width="180"></el-table-column>
            <el-table-column prop="size" label="存储桶大小" width="180"></el-table-column>
            <el-table-column prop="lastModified" label="最后修改时间" width="180"></el-table-column>
          </el-table>
        </el-container>
        <el-container class="SingleFileDownload">
          <el-header class="header">
            <span>文件下载测试</span>
          </el-header>
          <el-input v-model="FileDownload" placeholder="/请输入文件下载内容"></el-input>
        </el-container>
      </el-main>
    </el-container> -->

    </el-scrollbar>
  </div>
</template>

<script lang="ts">
export default {
  name: 'DataUpload',
}
</script>

<script setup lang="ts">

import { onMounted, ref, watch, computed } from 'vue';
import type { FileOperationParams as FileOperationListParams, FileOperationRecord, BucketListData } from '@/types/DocOperation';
import { fileUpload, fileOperationList, } from '@/stores/DocSystem/fileStore'
import { BucketStore } from '@/stores/DocSystem/fileStore'
import { UploadFilled } from '@element-plus/icons-vue'

//******用于数据上传部分********//
interface uploadFill {
  filename: string; //存储显示⽂件名
  observer_object: string; //观测对象标识
  observer_time: string;//观测时间(ISO8601格式)
  observer_device: string; //测设备编号
  data_type: string; //数据类型标识
  path: string;
  bucketName: string; //存储桶名称
  createTime: string; //文件创建时间
}

const uploadIterm = ref<uploadFill>({
  filename: '',
  observer_object: '',
  observer_time: '',
  observer_device: '',
  data_type: '',
  path: '',
  bucketName: '',
  createTime: '',
});
///////上传进度调展示
const uploadProgress = ref(0); // 存储上传进度

const handleProgress = (event: { percent: number }, file: File) => {
  uploadProgress.value = Math.round(event.percent); // 更新进度
};


///////
const uploadedFiles = ref<File[]>([]); // 存储上传的文件列表

const handleBeforeUpload = (file: File) => {
  uploadedFiles.value.push(file); // 将文件添加到列表中

  /////////////////////////未完待续///////////////////////////////////

  console.log('文件已准备好:', file.name);
  return false; // 阻止默认上传行为
};
const handleSuccess = (response: unknown, file: File) => {
  console.log('文件上传成功:', response);
};
const handleError = (error: unknown, file: File) => {
  console.error('文件上传失败:', error);
};

const removeFile = (index: number) => {
  uploadedFiles.value.splice(index, 1); // 从列表中删除文件
  console.log('文件已删除:', index);
};

const DataReset = () => {
  uploadIterm.value.filename = '';
  uploadIterm.value.observer_object = '';
  uploadIterm.value.observer_time = '';
  uploadIterm.value.observer_device = '';
  uploadIterm.value.data_type = '';
  uploadIterm.value.path = '';
};

//上传数据合并
function mergeData() {
  fileUpload().fileUploadinfo.bucket_name = uploadIterm.value.bucketName;
  fileUpload().fileUploadinfo.filename = uploadIterm.value.filename;
  fileUpload().fileUploadinfo.observer_object = uploadIterm.value.observer_object;
  fileUpload().fileUploadinfo.observer_time = uploadIterm.value.observer_time;
  fileUpload().fileUploadinfo.observer_device = uploadIterm.value.observer_device;
  fileUpload().fileUploadinfo.data_type = uploadIterm.value.data_type;
  fileUpload().fileUploadinfo.path = uploadIterm.value.path;
  fileUpload().fileUploadinfo.create_time = uploadIterm.value.createTime;
}

// watch(uploadIterm, (newVal) => {
//   fileUpload().fileUploadinfo.filename = newVal.filename;
//   fileUpload().fileUploadinfo.observerObject = newVal.observer_object;
//   fileUpload().fileUploadinfo.observerTime = newVal.observer_time;
//   fileUpload().fileUploadinfo.observerDevice = newVal.observer__device;
//   fileUpload().fileUploadinfo.dataType = newVal.data_type;
//   fileUpload().fileUploadinfo.path = newVal.path;
//   console.log('uploadIterm:', newVal);
// });

const handleChange = (file: File) => {
  console.log('文件选择更改:', file.name);
};

const UploadToServer = () => {
  mergeData(); // 合并数据
  fileUpload().fileUploadinfo.file = uploadedFiles.value[0]; // 将文件存储到变量中
  const success = fileUpload().fetchFileUpload(fileUpload().fileUploadinfo);
  DataReset();
};


//**********************************文件操作列表查询*************************//

//查询参数
const FileOperationListParams = ref<FileOperationListParams>(
  /**用于直接向后端提交的数据，可更改每页显示条数*/
  {
    filename: '',
    operateUsername: '', //操作用户名
    updateUser: '',  //更新用户
    bucketName: '',  //存储桶名称
    path: '',
    minSize: 0,
    maxSize: 0,
    startCreateTime: '',
    endCreateTime: '',
    startUpdateTime: '',
    endUpdateTime: '',
    startObserveTime: '',
    endObserveTime: '',
    page: 0, //当前页码
    size: 5, //每页显示的条数，可以根据后续需要更改。
    dataType: '', //数据类型，后续新变量可合并
    observeDevice: '',
  }
);

const FileListStore = ref<FileOperationRecord[]>([
  /**从后端得到的数据值变化后从新渲染此值*/
  {
    id: 1,
    operateUsername: '仅用于测试',
    operateType: '上传',
    fileIndexId: 1,
    filename: '数据文件1.csv',
    size: 1024,
    createTime: '2025-04-16 10:00',
    updateTime: '2025-04-16 10:00',
    uploadTime: '2025-04-16 10:00',
    observeTime: '2025-04-16 10:00',
    updateUser: '用户1',
    bucketName: '存储桶1',
    path: '/path/to/数据文件1.csv',
    downloadUrl: 'http://example.com/download/数据文件1.csv',
    observeObject: '观测对象1',
    dataType: 'csv',
    observeDevice: '设备1',
  },])

const dataType = ref(''); //用于FileOperationListParams中的dataType中间值，以便于灵活更改。

function OperationParamsMerge() {
  FileOperationListParams.value.dataType = dataType.value;

}

watch(() => fileOperationList().fileOperationResList, (newVal) => { //文件操作列表查询信息写入
  if (newVal != null) { FileListStore.value = newVal; }
}
);

// 表格分页相关
//当前页;
const currentPage = ref(FileOperationListParams.value.page + 1); // 当前页码
//每页条数;数据来源为FileOperationListParams中的page，及向后端提交的页码
// const pageSize = computed({
//   get: () => FileOperationListParams.value.size, // 修改为 pageSize
//   set: (value) => {
//     FileOperationListParams.value.size = value; // 修改为 pageSize
//   },
// });
//总页数;数据来源为fileOperationList().pagination.totalPages；来自后端数据
const pagecount = computed({
  get: () => fileOperationList().pagination.totalPages,
  set: (value) => {
    fileOperationList().pagination.totalPages = value;
  },
  // console.log("总页数", fileOperationList().pagination.totalPage)
});

//元素总个数
const totalElements = computed({
  get: () => fileOperationList().pagination.totalElements,
  set: (value) => {
    fileOperationList().pagination.totalElements = value;
  },
});


// 当页数改变时，重新请求后端数据
const handlePageChange = (page: number) => {
  if (page < 0 || page > pagecount.value) {
    console.error('页码不在有效范围内:', page);
    return; // 如果页码不在有效范围内，直接返回
  }
  else {
    console.log('提交页:', page);
    console.log('总页数:', pagecount.value);
    currentPage.value = page;
    console.log('页数改变:', currentPage.value);
    FileOperSubmit(currentPage.value);
  }

  // FileOperationListParams.value.page = page; // 更新当前页码

};

// const handlepervClick = () => {
//   if (currentPage.value > 1) {
//     currentPage.value -= 1;
//     paginatedFileList.value = FileListStore.value.slice((currentPage.value - 1) * pageSize.value, currentPage.value * pageSize.value);
//   }
// };

// const handlenextClick = () => {
//   const totalPages = Math.ceil(FileListStore.value.length / pageSize.value);
//   if (currentPage.value < totalPages) {
//     currentPage.value += 1;
//     paginatedFileList.value = FileListStore.value.slice((currentPage.value - 1) * pageSize.value, currentPage.value * pageSize.value);
//   }
// };


// 确保 paginatedFileList 是一个 ref，用于动态更新表格数据
// const paginatedFileList = ref(
//   FileListStore.value.slice((currentPage.value - 1) * pageSize.value, currentPage.value * pageSize.value)
// );


/*****分页功能***********/

const FilesOperationListSubmit = () => { //用于文件操作查询按钮
  OperationParamsMerge()
  console.log('查询条件:', FileOperationListParams.value);
  fileOperationList().fetchFileOperationList(FileOperationListParams.value);
  // FilesOperationListReset();
};

const FileOperSubmit = (page: number) => {  //用于文件操作换页数据重新提交
  FileOperationListParams.value.page = (page - 1);
  fileOperationList().fetchFileOperationList(FileOperationListParams.value);
};

const FilesOperationListReset = () => { //用于文件操作查询重置按钮
  FileOperationListParams.value.filename = '';
  FileOperationListParams.value.operateUsername = '';
  FileOperationListParams.value.updateUser = '';
  FileOperationListParams.value.bucketName = '';
  FileOperationListParams.value.path = '';
  FileOperationListParams.value.minSize = 0;
  FileOperationListParams.value.maxSize = 0;
  FileOperationListParams.value.startCreateTime = '';
  FileOperationListParams.value.endCreateTime = '';
  FileOperationListParams.value.startUpdateTime = '';
  FileOperationListParams.value.endUpdateTime = '';
  FileOperationListParams.value.startObserveTime = '';
  FileOperationListParams.value.endObserveTime = '';
  OperationParamsMerge();
  console.log('重置查询条件');
}

const openDownloadUrl = (url: string) => {
  const link = document.createElement('a');
  link.href = url;
  link.download = ''; // 设置 download 属性以触发下载
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const handleDelete = (id: number) => {
  console.log('删除文件，ID:', id);
  // 在这里执行删除操作
};


/////****功能性展示 **************////////
const bucketListStore = ref<BucketListData[]>([]);
watch(() => BucketStore().bucketList, (newVal) => { //文件操作列表查询信息写入
  bucketListStore.value = newVal;
}
);

onMounted(() => {
  BucketStore().fetchBucketList();
});

// const GetbucketList = () => {
//   BucketStore().fetchBucketList();
// };

// const FileDownload = ref(''); //文件下载测试
</script>

<style scoped lang="scss">
@import './index.scss';

/* 修改 placeholder 的字体颜色 */
::v-deep(.el-select .el-input__inner)::placeholder {
  color: red !important;
  /* 将 placeholder 的字体颜色设置为红色 */
  opacity: 1;
  /* 确保颜色不被透明度影响 */
}

.FileOperationList {
  padding: 0 20px;
  /* display: flex;
  justify-content: space-between; */


}

/* 仅针对 class 为 custom-placeholder 的输入框 */
.custom-placeholder::placeholder {
  color: blue;
  /* 将 placeholder 的字体颜色设置为蓝色 */
  opacity: 1;
}



.uploaded-files {
  margin-top: 20px;
  height: auto;
  padding: 10px;
  background-color: #f9f9f9;
  border-radius: 5px;
  color: black;
}

span {
  color: black;
}

.Functional-display-container {
  margin-top: 20px;
  padding: 20px;
  background-color: #f9f9f900;
  border-radius: 5px;
}

.bucket-list-container {
  margin-top: 20px;
  /* padding: 20px; */
  background-color: #f9f9f900;
  border-radius: 5px;
}

.SingleFileDownload {
  margin-top: 20px;
  /* padding: 20px; */
  background-color: #f9f9f900;
  border-radius: 5px;
}
</style>
