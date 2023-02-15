import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'
import 'virtual:windi.css'
import 'animate.css'
import router from './router'
import { createPinia } from 'pinia'
import './router/permission.js'
import App from './App.vue'

const pinia = createPinia()
const app = createApp(App)

app.config.globalProperties.$serveURL = 'http://127.0.0.1:8081'

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(pinia)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
