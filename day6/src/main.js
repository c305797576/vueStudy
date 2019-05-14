// import Vue from 'vue/dist/vue.js';
import Vue from 'vue';
//泽洋直接引用vue 引用的并不是vue.js 引用的是vue的RUNTIME
//vue=compiler+runtime  (compiler可以编译模板)
//compiler有6k
import App from './App.vue'

console.log(App);
new Vue({
    render:(c)=>c(App)
}).$mount('#app');

/**
 * new Vue({
    render:function (createElement) {
        return createElement(App)
    }
}).$mount('#app');
 */