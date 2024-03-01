import { createApp } from 'vue'
import App from './App.vue'
import store from './helpers/global';
import Vuex from 'vuex';

import router from './router/router.js'
createApp(App).use(router,store,Vuex).mount('#app')