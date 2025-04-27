<template>
  <el-container class="Overall">
    <el-container class="echart-container">
      <el-container class="Echart" direction="vertical">
        <span>这是近一周访问数据统计</span><br>
        <lineChart />
      </el-container>
      <el-container class="Echart">
        <span>数据下载统计</span><br>
        <radarchart />
      </el-container>
      <el-container class="Echart">
        <span>各种行为占比</span><br>
        <piechart />
      </el-container>

    </el-container>

    <el-container class="table-container">
      <el-container class="RoleScreening" direction="vertical">
        <roleFilter />
      </el-container>
      <el-container class="StatusMonitoring">
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
import lineChart from '@/views/echarts/lineChart/index.vue'
import radarchart from '@/views/echarts/radarChart/index.vue'
import piechart from '@/views/echarts/pieChart/index.vue'
import roleFilter from './roleFilter.vue';
import statusMonitor from './statusMonitor.vue';
</script>

<style>
@import './index.scss';
</style>
