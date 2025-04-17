<template>
  <h1>数据上传</h1>
  <el-container class="data-upload-container">
    <el-header class="header">
      <h2>数据上传</h2>
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
      <h2>上传历史</h2>
    </el-header>
    <el-main class="main">
      <el-table :data="uploadHistory" stripe>
        <el-table-column prop="fileName" label="文件名"></el-table-column>
        <el-table-column prop="uploadTime" label="上传时间"></el-table-column>
        <el-table-column prop="status" label="状态"></el-table-column>
      </el-table>
    </el-main>
  </el-container>

</template>

<script lang="ts">
export default {
  name: 'DataUpload',
}
</script>

<script setup lang="ts">

</script>

<style  scoped>
@import './index.scss';
</style>
