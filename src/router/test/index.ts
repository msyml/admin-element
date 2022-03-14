import { RouteRecordRaw } from 'vue-router';
import Index from '@/views/test/Index.vue';

const router: RouteRecordRaw[] = [
  {
    path: '/test',
    component: Index,
    meta: {
      label: '测试奇奇怪怪的东西',
      isMenu: 'true',
    },
  },
];

export default router;
