<template>
  <div>
    <!--数据上传-->
    <el-container class="data-upload-container">
      <el-main class="main">
        <el-header class="header">
          <span>数据上传</span>
        </el-header>
        <el-container direction="vertical" class="uploadContainer">
          <el-form :inline="true" label-width="120px" class="data-upload">
            <el-form-item label="观测对象">
              <el-input v-model="uploadIterm.observer_object" placeholder="请输入观测对象"></el-input>
            </el-form-item>
            <el-form-item label="观测时间">
              <el-date-picker v-model="uploadIterm.observer_time" type="datetime" placeholder="选择观测时间"
                format="YYYY-MM-DDTHH:mm:ssZ" value-format="YYYY-MM-DDTHH:mm:ssZ"></el-date-picker>
            </el-form-item>
            <el-form-item label="设备编号">
              <el-input v-model="uploadIterm.observer__device" placeholder="请输入设备编号"></el-input>
            </el-form-item>
            <el-form-item label="文件名">
              <el-input v-model="uploadIterm.filename" placeholder="请输入文件名"></el-input>
            </el-form-item>
            <el-form-item label="文件路径">
              <el-input v-model="uploadIterm.path" placeholder="请输入文件路径"></el-input>
            </el-form-item>
            <el-form-item label="数据类型" class="data-type-item">
              <el-select v-model="uploadIterm.data_type" placeholder="请选择数据类型" style="width: 200px;">
                <el-option label="txt" value="txt"></el-option>
                <el-option label="pdf" value="pdf"></el-option>
              </el-select>
              <span v-if="uploadIterm.data_type" class="selected-data-type" style="margin-left: 10px;">
                已选择: {{ uploadIterm.data_type }}
              </span>
            </el-form-item>
          </el-form>
          <el-container class="file-upload">
            <el-form-item label="选择文件">
              <el-container class="upload-container" diection="vertical">
                <el-upload class="upload-demo" drag action="/upload" :before-upload="handleBeforeUpload"
                  :on-change="handleChange" :on-success="handleSuccess" :on-error="handleError" multiple>
                  <i class="el-icon-upload"></i>
                  <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                </el-upload>
                <!--显示上传的文件-->
                <el-container class="uploaded-files">
                  <el-table :data="uploadedFiles" style="width: 100%">
                    <el-table-column prop="name" label="文件名" width="180"></el-table-column>
                    <el-table-column label="操作" width="100">
                      <template #default="scope">
                        <el-button type="danger" size="small" @click="removeFile(scope.$index)">删除</el-button>
                      </template>
                    </el-table-column>
                  </el-table>
                </el-container>
              </el-container>
              <el-form-item class="UploadRemark">
                <div style="margin-left: 20px;">
                  <el-button type="default" @click="DataReset">重置</el-button>
                  <el-button type="primary" @click="UploadToServer">上传到服务器</el-button>
                </div>
              </el-form-item>
            </el-form-item>
          </el-container>
        </el-container>
      </el-main>
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
                <el-form-item label="文件名">
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
                    style="width: 100px;" format="YYYY-MM-DD HH:mm:ss"
                    value-format="YYYY-MM-DD HH:mm:ss"></el-date-picker>
                  <span style="margin: 0 5px;">~</span>
                  <el-date-picker v-model="FileOperationListParams.endCreateTime" type="datetime" placeholder="结束时间"
                    style="width: 100px;" format="YYYY-MM-DD HH:mm:ss"
                    value-format="YYYY-MM-DD HH:mm:ss"></el-date-picker>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="更新时间">
                  <el-date-picker v-model="FileOperationListParams.startUpdateTime" type="datetime" placeholder="开始时间"
                    style="width: 100px; margin-left: 12px;" format="YYYY-MM-DD HH:mm:ss"
                    value-format="YYYY-MM-DD HH:mm:ss"></el-date-picker>
                  <span style="margin: 0 5px;">~</span>
                  <el-date-picker v-model="FileOperationListParams.endUpdateTime" type="datetime" placeholder="结束时间"
                    style="width: 100px;" format="YYYY-MM-DD HH:mm:ss"
                    value-format="YYYY-MM-DD HH:mm:ss"></el-date-picker>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="观测时间">
                  <el-date-picker v-model="FileOperationListParams.startObserveTime" type="datetime" placeholder="开始时间"
                    style="width: 100px;" format="YYYY-MM-DD HH:mm:ss"
                    value-format="YYYY-MM-DD HH:mm:ss"></el-date-picker>
                  <span style="margin: 0 5px;">~</span>
                  <el-date-picker v-model="FileOperationListParams.endObserveTime" type="datetime" placeholder="结束时间"
                    style="width: 100px;" format="YYYY-MM-DD HH:mm:ss"
                    value-format="YYYY-MM-DD HH:mm:ss"></el-date-picker>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="文件大小">
                  <el-input v-model="FileOperationListParams.minSize" placeholder="最小值" style="width: 37%;"></el-input>
                  <span style="margin: 0 5px;">~</span>
                  <el-input v-model="FileOperationListParams.maxSize" placeholder="最大值" style="width: 37%;"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="15">
              <el-col :span="6">
                <el-form-item label="数据类型">
                  <el-select v-model="FileOperationListParams.dataType" placeholder="请选择数据类型" style="width: 220px;">
                    <el-option label="txt" value="txt"></el-option>
                    <el-option label="pdf" value="pdf"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>

              <el-col :span="6">
                <el-form-item>
                  <el-button type="primary" @click="submit">查询</el-button>
                  <el-button type="default" @click="submit">重置</el-button>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </el-container>
        <el-table :data="FileListStore" style="width: 100% ; max-height: 666px;" stripe>
          <el-table-column prop="filename" label="文件名" width="180"></el-table-column>
          <el-table-column prop="operateUsername" label="操作用户名" width="180"></el-table-column>
          <el-table-column prop="operateType" label="操作类型" width="180" sortable ></el-table-column>
          <el-table-column prop="createTime" label="创建时间" width="180" sortable ></el-table-column>
          <el-table-column prop="updateTime" label="更新时间" width="180" sortable></el-table-column>
          <el-table-column prop="observeTime" label="观测时间" width="180" sortable></el-table-column>
          <el-table-column prop="uploadTime" label="上传时间" width="180" sortable></el-table-column>
          <el-table-column prop="updateUser" label="更新用户" width="180"></el-table-column>
          <el-table-column prop="bucketName" label="存储桶名称" width="180"></el-table-column>
          <el-table-column prop="path" label="文件路径" width="180"></el-table-column>
          <el-table-column prop="downloadUrl" label="下载链接" width="180">
            <template #default="scope">
              <el-button @click="openDownloadUrl(scope.row.downloadUrl)">下载</el-button>
            </template>
          </el-table-column>
          <el-table-column prop="observeObject" label="观测对象" width="180"></el-table-column>
          <el-table-column prop="dataType" label="数据类型" width="180"></el-table-column>
          <el-table-column prop="observeDevice" label="观测设备编号" width="180"></el-table-column>
          <el-table-column label="操作" width="180">
            <template #default="scope">
              <el-button @click="() => handleDelete(scope.row.id)">删除</el-button>
            </template>
          </el-table-column>

        </el-table>
      </el-main>
    </el-container>
    <!--功能性展示-->
    <el-container class="bucket-list-container">
      <el-main class="main">
        <el-header class="header">
          <span>桶列表查询</span>
        </el-header>
        <el-button type="primary" @click="bucketList">查询存储桶列表</el-button>
        <el-container direction="horizontal" class="FileOperationList">
          <el-table :data="bucketListStore" style="width: 100% ; max-height: 666px;" stripe>
            <el-table-column prop="bucketName" label="存储桶名称" width="180"></el-table-column>
            <el-table-column prop="bucketSize" label="存储桶大小" width="180"></el-table-column>
            <el-table-column prop="fileCount" label="文件数量" width="180"></el-table-column>
            <el-table-column prop="createTime" label="创建时间" width="180"></el-table-column>
            <el-table-column prop="updateTime" label="更新时间" width="180"></el-table-column>
          </el-table>
        </el-container>
        <el-header class="header">
          <span>文件下载测试</span>
        </el-header>
        <el-input v-model="FileDownload" placeholder="/请输入文件下载内容"></el-input>
      </el-main>
    </el-container>
  </div>
