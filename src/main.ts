import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

// ElementPlus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import i18n from '@/lang/index'


import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(ElementPlus) // ElementPlus

app.use(i18n)

app.mount('#app')

app.config.globalProperties.$t = i18n.global.t

