<template>
  <div ref="echartsRef" class="content-box"></div>
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
      top: '3%',
      padding: [0, 0, 0, 0] // 增加与后面内容的间距
      },
      legend: {
      data: ['数据下载量'],
      top: 'bottom'
      },
      radar: {
      indicator: [
        { name: 'zip' },
        { name: 'txt'},
        { name: 'png'},
        { name: 'video'}
      ]
      },
      series: [
      {
        name: 'Budget vs spending',
        type: 'radar',
        label: {
        show: true, // 显示数据值
        },
        data: [
        {
          value: [4200, 3000, 20000, 35000],
          name: '数据下载量'
        }
        ]
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
  name: 'RadarChart',
};
</script>

<style scoped lang="scss">
@use "../index.scss";
</style>
