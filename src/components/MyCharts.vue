<template>
  <div ref="container" :style="{ height: props.height, width: props.width }"> </div>
</template>

<script lang="ts" setup>
  import { onMounted, onUnmounted, ref, watch } from 'vue';
  // 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
  import * as echarts from 'echarts/core';
  // 根据要使用的图表按需引入
  import { BarChart, PieChart } from 'echarts/charts';
  // 引入提示框，标题，直角坐标系，数据集，内置数据转换器组件，组件后缀都为 Component
  import {
    TitleComponent,
    TooltipComponent,
    GridComponent,
    DatasetComponent,
    TransformComponent,
    LegendComponent,
  } from 'echarts/components';
  // 标签自动布局，全局过渡动画等特性
  import { LabelLayout, UniversalTransition } from 'echarts/features';
  // 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
  import { CanvasRenderer } from 'echarts/renderers';

  // 注册必须的组件（引入新图表后需在此注册）
  echarts.use([
    TitleComponent,
    TooltipComponent,
    GridComponent,
    DatasetComponent,
    TransformComponent,
    BarChart,
    PieChart,
    LabelLayout,
    UniversalTransition,
    CanvasRenderer,
    LegendComponent,
  ]);

  const container = ref<any>();
  const chart = ref<any>();
  const emit = defineEmits(['click']);

  const props = defineProps({
    width: {
      type: String,
      default: '600px',
    },
    height: {
      type: String,
      default: '400px',
    },
    autoResize: {
      type: Boolean,
      default: false,
    },
    chartOption: {
      type: Object,
      required: true,
    },
    type: {
      type: String,
      default: 'canvas',
    },
    defaultCheck: {
      type: Boolean,
      default: false,
    },
  });

  // 创建
  onMounted(() => {
    console.log('onMounted');
    initChart();
    if (props.autoResize) {
      window.addEventListener('resize', resizeHandler);
    }
  });
  // 销毁
  onUnmounted(() => {
    console.log('onUnmounted');
    if (!chart.value) {
      return;
    }
    if (props.autoResize) {
      window.removeEventListener('resize', resizeHandler);
    }
    chart.value.dispose();
    chart.value = null;
  });

  watch(props.chartOption, (newValue, oldValue) => {
    refresh();
  });

  //   重绘
  const resizeHandler = () => {
    if (container.value) {
      container.value.resize();
    }
  };

  const initChart = () => {
    if (chart.value) {
      chart.value.dispose();
      chart.value = null;
    }
    chart.value = echarts.init(container.value);
    chart.value.setOption(props.chartOption);
    chart.value.on('click', handleClick);
  };

  const handleClick = () => {
    emit('click');
  };

  const setOptions = (options: Object) => {
    clearChart();
    resizeHandler();
    chart.value && chart.value.setOptions(options);
  };

  const clearChart = () => {
    chart.value && chart.value.clear();
  };

  const refresh = () => {
    setOptions(props.chartOption);
  };
</script>

<style scoped lang="less"></style>
