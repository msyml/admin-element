<template>
  <div>
    <el-button @click="handleClick">上传文件</el-button>
    <input ref="uploadInput" style="display: none" type="file" @change="handleUpload" />
  </div>
</template>

<script lang="ts" setup>
  import { onMounted, ref, shallowRef } from 'vue';
  import * as XLSX from 'xlsx';


  const uploadInput = shallowRef<HTMLInputElement>();

  onMounted(() => {});
  const handleClick = () => {
    // !类型断言，能够通过编译检查
    uploadInput.value!.value = '';
    uploadInput.value!.click();
  };

  const handleUpload = (e: Event) => {
    const file = (e.target as HTMLInputElement).files?.[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      const bstr = event.target!.result;
      const wb = XLSX.read(bstr, { type: 'binary' }); // 这里使用type为binary
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      const data = XLSX.utils.sheet_to_json(ws, {
        header: 1,
        // blankrows: false,
      }); // 读取json格式
      formatData(data, file!.name, ws['!merges']!);
    };
    reader.readAsBinaryString(file!);
  };

  const formatData = (list: any[], name: string, merges: any[]) => {
    let arr = [];
    for (let i = 1; i < list.length; i++) {
      if (list[i].length > 0) {
        let obj = {};
        list[i].map((v: any, j: string | number) => {
          obj[list[0][j]] = v;
        });
        arr.push(obj);
      }
    }
    console.log({
      header: list[0],
      body: arr,
      name: name,
      merges: merges,
    });
  };
</script>

<style scoped lang="less"></style>
