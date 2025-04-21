<template>
  <div ref="echartsRef" class="content-box"></div>
</template>

<script lang="ts">
export default {
  name: "columnChart"
};
</script>


<script setup lang="ts">
import { ref, onMounted } from "vue";
import * as echarts from 'echarts/core'
import { ECOption } from '@/utils/echarts/index'; // 引入 ECharts 类型
import { useEcharts } from "@/hooks/useEcharts";
const echartsRef = ref<HTMLElement>();
onMounted(() => {
  const myChart: echarts.ECharts = echarts.init(echartsRef.value as HTMLElement); // 初始化图表实例
  // 设置图表的配置项和数据
  const option: ECOption = {
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
      type: 'line'
    }
  ]
  };
  useEcharts(myChart, option);
});
</script>

<style scoped lang="scss">
@import "../index.scss";
</style>
