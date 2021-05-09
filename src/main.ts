import { createApp } from 'vue'
import * as FullStory from '@fullstory/browser';
import App from './App.vue'
import './index.css'

FullStory.init({ orgId: import.meta.env.VITE_APP_FULLSTORY_ORG as string });

const app = createApp(App);
app.config.globalProperties.$FullStory = FullStory;

createApp(App).mount('#app')
