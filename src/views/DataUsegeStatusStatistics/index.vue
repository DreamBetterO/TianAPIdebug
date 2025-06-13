<template>
  <el-container class="Overall">
    <header class="theme-title">| 数据下载统计</header>
    <el-container class="echart-container">

      <el-container class="Echart" direction="vertical">
        <header class="card-header">数据下载量统计</header>
        <lineChart />
      </el-container>
      <el-container class="Echart" direction="vertical">
        <header class="card-header">数据下载类型统计</header>
        <radarchart />
      </el-container>
      <el-container class="Echart" direction="vertical">
        <header class="card-header">行为占比</header>
        <piechart />
      </el-container>

    </el-container>

    <el-container class="table-container">
      <el-container class="RoleScreening" direction="vertical">
         <header class="card-header">数据角色筛选</header>
        <roleFilter />
      </el-container>
      <el-container class="StatusMonitoring">
        <header class="card-header">数据状态监测</header>
        <statusMonitor />
      </el-container>
    </el-container>


  </el-container>

</template>

<script lang="ts">
export default {
  name: 'DataUsegeStatusStatistics',
}
</script>

<script setup lang="ts">
import lineChart from '@/views/echarts/VisitStatistics/index.vue'
import radarchart from '@/views/echarts/radarChart/index.vue'
import piechart from '@/views/echarts/pieChart/index.vue'
import roleFilter from './roleFilter.vue';
import statusMonitor from './statusMonitor.vue';
</script>

<style scoped lang="scss">
@use './index.scss';
</style>
