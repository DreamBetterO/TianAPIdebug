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
    text: '行为占比',
    subtext: 'Fake Data',
    left: 'center',
    top: '3%'
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    left: 'left'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: '50%',
      data: [
        { value: 1048, name: '下载' },
        { value: 735, name: '查看' },
        { value: 580, name: '分享' },
        { value: 484, name: '删除' },
        { value: 300, name: '上传' }
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
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
  name: 'PieChart',
};
</script>

<style scoped lang="scss">
@use "../index.scss";
</style>
