import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import notify from './plugin/notify';
Vue.use(notify);
new Vue({
   el:'#app',
    render:h=>h(App),
    router
});