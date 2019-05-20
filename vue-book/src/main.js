// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//轮播图插件
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
import VueLazyLoad from 'vue-lazyload';
Vue.config.productionTip = false;
Vue.use(VueAwesomeSwiper);
Vue.use(VueLazyLoad,{
  preLoad: 1.3,
  error: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3982029889,2478115047&fm=26&gp=0.jpg',
  loading:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558344985564&di=c366e518a7a32bd86479788d43034f22&imgtype=0&src=http%3A%2F%2Fimg.ui.cn%2Fdata%2Ffile%2F2%2F7%2F4%2F2082472.gif%3FimageMogr2%2Fauto-orient%2Fstrip%2Fthumbnail%2F%25211800%253E',
  attempt: 1
});
//全局钩子
router.beforeEach(function (to,from,next) {
  document.title=to.meta.title;
  next();
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
