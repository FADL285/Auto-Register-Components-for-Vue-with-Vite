import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import GlobalComponents from './globals';

createApp(App).use(GlobalComponents).mount('#app');
