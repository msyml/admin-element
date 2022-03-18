<template>
  <div>
    test
    {{ counterStore.count }}
    {{ counterStore.doubleCount }}
    <el-button @click="counterStore.add">++</el-button>
    <!-- <table class="table">
      <tr v-for="item in dataList" :key="item.name">
        <td v-for="key in Object.keys(item)" :key="key">
          {{ item[key] }}
        </td>
      </tr>
    </table> -->
  </div>
</template>

<script lang="ts" setup>
  import { onMounted, ref } from 'vue';
  import { userStore } from '@/store/modules/index';

  const dataList = ref();

  const counterStore = userStore()


  onMounted(() => {});
</script>

<style scoped lang="less">
  .table {
    // 布局单元格方式
    width: 1920px;
    table-layout: fixed;
  }

  // 定义每行首列
  td:first-child,
  th:first-child {
    // 布局方式：粘性，粘在左侧
    position: sticky;
    left: 0; /* 首行在左 */
    // 设置z轴层级
    z-index: 1;
    // 背景颜色
    background-color: white;
  }
</style>