</template>

<script lang="ts">
export default {
  name: 'DataUpload',
}
</script>

<script setup lang="ts">

import { ref, watch } from 'vue';
import type { FileOperationParams as FileOperationListParams, FileOperationRecord,BucketListData } from '@/types/DocOperation';
import { fileUpload, fileOperationList, } from '@/stores/DocSystem/fileStore'
import {BucketStore} from '@/stores/DocSystem/fileStore'

//******用于数据上传部分********//
interface uploadFill {
  filename: string; //存储显示⽂件名
  observer_object: string; //观测对象标识
  observer_time: string;//观测时间(ISO8601格式)
  observer__device: string; //测设备编号
  data_type: string; //数据类型标识
  path: string;
}

const uploadIterm = ref<uploadFill>({
  filename: '',
  observer_object: '',
  observer_time: '',
  observer__device: '',
  data_type: '',
  path: '',
});

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
  uploadIterm.value.observer__device = '';
  uploadIterm.value.data_type = '';
  uploadIterm.value.path = '';
};

//上传数据合并
function mergeData() {
  fileUpload().fileUploadinfo.filename = uploadIterm.value.filename;
  fileUpload().fileUploadinfo.observerObject = uploadIterm.value.observer_object;
  fileUpload().fileUploadinfo.observerTime = uploadIterm.value.observer_time;
  fileUpload().fileUploadinfo.observerDevice = uploadIterm.value.observer__device;
  fileUpload().fileUploadinfo.dataType = uploadIterm.value.data_type;
  fileUpload().fileUploadinfo.path = uploadIterm.value.path;
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


const UploadToServer = () => {
  mergeData(); // 合并数据
  fileUpload().fileUploadinfo.files = uploadedFiles.value; // 将文件存储到变量中
  const success = fileUpload().fetchFileUpload(fileUpload().fileUploadinfo);
  DataReset();
};


//******文件操作列表查询********//
const FileOperationListParams = ref<FileOperationListParams>(
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
    size: 10, //每页显示的条数
    dataType: '', //数据类型
    observeDevice: '',
  }
);

