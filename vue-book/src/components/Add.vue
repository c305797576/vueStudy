<template>
    <div>
      <MHeader :back="false">添加</MHeader>
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
            <label for="bookCorver">书的价格</label>
            <input type="text" v-model="book.bookCorver" id="bookCorver">
          </li>
          <li>
            <button @click="add">添加</button>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
  import MHeader from '../base/MHeader.vue';
  import {addBook} from '../api'
    export default {
        data() {
            return {
              book:{}
            }
        },
        methods: {
          async add(){
            await addBook(this.book);
            this.$router.push('/list')
          }
        },
        computed: {},
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
