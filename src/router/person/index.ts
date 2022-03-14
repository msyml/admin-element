import { RouteRecordRaw } from 'vue-router';
import ReadExcelToTable from '@/views/tools/ReadExcelToTable.vue';

const router: RouteRecordRaw[] = [
  {
    path: '/bill',
    component: ReadExcelToTable,
    meta: {
      label: '账单管理',
      isMenu: 'true',
    },
  },
];

export default router;
