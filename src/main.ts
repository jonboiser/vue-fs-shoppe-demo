import { createApp } from 'vue';
import * as FullStory from '@fullstory/browser';
import App from './App.vue';
import router from './router';
import './index.css';

try {
  FullStory.init({ orgId: import.meta.env.VITE_APP_FULLSTORY_ORG as string });
} catch (err) {
  console.error('FullStory failed to initialize');
  console.error(err);
}

const app = createApp(App);

app.use(router);

app.config.globalProperties.$FullStory = FullStory;

app.mount('#app');
