<template>
  <div class="detail">
    <MHeader :back="true">详情</MHeader>
    <div class="content">
      <ul>
        <li>
          <label for="bookName">书名</label>
          <input type="text" v-model="book.bookName" id="bookName">
        </li>
        <li>
          <label for="bookInfo">书的信息</label>
          <input type="text" v-model="book.bookInfo" id="bookInfo">
        </li>
        <li>
          <label for="bookPrice">书的价格</label>
          <input type="text" v-model.number="book.bookPrice" id="bookPrice">
        </li>
        <li>
          <button @click="change">修改</button>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
  import MHeader from '../base/MHeader.vue';
  import {findBook,updateBook} from '../api';
  export default {
    data() {
      return {
        book:{}
      }
    },
    watch:{
      $route(){
        this.finOneBook();
      }
    },
    created() {
      this.finOneBook();
    },
    methods: {
      async finOneBook(){
        this.book=await findBook(this.bid);
        //如果是空对象，跳转回列表
        Object.keys(this.book).length>0?void 0:this.$router.push('/list')

      },
      async change(){
        await updateBook(this.bid,this.book)
        this.$router.push('/list')
      }
    },
    computed: {
      bid() {
        return this.$route.params.bid;//将路径参数映射到bid上
      }
    },
    components: {
      MHeader
    }
  }
</script>

<style scoped lang="less">
  .detail {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: white;
    z-index: 99;
  }
  ul{
    margin: 50px 10px 0 10px;
    li{
      label{
        display: block;
        font-size: 25px;
      }
      input{
        margin: 10px 0;
        height: 25px;
        width: 100%;
      }
      button{
        display: block;
        width: 80px;
        height: 30px;
        background: orange;
        border: none;
        color: white;
        border-radius: 5px;
        outline: none;
      }
    }
  }
</style>
