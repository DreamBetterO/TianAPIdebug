import './assets/main.css'
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus';

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { zhCn } from 'element-plus/es/locales.mjs';

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus,
  { locale: zhCn}) //全局配置ElementPlus组件的大小和z-index

app.mount('#app')
