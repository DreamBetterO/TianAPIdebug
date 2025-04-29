import { onUnmounted } from 'vue';
import type { EChartsType } from 'echarts/core';
import type { EChartsCoreOption } from 'echarts';
import { LegendComponent } from 'echarts/components';
import * as echarts from 'echarts/core';

// 使用 LegendComponent
echarts.use([LegendComponent]);

/**
 * @description 使用 ECharts（添加图表响应式）
 * @param myChart ECharts 实例（必传）
 * @param option 绘制 ECharts 的参数（必传）
 */
export const useEcharts = (myChart: EChartsType, option: EChartsCoreOption) => {
  if (option && typeof option === 'object') {
    // 设置图表的配置项和数据
    if (option.yAxis) {
      option.yAxis = {
        ...option.yAxis,
        min: 0,
        max: 52000,
        interval: 10000, // 设置刻度间隔，确保刻度标签可读
        alignTicks: false, // 禁用 alignTicks，避免刻度对齐问题
      };
    }
    myChart.setOption(option);
  }
  const echartsResize = () => {
    // 解决图表在窗口大小改变时不自动适应的问题
    if (myChart) {
      myChart.resize();
    }
  };

  window.addEventListener('resize', echartsResize, false); // 监听窗口大小改变事件

  onUnmounted(() => {
    // 组件卸载时，移除事件监听器
    window.removeEventListener('resize', echartsResize);
  });
};
