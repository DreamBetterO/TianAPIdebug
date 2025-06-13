<template>
  <div class="file-directories-page">
    <h2>文件目录管理</h2>
    <el-card>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="name" label="文件名" />
        <el-table-column prop="type" label="类型" />
        <el-table-column prop="size" label="大小" />
        <el-table-column prop="date" label="修改时间" />
      </el-table>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const tableData = ref([
  { name: '文档1.txt', type: '文本文件', size: '12KB', date: '2025-06-10 10:00' },
  { name: '图片1.png', type: '图片', size: '256KB', date: '2025-06-09 14:23' },
  { name: '数据表.xlsx', type: '表格', size: '88KB', date: '2025-06-08 09:11' },
])
</script>


<script lang="ts">
export default {
  name: 'FileDirectories',
}
</script>


<style scoped>
.file-directories-page {
  padding: 24px;
}
</style>
