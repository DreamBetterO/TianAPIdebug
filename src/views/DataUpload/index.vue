<template>
  <div>
  <el-container class="data-upload-container">
    <el-header class="header">
      <h4>数据上传</h4>
    </el-header>
    <el-main class="main">
      <el-form label-width="120px" class="data-upload-form">
        <el-form-item label="选择文件">
          <el-upload
            class="upload-demo"
            drag
            action="/upload"
            :on-change="handleChange"
            :on-success="handleSuccess"
            :on-error="handleError"
          >
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
          </el-upload>
        </el-form-item>
        <el-form-item label="数据类型">
          <el-select v-model="dataType" placeholder="请选择数据类型">
            <el-option label="类型1" value="type1"></el-option>
            <el-option label="类型2" value="type2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="备注">
          <el-input type="textarea" v-model="remark"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submit">提交</el-button>
        </el-form-item>
      </el-form>
    </el-main>
  </el-container>
  <el-container class="upload-history">
    <el-header class="header">
    </el-header>

    <el-main class="main">
      <h4 style="color: black; margin-bottom: 20px;">上传历史</h4>
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

<style  scoped>
@import './index.scss';
</style>
