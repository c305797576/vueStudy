<template>
  <div>
    <MHeader :back="false">首页</MHeader>
    <div class="content">
      <Loading v-if="loading"></Loading>
      <template v-else>
        <Swiper :swiperSlides="sliders"></Swiper>
        <div class="container">
          <h3>热门图书</h3>
          <ul>
            <li v-for="(hot,index) in hotBook" :key="index">
              <img :src="hot.bookCorver" alt="">
            </li>
          </ul>
        </div>
      </template>


    </div>

  </div>
</template>

<script>
  import MHeader from '../base/MHeader.vue';
  import Swiper from '../base/Swiper.vue';
  import {getSliders, getHot, getAll} from '../api';//没写文件默认找index
  import Loading from '../base/loading.vue'
  export default {
    data() {
      return {
        sliders: [],
        hotBook: [],
        loading:true
      }
    },
    created() {
//      this.getSwiper();//获取轮播图
//      this.getHotBook();//获取热门图书
      this.getData();
    },
    methods: {
      async getSwiper() {
        //给data起别名，对象中的属性名必须和得到的结果一致 将获取的数据放到sliders中
        this.sliders = await getSliders();
      },
      async getHotBook() {
        this.hotBook = await getHot();
      },
      async getData(){
        let [slider,hotBook]=await getAll();
        this.sliders=slider;
        this.hotBook=hotBook;
        this.loading=false;
      }
    },
    computed: {},
    components: {
      MHeader, Swiper,Loading
    }
  }
</script>

<style scoped lang="less">
  h3 {
    color: #999;
    padding: 5px 0;
    text-align: center;
  }

  .container {
    width: 90%;
    margin: 0 auto;
    ul {
      display: flex;
      flex-wrap: wrap;
      padding-bottom: 10px;
      li {
        width: 50%;
        margin: 5px 0;
        img {
          width: 100%;
        }
      }
    }

  }
</style>
