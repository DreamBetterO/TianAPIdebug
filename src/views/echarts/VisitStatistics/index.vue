<template>
  <div ref="echartsRef" class="content-box horizontal-layout"></div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import type { EChartsType } from 'echarts/core';
import { type ECOption, echarts } from '@/utils/echarts/index'; // 引入 ECharts 类型
import { useEcharts } from "@/hooks/useEcharts";

const echartsRef = ref<HTMLElement>();

onMounted(() => {
  if (echartsRef.value) {
    // 初始化图表实例
    const myChart: EChartsType = echarts.init(echartsRef.value as HTMLElement);

    // 设置图表的配置项和数据
    const option: ECOption = {
      title: {
      text: '数据下载统计',
      left: 'center',
      top: '3%'
      },
      xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
      type: 'value'
      },
      series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line',
        label: {
        show: true, // 显示数值
        position: 'top' // 数值显示在顶部
        }
      }
      ]
    };

    // 使用封装的 useEcharts
    useEcharts(myChart, option);
  } else {
    console.error('echartsRef is not bound to a DOM element.');
  }
});
</script>

<script lang="ts">
export default {
  name: 'LineChart',
};
</script>

<style scoped lang="scss">
@use "../index.scss";

.content-box {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
}
</style>
