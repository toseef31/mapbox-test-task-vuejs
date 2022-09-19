import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import 'mutationobserver-shim'
import VueMapboxTs from "vue-mapbox-ts";
import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

createApp(App).use(router).use(router).use(store).use(VueMapboxTs).mount('#app')
