// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css'; // 确保此行存在且路径正确

createApp(App)
  .use(router)
  .use(Antd)
  .mount('#app');