import { createApp } from 'vue'
import './style.css'
import { createPinia } from 'pinia';
import App from './App.vue'


const app = createApp(App);
const pinia = createPinia();

app.use(pinia); // Tell Vue to use Pinia
app.mount('#app');
