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
      legend: {
      data: ['数据下载量'],
      right: 0,
      bottom: 0,
      textStyle: {
        color: 'white', // 设置图例文字颜色
        fontSize: 14 // 设置图例文字大小
      }
      },
      radar: {
      indicator: [
        { name: 'zip' },
        { name: 'txt'},
        { name: 'png'},
        { name: 'video'}
      ],
      splitLine: {
        lineStyle: {
        color: 'rgba(0,0,0,0.1)' // 降低背景线条透明度
        }
      },
      // splitArea: {
      //   areaStyle: {
      //   opacity: 0 // 可选：去除分割区域填充色
      //   }
      // },
      // axisLine: {
      //   lineStyle: {
      //   color: 'rgba(0,0,0,0.2)' // 轴线也可降低透明度
      //   }
      // }
      },
      series: [
      {
        name: '下载类别',
        type: 'radar',
        label: {
        show: true, // 显示数据值
        },
        lineStyle: {
        color: '#FF5722' // 设置数据线条颜色
        },
        data: [
        {
          value: [4200, 3000, 20000, 35000],
          name: '数据下载量',
          lineStyle: {
          color: '#FF5722' // 单独设置该数据线条颜色
          }
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
