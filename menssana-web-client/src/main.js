import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mixins from "@/plugins/mixins";


createApp(App).use(router).use(store).mixin(mixins).mount('#app')

