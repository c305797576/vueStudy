import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);
// import Home from '../components/Home.vue';
// import List from '../components/List.vue';
// import Detail from '../components/Detail.vue';
// import Collect from '../components/Collect.vue';
// import Add from '../components/Add.vue';

// export default new Router({
//   routes: [
//     {path:'/',redirect:'/home'},
//     {path:'/home',component:Home,meta:{keepAlive:true}},
//     {path:'/list',component:List},
//     {path:'/detail/:bid',component:Detail,name:'detail'},
//     {path:'/collect',component:Collect},
//     {path:'/add',component:Add},
//     {path:'*',redirect:'/home'},
//   ]
// })

export default new Router({
  routes: [
    {path: '/', redirect: '/home'},
    {
      path: '/home',
      component: () => import('../components/Home.vue'),
      meta: {keepAlive: true,title:'首页'}
    },
    {
      path: '/list',
      component: () => import('../components/List.vue')},
    {
      path: '/detail/:bid',
      component: () => import('../components/Detail.vue'),
      name: 'detail'},
    {
      path: '/collect',
      component: () => import('../components/Collect.vue')},
    {
      path: '/add',
      component: () => import('../components/Add.vue')},
    {path: '*', redirect: '/home'}
  ]
})
