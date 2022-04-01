import { RouteRecordRaw } from 'vue-router';
import Person from '@/views/person/Index.vue';
import ReadExcelToTable from '@/views/tools/ReadExcelToTable.vue';

const router: RouteRecordRaw[] = [
  {
    path: '/bill',
    component: ReadExcelToTable,
    meta: {
      label: '账单管理',
      isMenu: true,
    },
  },
  {
    path: '/person',
    component: Person,
    meta: {
      label: '个人信息',
      isMenu: false,
    }
  },
];

export default router;
