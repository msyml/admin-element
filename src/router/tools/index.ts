import { RouteRecordRaw } from 'vue-router';
import ReadExcelToTable from '@/views/tools/ReadExcelToTable.vue';

const router: RouteRecordRaw[] = [
  {
    path: '/readExcel',
    component: ReadExcelToTable,
    meta: {
      label: 'Excel',
      isMenu: 'true',
    },
  },
];

export default router;
