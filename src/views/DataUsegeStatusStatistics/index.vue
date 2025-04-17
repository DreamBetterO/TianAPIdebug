<template>
  <el-container class="Overall">
    <h5>看什么，这就是数据统计。不过没有写完整罢了！</h5>
    <el-container class="echart-container">
      <el-container class="Echart">
        <span>这是近一周访问数据统计</span>
      </el-container>
      <el-container class="Echart">
        <span>数据下载统计</span>
      </el-container>
      <el-container class="Echart">
        <span>各种行为占比</span>
      </el-container>

    </el-container>

    <el-container class="table-container">
      <el-container class="RoleScreening">
        <span>数据角色赛选</span>
      </el-container>
      <el-container class="StatusMonitoring">
        <span>状态监控</span>
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



</script>

<style>
@import './index.scss';
</style>
