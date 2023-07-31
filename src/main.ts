import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import i18n from '@/lang/index'

// ElementPlus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// Quasar
// import { Quasar } from 'quasar'
// import '@quasar/extras/material-icons/material-icons.css'
// import 'quasar/src/css/index.sass'
// import langDe from 'quasar/lang/de'

// bootstrap 
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(ElementPlus) // ElementPlus
// app.use(Quasar, {
//   lang: langDe,
//   plugins: {}, // import Quasar plugins and add here
// })

app.use(i18n)

app.mount('#app')

app.config.globalProperties.$t = i18n.global.t

