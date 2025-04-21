import { onUnmounted } from 'vue';
import type { EChartsType } from 'echarts/core';
import type { EChartsCoreOption } from 'echarts';

/**
 * @description 使用 ECharts（添加图表响应式）
 * @param myChart ECharts 实例（必传）
 * @param option 绘制 ECharts 的参数（必传）
 */
export const useEcharts = (myChart: EChartsType, option: EChartsCoreOption) => {
  if (option && typeof option === 'object') {
    // 设置图表的配置项和数据
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
