import { createApp } from 'vue'
import './style.css'
import 'primeicons/primeicons.css'
import router from './components/router/index'
import App from './App.vue'
import 'animate.css';

createApp(App).use(router).mount('#app')
