import { createApp } from 'vue'
import './assets/css/main.css'
import App from './App.vue'
import router from './routes'
import { createPinia } from 'pinia'

const pinia = createPinia();

createApp(App)
    .use(pinia)
    .use(router)
    .mount('#app')
