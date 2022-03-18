<template>
  <div>
    test
    <table class="table">
      <tr v-for="item in dataList" :key="item.name">
        <td v-for="key in Object.keys(item)" :key="key">
          {{ item[key] }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts" setup>
  import { onMounted, ref } from 'vue';

  const dataList = ref([
    {
      name: '罗勇',
      key: '1',
      nameFocus: false,
      test1: '测试文字测试文字测试文字',
      test2: '测试文字测试文字测试文字',
      test3: '测试文字测试文字测试文字',
      test4: '测试文字测试文字测试文字',
      test5: '测试文字测试文字测试文字',
      test6: '测试文字测试文字测试文字',
      test7: '测试文字测试文字测试文字',
      test8: '测试文字测试文字测试文字',
      test9: '测试文字测试文字测试文字',
      test10: '测试文字测试文字测试文字',
      test11: '测试文字测试文字测试文字',
      test12: '测试文字测试文字测试文字',
    },
    {
      name: '罗勇',
      key: '1',
      nameFocus: false,
      test1: '测试文字测试文字测试文字',
      test2: '测试文字测试文字测试文字',
      test3: '测试文字测试文字测试文字',
      test4: '测试文字测试文字测试文字',
      test5: '测试文字测试文字测试文字',
      test6: '测试文字测试文字测试文字',
      test7: '测试文字测试文字测试文字',
      test8: '测试文字测试文字测试文字',
      test9: '测试文字测试文字测试文字',
      test10: '测试文字测试文字测试文字',
      test11: '测试文字测试文字测试文字',
      test12: '测试文字测试文字测试文字',
    },
    {
      name: '罗勇',
      key: '1',
      nameFocus: false,
      test1: '测试文字测试文字测试文字',
      test2: '测试文字测试文字测试文字',
      test3: '测试文字测试文字测试文字',
      test4: '测试文字测试文字测试文字',
      test5: '测试文字测试文字测试文字',
      test6: '测试文字测试文字测试文字',
      test7: '测试文字测试文字测试文字',
      test8: '测试文字测试文字测试文字',
      test9: '测试文字测试文字测试文字',
      test10: '测试文字测试文字测试文字',
      test11: '测试文字测试文字测试文字',
      test12: '测试文字测试文字测试文字',
    },
    {
      name: '罗勇',
      key: '1',
      nameFocus: false,
      test1: '测试文字测试文字测试文字',
      test2: '测试文字测试文字测试文字',
      test3: '测试文字测试文字测试文字',
      test4: '测试文字测试文字测试文字',
      test5: '测试文字测试文字测试文字',
      test6: '测试文字测试文字测试文字',
      test7: '测试文字测试文字测试文字',
      test8: '测试文字测试文字测试文字',
      test9: '测试文字测试文字测试文字',
      test10: '测试文字测试文字测试文字',
      test11: '测试文字测试文字测试文字',
      test12: '测试文字测试文字测试文字',
    },
    {
      name: '罗勇',
      key: '1',
      nameFocus: false,
      test1: '测试文字测试文字测试文字',
      test2: '测试文字测试文字测试文字',
      test3: '测试文字测试文字测试文字',
      test4: '测试文字测试文字测试文字',
      test5: '测试文字测试文字测试文字',
      test6: '测试文字测试文字测试文字',
      test7: '测试文字测试文字测试文字',
      test8: '测试文字测试文字测试文字',
      test9: '测试文字测试文字测试文字',
      test10: '测试文字测试文字测试文字',
      test11: '测试文字测试文字测试文字',
      test12: '测试文字测试文字测试文字',
    },
    {
      name: '罗勇',
      key: '1',
      nameFocus: false,
      test1: '测试文字测试文字测试文字',
      test2: '测试文字测试文字测试文字',
      test3: '测试文字测试文字测试文字',
      test4: '测试文字测试文字测试文字',
      test5: '测试文字测试文字测试文字',
      test6: '测试文字测试文字测试文字',
      test7: '测试文字测试文字测试文字',
      test8: '测试文字测试文字测试文字',
      test9: '测试文字测试文字测试文字',
      test10: '测试文字测试文字测试文字',
      test11: '测试文字测试文字测试文字',
      test12: '测试文字测试文字测试文字',
    },
    {
      name: '罗勇',
      key: '1',
      nameFocus: false,
      test1: '测试文字测试文字测试文字',
      test2: '测试文字测试文字测试文字',
      test3: '测试文字测试文字测试文字',
      test4: '测试文字测试文字测试文字',
      test5: '测试文字测试文字测试文字',
      test6: '测试文字测试文字测试文字',
      test7: '测试文字测试文字测试文字',
      test8: '测试文字测试文字测试文字',
      test9: '测试文字测试文字测试文字',
      test10: '测试文字测试文字测试文字',
      test11: '测试文字测试文字测试文字',
      test12: '测试文字测试文字测试文字',
    },
    {
      name: '罗勇',
      key: '1',
      nameFocus: false,
      test1: '测试文字测试文字测试文字',
      test2: '测试文字测试文字测试文字',
      test3: '测试文字测试文字测试文字',
      test4: '测试文字测试文字测试文字',
      test5: '测试文字测试文字测试文字',
      test6: '测试文字测试文字测试文字',
      test7: '测试文字测试文字测试文字',
      test8: '测试文字测试文字测试文字',
      test9: '测试文字测试文字测试文字',
      test10: '测试文字测试文字测试文字',
      test11: '测试文字测试文字测试文字',
      test12: '测试文字测试文字测试文字',
    },
  ]);

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
