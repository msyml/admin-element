import { RouteRecordRaw } from 'vue-router';
import BillChart from '@/views/charts/billChart.vue';

const router: RouteRecordRaw[] = [
  {
    path: '/bill',
    component: BillChart,
    meta: {
      label: '消费可视化',
      isMenu: 'true',
    },
  },
];

export default router;
