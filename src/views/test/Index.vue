<template>
  <div>
    <el-table :data="dataList">
      <el-table-column label="name">
        <template #default="scope">
            <el-tooltip manual v-model="scope.row.nameFocus" :content="scope.row.name">
              <el-input v-model="scope.row.name"/>
            </el-tooltip>
        </template>
      </el-table-column>
      <el-table-column prop="key"></el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts" setup>
  import { onMounted, ref } from 'vue';

  const dataList = ref([
      { name: '罗勇', key: '1', nameFocus: false },
      { name: '孟涛', key: '2', nameFocus: false },
      { name: '田刚', key: '3', nameFocus: false },
      { name: '苏霞', key: '4', nameFocus: false },
  ]);

  onMounted(() => {});
</script>

<style scoped lang="less"></style>
