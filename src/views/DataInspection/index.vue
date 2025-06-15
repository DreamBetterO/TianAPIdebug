<template>
  <div class="dashboard-container">
    <!-- 顶部卡片 -->
    <el-row class="top-cards">

      <el-col :span="8" class="card-block-tops">
        <!-- Buckets & Servers 卡片 -->
        <el-card shadow="hover" class="card-block-top">
          <div class="card-header-this">
            <div class="card-title">

              <div><svg t="1749967930921" class="icon" viewBox="0 0 1024 1024" version="1.1"
                  xmlns="http://www.w3.org/2000/svg" p-id="7651" width="200" height="200">
                  <path
                    d="M512 336c220.912 0 400-50.144 400-112s-179.088-112-400-112S112 162.144 112 224s179.088 112 400 112z m0 54.128c207.732 0 378.48-40.568 398.116-92.472l-36.42 264.052C820.62 605.012 678.72 636 512 636c-166.72 0-308.62-30.988-361.696-74.292l-36.42-264.052C133.52 349.556 304.268 390.128 512 390.128zM512 700c157.312 0 292.528-27.592 351.872-67.084L832 864c0 44.184-143.268 80-320 80s-320-35.816-320-80l-31.872-231.084C219.472 672.408 354.688 700 512 700zM912 284l-0.132 0.968a25.208 25.208 0 0 0-0.064-0.544l-0.052-0.424H912zM112 284h0.248l-0.116 0.968L112 284z m400 276c22.092 0 40-17.908 40-40s-17.908-40-40-40-40 17.908-40 40 17.908 40 40 40z m40 264c0 22.092-17.908 40-40 40s-40-17.908-40-40 17.908-40 40-40 40 17.908 40 40z"
                    p-id="7652" fill="#ffffff"></path>
                </svg>桶数量</div>
            </div>
            <el-button @click="browse">预览<el-icon>
                <ArrowRight />
              </el-icon></el-button>
          </div>
          <div class="card-content">
            <p class="stat-number">{{ buckets }}</p>
          </div>
        </el-card>
        <!-- Servers 卡片 -->
        <el-card shadow="hover" class="card-block-top">
          <div class="card-header-this">

            <div><svg t="1749967470902" class="icon" viewBox="0 0 1024 1024" version="1.1"
                xmlns="http://www.w3.org/2000/svg" p-id="2327" width="200" height="200">
                <path
                  d="M755.2 839.68a34.304 34.304 0 1 1 36.352-34.304 34.816 34.816 0 0 1-36.352 34.304m-116.736 0a34.304 34.304 0 1 1 36.352-34.304 34.816 34.816 0 0 1-36.352 34.304z m-416.256-68.096h204.8v68.096h-204.8z m-55.296-81.92h-61.44v190.976a41.472 41.472 0 0 0 44.032 40.96h729.6a42.496 42.496 0 0 0 44.032-40.96v-190.976z m589.824-436.736A37.376 37.376 0 0 1 716.8 220.16a36.864 36.864 0 0 1 34.816-35.328 37.376 37.376 0 0 1 37.888 32.768 35.84 35.84 0 0 1-32.768 35.328z m-116.736 0a39.936 39.936 0 0 1-33.792-16.384 32.256 32.256 0 0 1 0-34.304 37.376 37.376 0 0 1 68.608 14.848 33.792 33.792 0 0 1-34.816 35.84zM222.208 184.32h204.8v68.608h-204.8zM861.696 102.4H167.936a59.904 59.904 0 0 0-61.44 57.344v175.104h819.2V159.744A61.952 61.952 0 0 0 861.696 102.4zM222.208 484.864h204.8v68.096h-204.8z m414.72 0a36.864 36.864 0 0 1 33.792 20.48 31.744 31.744 0 0 1-7.168 36.864 41.472 41.472 0 0 1-39.424 8.192 35.84 35.84 0 0 1-23.552-31.232 36.864 36.864 0 0 1 36.352-34.304z m116.736 0a37.376 37.376 0 0 1 37.888 32.768 36.864 36.864 0 0 1-34.816 35.328 37.376 37.376 0 0 1-37.888-32.768 35.84 35.84 0 0 1 34.816-35.328zM105.472 634.88H921.6V402.944H102.4z"
                  p-id="2328" fill="#ffffff"></path>
              </svg>服务器</div>
          </div>
          <div class="card-content status-counts">
            <div>
              <p class="stat-number">1 <span class="status-dot success"></span><span
                  style="font-size: medium;">在线</span></p>
            </div>
            <div>
              <p class="stat-number">0 <span class="status-dot error"></span> <span style="font-size: medium;">离线</span>
              </p>
            </div>
          </div>
        </el-card>

      </el-col>
      <!-- Objects & Drives 卡片 -->
      <el-col :span="8" class="card-block-tops">
        <el-card shadow="hover" class="card-block-top">
          <div class="card-header-this">
            <span><svg t="1749967716941" class="icon" viewBox="0 0 1024 1024" version="1.1"
                xmlns="http://www.w3.org/2000/svg" p-id="3411" width="200" height="200">
                <path
                  d="M186.181818 837.818182l325.818182 0 0 46.545455-325.818182 0 0-46.545455ZM837.818182 837.818182 837.818182 884.363636 930.909091 884.363636 930.909091 0 232.727273 0 232.727273 93.090909 279.272727 93.090909 279.272727 46.545455 884.363636 46.545455 884.363636 837.818182ZM186.181818 698.181818l512 0 0 46.545455-512 0 0-46.545455ZM93.090909 149.410909l0 864.814545C93.090909 1019.624727 97.373091 1024 102.679273 1024l678.958545 0C786.990545 1024 791.272727 1019.671273 791.272727 1014.225455L791.272727 149.410909C791.272727 144.011636 786.990545 139.636364 781.684364 139.636364L102.679273 139.636364C97.373091 139.636364 93.090909 143.965091 93.090909 149.410909zM139.636364 186.181818l605.090909 0 0 791.272727L139.636364 977.454545 139.636364 186.181818zM186.181818 279.272727l512 0 0 46.545455-512 0 0-46.545455ZM186.181818 418.909091l512 0 0 46.545455-512 0 0-46.545455ZM186.181818 558.545455l512 0 0 46.545455-512 0 0-46.545455Z"
                  fill="#ffffff" p-id="3412"></path>
              </svg>文件数量</span>
          </div>
          <div class="card-content">
            <p class="stat-number">{{ objects }}</p>
          </div>
        </el-card>
        <!-- Drives 卡片 -->
        <el-card shadow="hover" class="card-block-top">
          <div class="card-header-this">
            <span><svg t="1749967764939" class="icon" viewBox="0 0 1024 1024" version="1.1"
                xmlns="http://www.w3.org/2000/svg" p-id="4635" width="200" height="200">
                <path
                  d="M890.112 683.904l-107.52-432a63.936 63.936 0 0 0-62.08-48.512H304.128c-29.44 0-54.912 19.968-62.08 48.512l-107.52 432c-4.864 19.456-0.512 39.68 11.776 55.552s30.976 24.832 51.072 24.832h629.888c20.096 0 38.656-9.088 51.072-24.832s16.64-35.968 11.776-55.552zM291.84 264.448c1.408-5.632 6.528-9.6 12.416-9.6H720.64c5.888 0 10.88 3.968 12.416 9.6l62.592 251.52H640.384c-8.448 0-16.256 4.096-20.992 11.008l-45.696 65.792H437.376l-52.096-66.944a25.472 25.472 0 0 0-20.224-9.856H229.248l62.592-251.52z m546.176 443.52c-1.536 1.92-4.992 5.248-10.752 5.248H197.376a13.5936 13.5936 0 0 1-13.184-16.896l32.128-129.28h136.192l52.096 66.944c4.864 6.272 12.288 9.856 20.224 9.856h162.176c8.448 0 16.256-4.096 20.992-11.008l45.696-65.792h154.496l32.128 129.28c1.536 5.632-0.768 9.728-2.304 11.648z"
                  fill="#ffffff" p-id="4636"></path>
              </svg>磁盘</span>
          </div>
          <div class="card-content status-counts">
            <div>
              <p class="stat-number">1 <span class="status-dot success"></span><span
                  style="font-size: medium;">在线</span></p>
            </div>
            <div>
              <p class="stat-number">0 <span class="status-dot error"></span><span style="font-size: medium;">离线</span>
              </p>
            </div>
          </div>
        </el-card>
      </el-col>
      <!-- Reported Usage 卡片 -->
      <el-col :span="8">
        <el-card shadow="hover" class="card-report-usage">
          <div class="card-header-this">
            <div class="card-title">使用报告</div>
          </div>
          <div class="card-content">

            <div class="usage-display">
              <div class="usage-display-item">
                <p class="stat-number">{{ reportedUsage }} GB</p>
              </div>
              <div ref="reportedChart" class="usage-display-item">
              </div>
            </div>


            <div class="status-list">
              <div class="ReportedIterm"><el-icon>
                  <Stopwatch />
                </el-icon>上次维护时间 <span class="status-value"> 2025-04-16 15:32:21</span></div>
              <div class="ReportedIterm"><el-icon>
                  <Loading class="is-loading" />
                </el-icon> 上次扫描时间 <span class="status-value"> 2025-04-27 17:12:21</span></div>
              <div class="ReportedIterm"><el-icon>
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
    <el-card class="ServerInfo">
      <!-- 服务器列表 -->
      <div class="card-header" style="margin: -20px -20px 0px -20px;">服务器 (1)</div>
      <div class="card-block-server" shadow="hover">
        <div class="server-header"><span class="status-dot success"></span> 127.0.0.1:9000</div>
        <div class="server-metrics">
          <div><span class="status-dot success"></span> 1/1 设备</div>
          <div><span class="status-dot success"></span> 1/1 网络</div>
          <div><span class="status-dot success"></span> 6h 前更新</div>
        </div>
        <div class="version-text">Version: 2025-03-12T18:04:18Z</div>
      </div>

      <!-- 驱动器列表 -->
      <div class="drive-list-header">设备 (1)</div>
      <div class="card-block">
        <div class="drive-chart" ref="driveChart">
        </div>
        <div class="drive-info-details">
          <el-row>
            <p class="drive-name">设备名称: <br>/data</p>
          </el-row>
          <el-row getter="20">
            <el-col :span="4">
                <div style="border-right: 1px solid white; padding-right: 5px;">
                <p style="color: #3DA1FF; font-weight: bold;">
                  已使用:
                  <span >260.3 GB</span>
                  (<span style="color: #3DA1FF; font-weight: bold;">71.12%</span> / 366.0 GB)
                </p>
                </div>
            </el-col>
            <el-col :span="4" style="padding-left: 16px;">
              <p>可用空间: 105.7 GB (28.88% / 366.0 GB)</p>
            </el-col>
            <el-col :span="4" :offset="12">
              <p><span class="status-dot success"></span>在线设备</p>
            </el-col>
          </el-row>
        </div>
      </div>

    </el-card>
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
import { Stopwatch, Loading, Clock, ArrowRight } from '@element-plus/icons-vue';
import '@/assets/iconfont/iconfont.js'


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
@use '@/styles/icon.scss';

.card-title {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  color: white;
}
</style>
