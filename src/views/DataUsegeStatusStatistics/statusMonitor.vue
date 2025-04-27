<template>
  <el-container class="StatusMonitoring" direction="vertical">
    <h3>数据状态监测</h3>
    <el-table :data="statusMonitor" stripe>
      <el-table-column prop="DataName" label="数据名称" sortable></el-table-column>
      <el-table-column prop="Stuts" label="状态" sortable></el-table-column>
      <el-table-column prop="Operate" label="操作"></el-table-column>
    </el-table>
  </el-container>

</template>

<script lang="ts">
export default {
  name: 'DataStatusMonitor',
}
</script>

<script lang="ts" setup>
import { ref } from 'vue';
interface StatusMonitor {
  DataName: string;
  Stuts: string;
  Operate: string;
}

const statusMonitor = ref<StatusMonitor[]>([
  {
    DataName: '数据1',
    Stuts: '正常',
    Operate: '操作1',
  },
  {
    DataName: '数据2',
    Stuts: '异常',
    Operate: '操作2',
  },
  {
    DataName: '数据3',
    Stuts: '正常',
    Operate: '操作3',
  },
]);

</script>

<style scoped>

.StatusMonitoring {
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.el-table {
  width: 100%;
  margin-top: 20px;
  background-color: #f5f5f5;
  color: black;
}
</style>
