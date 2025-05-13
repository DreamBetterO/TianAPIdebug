<template>
  <div class="dashboard-container">
    <!-- 顶部卡片 -->
    <el-row :gutter="20" class="top-cards">
      <!-- Buckets & Servers 卡片 -->
      <el-col :span="8">
        <el-card shadow="hover" class="card-block-top">
          <div class="card-header">
            <span>桶</span>
            <el-icon>
              <Box />
            </el-icon>
          </div>
          <div class="card-content">
            <p class="stat-number">{{ buckets }}</p>
            <el-button type="text" @click="browse">预览<el-icon>
                <ArrowRight />
              </el-icon></el-button>
          </div>
        </el-card>
        <!-- Servers 卡片 -->
        <el-card shadow="hover" class="card-block-top">
          <div class="card-header">
            <span>服务器</span>
          </div>
          <div class="card-content status-counts">
            <div>
              <p class="stat-number">1 <span class="status-dot success"></span><span style="font-size: medium;">在线</span></p>
            </div>
            <div>
              <p class="stat-number">0 <span class="status-dot error"></span> <span style="font-size: medium;">离线</span></p>
            </div>
          </div>
        </el-card>

      </el-col>
      <!-- Objects & Drives 卡片 -->
      <el-col :span="8">
        <el-card shadow="hover" class="card-block-top">
          <div class="card-header">
            <span>文件数量</span>
            <el-icon>
              <Document />
            </el-icon>
          </div>
          <div class="card-content">
            <p class="stat-number">{{ objects }}</p>
          </div>
        </el-card>
        <!-- Drives 卡片 -->
        <el-card shadow="hover" class="card-block-top">
          <div class="card-header">
            <span>磁盘</span>
          </div>
          <div class="card-content status-counts">
            <div>
              <p class="stat-number">1 <span class="status-dot success"></span><span style="font-size: medium;">在线</span></p>
            </div>
            <div>
              <p class="stat-number">0 <span class="status-dot error"></span><span style="font-size: medium;">离线</span></p>
            </div>
          </div>
        </el-card>
      </el-col>
      <!-- Reported Usage 卡片 -->
      <el-col :span="8">
        <el-card shadow="hover" style="margin-bottom: 10%;">
          <div class="card-header">
            <span>使用报告</span>
          </div>
          <div class="card-content">
            <p class="stat-number">{{ reportedUsage }} GB</p>
            <div ref="reportedChart" class="chart-container"></div>
            <div class="status-list">
              <div class="ReportedIterm"><el-icon>
                  <Stopwatch />
                </el-icon>上次维护时间 <span class="status-value"> 2025-04-16 15:32:21</span></div>
              <div  class="ReportedIterm"><el-icon>
                  <Loading class="is-loading" />
                </el-icon> 上次扫描时间 <span class="status-value"> 2025-04-27 17:12:21</span></div>
              <div  class="ReportedIterm"><el-icon>
                  <Clock />
                </el-icon> 更新时间 <span class="status-value"> 2025-05-10 17:31:11</span></div>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <!-- 三列信息条 -->
    <!-- <el-row :gutter="20" class="info-row">
      <el-col :span="8">
        <div class="info-item">
          后端类型<span class="info-value"> </span>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="info-item">
          标准存储类奇偶校验<span class="info-value"> </span>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="info-item">
          冗余项降低校验<span class="info-value"> </span>
        </div>
      </el-col>
    </el-row> -->
    <!-- 服务器和驱动器信息 -->
    <div class="ServerInfo">
      <!-- 服务器列表 -->
      <h3 style="color: black; margin: 80px 0px 5px 0px; ">服务器 (1)</h3>
      <el-card class="card-block" shadow="hover">
        <div class="server-header">
          <div><span class="status-dot success"></span> 127.0.0.1:9000</div>
          <div class="version-text">Version: 2025-03-12T18:04:18Z</div>
        </div>
        <div class="server-metrics">
          <div><span class="status-dot success"></span> 1/1 设备</div>
          <div><span class="status-dot success"></span> 1/1 网络</div>
          <div><span class="status-dot success"></span> 6h 前更新</div>
        </div>
      </el-card>

      <!-- 驱动器列表 -->
      <h4 style="color: black; margin: 20px 0px 5px 0px; ">设备 (1)</h4>
      <el-card class="card-block" shadow="hover">
        <el-row :gutter="20" align="middle">
          <el-col :span="6">
            <div ref="driveChart" class="chart-container"></div>
          </el-col>
          <el-col :span="18">
            <el-row>
              <p class="drive-name">设备名称: <br>/data</p>
            </el-row>
            <el-row getter="20">
              <el-col :span="4">
                <div style="border-right: 1px solid black; padding-right: 5px;">
                  <p>已使用: 260.3 GB (71.12% / 366.0 GB)</p>
                </div>
              </el-col>
              <el-col :span="4" style="padding-left: 16px;">
                <p>可用空间: 105.7 GB (28.88% / 366.0 GB)</p>
              </el-col>
              <el-col :span="4" :offset="12">
                <p><span class="status-dot success"></span>在线设备</p>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-card>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'DataInspection',
};
</script>


<script setup lang="ts">
import { ref, onMounted } from 'vue';
import * as echarts from 'echarts';
import { Box, Document, Stopwatch, Loading, Clock, ArrowRight } from '@element-plus/icons-vue';

const buckets = 11;
const objects = 260;
const reportedUsage = 23;
const browse = () => { /* 浏览操作 */ };

const reportedChart = ref<HTMLElement | null>(null);
const driveChart = ref<HTMLElement | null>(null);

onMounted(() => {
  // 绘制 Reported Usage 环形图
  if (reportedChart.value) {
    const chart = echarts.init(reportedChart.value);
    chart.setOption({
      series: [{
        type: 'pie',
        radius: ['70%', '90%'],
        avoidLabelOverlap: false,
        silent: true,
        label: { show: false },
        data: [
          { value: reportedUsage, itemStyle: { color: '#27326C' } },
          { value: 100 - reportedUsage, itemStyle: { color: '#E6E6E6' } }
        ]
      }]
    });
  }
  // 绘制 Drives 使用情况环形图
  if (driveChart.value) {
    const chart = echarts.init(driveChart.value);
    chart.setOption({
      series: [{
        type: 'pie',
        radius: ['70%', '90%'],
        avoidLabelOverlap: false,
        silent: true,
        label: { show: false },
        data: [
          { value: 260.3, itemStyle: { color: '#27326C' } },
          { value: 105.7, itemStyle: { color: '#E6E6E6' } }
        ]
      }],
      graphic: {
        type: 'text',
        left: 'center',
        top: 'center',
        style: {
          text: '71.12%',
          fontSize: 16,
          fontWeight: 'bold',
          fill: '#27326C'
        }
      }
    });
  }
});
</script>

<style scoped lang="scss">
@use "./index.scss";
</style>
