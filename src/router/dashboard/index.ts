import { RouteRecordRaw } from 'vue-router';
import ReadExcelToTable from '@/views/tools/ReadExcelToTable.vue';

const router: RouteRecordRaw[] = [
  {
    path: '/index',
    component: ReadExcelToTable,
    meta: {
      label: '仪表盘',
      isMenu: 'true',
    },
  },
];

export default router;
