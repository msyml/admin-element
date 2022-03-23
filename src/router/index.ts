import { App } from 'vue';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Layout from '@/layout/index.vue';
import tools from './tools';
import test from './test';
import charts from './charts';

const constantRouter: RouteRecordRaw[] = [
  {
    path: '',
    component: Layout,
    children: [
      ...tools,
    ],
  },
  ...test,
  ...charts,
];

const router = createRouter({
  history: createWebHistory(),
  routes: constantRouter,
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

export function setupRouter(app: App) {
  app.use(router);
}

export default router;
