import { createRouter, createWebHashHistory } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
import Products from './components/Products/Products.vue';

const routes = [
  {
    path: '/',
    component: Products,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