const FileListStore = ref<FileOperationRecord[]>([
  {
    id: 1,
    operateUsername: '用户1',
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

watch(() => fileOperationList().fileOperationResList, (newVal) => { //文件操作列表查询信息写入
  console.log("查询成功")
  if (newVal) { FileListStore.value = newVal; }
}
);


const dataType = ref('');
const remark = ref('');




const handleChange = (file: File) => {
  console.log('文件选择更改:', file.name);
};



const submit = () => {
  console.log('提交数据:', { dataType: dataType.value, remark: remark.value });
};

const openDownloadUrl = (url: string) => {
  window.open(url, '_blank');
};

const handleDelete = (id: number) => {
  console.log('删除文件，ID:', id);
  // 在这里执行删除操作
};


/////****功能性展示 **************////////
const bucketListStore = ref< BucketListData[]>([]);
watch(() => BucketStore().bucketList, (newVal) => { //文件操作列表查询信息写入
  console.log("查询成功")
  if (newVal) { bucketListStore.value = newVal; }
}
);

const bucketList = () => {
  BucketStore().fetchBucketList();
};

const FileDownload = ref(''); //文件下载测试


</script>

<style scoped>
@import './index.scss';

.FileOperationList {
  padding: 0 20px;
  /* display: flex;
  justify-content: space-between; */

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
</style>
