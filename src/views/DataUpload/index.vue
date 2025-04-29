<template>
  <div>
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
              <el-upload class="upload-demo" drag action="/upload" :on-change="handleChange" :on-success="handleSuccess"
                :on-error="handleError">
                <!-- 这里可以添加上传的文件类型和大小限制 -->
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
              </el-upload>
              <el-form-item class="UploadRemark">
              <el-button type="default" @click="submit">重置</el-button>
              <el-button type="primary" @click="submit">上传到服务器</el-button>
            </el-form-item>
            </el-form-item>
          </el-container>
        </el-container>
      </el-main>
    </el-container>
    <el-container class="upload-history-container">
      <el-main class="main">
        <el-header class="header">
          <span>文件操作列表查询</span>
        </el-header>
        <el-container direction="horizontal" class="upload-history">
          <el-form :inline = "true" label-width="120px" class="FileOperationList">
            <el-form-item label ="文件名">
              <el-input v-model="FileOperationListParams.filename" placeholder="请输入文件名"></el-input>
            </el-form-item>
            <el-form-item label ="操作用户名">
              <el-input v-model="FileOperationListParams.operateUsername" placeholder="请输入操作用户名"></el-input>
            </el-form-item>
            <el-form-item label = "更新用户">
              <el-input v-model="FileOperationListParams.updateUser" placeholder="请输入更新用户"></el-input>
            </el-form-item>
            <el-form-item label = "文件大小">
              <el-input v-model="FileOperationListParams.minSize" placeholder="请输入最小文件大小"></el-input>
              <span style="margin: 0 5px;">~</span>
              <el-input v-model="FileOperationListParams.maxSize" placeholder="请输入最大文件大小"></el-input>
            </el-form-item>
            <el-form-item label = "创建时间">
              <el-date-picker v-model="FileOperationListParams.startCreateTime" type="datetime" placeholder="开始时间"
                style="width: 115px;" format="YYYY-MM-DDTHH:mm:ssZ" value-format="YYYY-MM-DDTHH:mm:ssZ"></el-date-picker>
              <span style="margin: 0 5px;">~</span>
              <el-date-picker v-model="FileOperationListParams.endCreateTime" type="datetime" placeholder="结束时间"
                style="width: 115px;" format="YYYY-MM-DDTHH:mm:ssZ" value-format="YYYY-MM-DDTHH:mm:ssZ"></el-date-picker>
            </el-form-item>
            <el-form-item label = "更新时间">
              <el-date-picker v-model="FileOperationListParams.startUpdateTime" type="datetime" placeholder="开始时间"
                style="width: 115px;" format="YYYY-MM-DDTHH:mm:ssZ" value-format="YYYY-MM-DDTHH:mm:ssZ"></el-date-picker>
              <span style="margin: 0 5px;">~</span>
              <el-date-picker v-model="FileOperationListParams.endUpdateTime" type="datetime" placeholder="结束时间"
                style="width: 115px;" format="YYYY-MM-DDTHH:mm:ssZ" value-format="YYYY-MM-DDTHH:mm:ssZ"></el-date-picker>
            </el-form-item>
            <el-form-item label = "观测时间">
              <el-date-picker v-model="FileOperationListParams.startObserveTime" type="datetime" placeholder="开始时间"
                style="width: 115px;" format="YYYY-MM-DDTHH:mm:ssZ" value-format="YYYY-MM-DDTHH:mm:ssZ"></el-date-picker>
              <span style="margin: 0 5px;">~</span>
              <el-date-picker v-model="FileOperationListParams.endObserveTime" type="datetime" placeholder="结束时间"
                style="width: 115px;" format="YYYY-MM-DDTHH:mm:ssZ" value-format="YYYY-MM-DDTHH:mm:ssZ"></el-date-picker>
            </el-form-item>
            <el-form-item label = "数据类型">
              <el-select v-model="FileOperationListParams.dataType" placeholder="请选择数据类型" style="width: 200px;">
                <el-option label="txt" value="txt"></el-option>
                <el-option label="pdf" value="pdf"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label = "观测设备">
              <el-input v-model="FileOperationListParams.observeDevice" placeholder="请输入观测设备"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submit">查询</el-button>
              <el-button type="default" @click="submit">重置</el-button>
            </el-form-item>
          </el-form>

        </el-container>
        <el-table :data="uploadHistory" stripe>
          <el-table-column prop="fileName" label="文件名"></el-table-column>
          <el-table-column prop="uploadTime" label="上传时间"></el-table-column>
          <el-table-column prop="status" label="状态"></el-table-column>
        </el-table>
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

import { ref } from 'vue';
import { type FileOperationParams as FileOperationListParams , type FileOperationRecord } from '@/types/DocOperation';

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

//******文件操作列表查询参数********//
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



// const FileOperationList = ref<FileOperationRecord[]>([
//   {
//     filename
//   }
// ]);







const dataType = ref('');
const remark = ref('');
const uploadHistory = ref([
  { fileName: '数据文件1.csv', uploadTime: '2025-04-16 10:00', status: '成功' },
  { fileName: '数据文件2.xlsx', uploadTime: '2025-04-16 11:30', status: '失败' },
  { fileName: '数据文件3.json', uploadTime: '2025-04-16 14:20', status: '成功' },
]);

const handleChange = (file: File) => {
  console.log('文件选择更改:', file.name);
};

const handleSuccess = (response: unknown, file: File) => {
  console.log('上传成功:', file.name);
  uploadHistory.value.push({
    fileName: file.name,
    uploadTime: new Date().toLocaleString(),
    status: '成功',
  });
};

const handleError = (error: unknown, file: File) => {
  console.error('上传失败:', file.name);
  uploadHistory.value.push({
    fileName: file.name,
    uploadTime: new Date().toLocaleString(),
    status: '失败',
  });
};

const submit = () => {
  console.log('提交数据:', { dataType: dataType.value, remark: remark.value });
};


</script>

<style scoped>
@import './index.scss';
</style>
