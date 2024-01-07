import './assets/styles.scss';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import ElementPlus from 'element-plus';
import VWave from 'v-wave';
import App from './App.vue';
import router from './router';
import 'element-plus/dist/index.css';

const app = createApp(App);

app.use(ElementPlus);
app.use(createPinia());
app.use(VWave, {
  initialOpacity: 0.1,
  easing: 'ease-in'
});
app.use(router);

app.mount('#app');
