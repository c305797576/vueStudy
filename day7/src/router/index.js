import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/home.vue';
import List from '../components/list.vue';
Vue.use(VueRouter);//引入router必须使用use
let routes=[
    {path:'/home',component:Home},
    {path:'/list',component:List},
];
export default new VueRouter({
    routes
});