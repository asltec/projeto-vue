import { createApp } from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import App from './App.vue'
import router from './router'



createApp(App).use(router, BootstrapVue, IconsPlugin).mount('#app')

