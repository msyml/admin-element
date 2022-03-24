<template>
  <div> <my-chart :chart-option="chartOption"></my-chart> </div>
</template>

<script lang="ts" setup>
  import { onMounted, reactive, ref } from 'vue';
  import MyChart from '@/components/MyCharts.vue';

  const chartOption = ref<any>({});

  onMounted(() => {
    initChart();
  });

  const initChart = () => {
    const monthArr = [];
    const numberArr = [];
    for (let i = 1; i < 13; i++) {
      monthArr.push(`${i}月`);
      numberArr.push(Math.random() * 1000);
    }
    // 销售额趋势表单
    chartOption.value = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      title: {
        text: '销售额趋势',
      },
      color: '#3ba1ff',
      xAxis: {
        type: 'category',
        data: monthArr,
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: numberArr,
          type: 'bar',
        },
      ],
    };
  };
</script>

<style scoped lang="less"></style>
