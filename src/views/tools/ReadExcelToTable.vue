<template>
  <div>
    <el-button @click="handleClick">上传文件</el-button>
    <el-button @click="handleGenerate">生成表单代码(正泰)</el-button>
    <input ref="uploadInput" style="display: none" type="file" @change="handleUpload" />
    <el-table :data="tableData">
      <el-table-column
        v-for="item in columns"
        :key="item"
        :label="item"
        :prop="item"
      ></el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts" setup>
  import { onMounted, ref, shallowRef } from 'vue';
  import * as XLSX from 'xlsx';
  import { obj2String } from '@/common/Utils';
  import { ImportForm, OptionType, FormItem } from './types';

  const tableData = ref<ImportForm[]>();
  const columns = ref<[]>();
  const formCode = ref<{}>();
  const uploadInput = shallowRef<HTMLInputElement>();

  onMounted(() => {});
  // 点击事件
  const handleClick = () => {
    // !类型断言，能够通过编译检查
    uploadInput.value!.value = '';
    uploadInput.value!.click();
  };

  // 处理上传事件
  const handleUpload = (e: Event) => {
    const file = (e.target as HTMLInputElement).files?.[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      const bstr = event.target!.result;
      const wb = XLSX.read(bstr, { type: 'binary' }); // 这里使用type为binary
      const worksheetName = wb.SheetNames[0];
      const ws = wb.Sheets[worksheetName];
      const data = XLSX.utils.sheet_to_json(ws, {
        header: 1,
      }); // 读取json格式
      formatData(data, file!.name, ws['!merges']!);
    };
    reader.readAsBinaryString(file!);
  };

  // 格式化数据
  const formatData = (list: any[], name: string, merges: any[]) => {
    let arr: ImportForm[] = [];
    for (let i = 1; i < list.length; i++) {
      if (list[i].length > 0) {
        let obj: ImportForm = {
          form: '',
          label: '',
          key: '',
          type: '',
        };
        list[i].map((v: any, j: string | number) => {
          obj[list[0][j]] = v;
        });
        arr.push(obj);
      }
    }
    columns.value = list[0];
    tableData.value = arr;
    console.log({
      // 表格头
      header: list[0],
      // 表格数据
      body: arr,
      // 文件名
      name: name,
      merges: merges,
    });
  };

  // 生成代码按钮点击事件
  const handleGenerate = () => {
    formCode.value = {};
    tableData.value?.forEach((row) => {
      // console.log(row, getFormItem(row));
      // formCode.value![row.key] = getFormItem(row);
      // console.log(formCode.value![row.form]);
      // console.log({ [row.key]: getFormItem(row) });
      if (!formCode.value![row.form]) {
        formCode.value![row.form] = {};
      }
      Object.assign(formCode.value![row.form], { [row.key]: getFormItem(row) });
    });
    console.log('formCode.value', formCode.value);
  };

  // 获取表单Items
  const getFormItem = ({ label, key, type, required, memo }: ImportForm) => {
    let res = '',
      obj: FormItem = {
        label: '',
        type: '',
        editable: true,
      };
    obj.label = label;
    if (required === '是') {
      obj.required = true;
    }
    switch (type) {
      case '多选':
        obj.multiple = true;
      case '选择':
        let options = '';
        if (memo && memo.split('、').length > 0) {
          memo.split('、').forEach((row) => {
            const obj = new OptionType(row, row);
            options += obj.toString() + ',';
          });
        }
        obj.type = 'select';
        obj.optionParams = "{ label: 'dictLabel', value: 'dictValue}";
        obj.options = options.length > 0 ? '[' + options + ']' : '[]';
        break;
      case '日期':
        obj.type = 'date';
        break;
      case '级联':
        obj.type = 'cascader';
        break;
      case '搜索':
        obj.type = 'autocomplete';
        obj.onSelect = `(item) => this.onSelect${key}(item)`;
        obj.onBlur = `(item) => this.onBlur${key}(item)`;
        obj.template = `(data) => \`a b\``;
        obj.optionParams = "{ label: 'dictLabel', value: 'dictValue}";
        break;
      case '文本':
      default:
        obj.type = 'text';
        break;
    }
    res = obj2String(obj);
    return res;
  };
</script>

<style scoped lang="less"></style>
