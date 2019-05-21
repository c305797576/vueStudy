<template>
    <div>
      <MHeader :back="false">收藏</MHeader>
      <ul class="content">
          <li v-for="book in cartList">
            <img :src="book.bookCorver" alt="">
            <h3>{{book.bookName}}</h3>
            <button @click="dec(book.bookId)">-</button>{{book.bookCount}}<button @click="add(book)">+</button>
            <p>{{book.bookPrice*book.bookCount}}</p>
            <button @click="del(book)">删除</button>
          </li>
        <li>共{{count}}本</li>
        <li><button @click="clear">清空购物车</button></li>
      </ul>
    </div>
</template>

<script>
  import MHeader from '../base/MHeader.vue';
  import * as Types from '../store/mutations-type';
  import {mapState,mapGetters} from 'vuex';
    export default {
        data() {
            return {}
        },
        methods: {
          add(book){
            this.$store.commit(Types.ADD_CART,book)
          },
          del(book){
            this.$store.commit(Types.REMOVE_CART,book)
          },
          dec(bookId){
            this.$store.commit(Types.CHANGE_CART,bookId,-1)
          },
          clear(){
            this.$store.commit(Types.CLEAR_CART)
          }
        },
        computed: {
          ...mapState(['cartList']),
          ...mapGetters(['count'])
        },
        components: {
          MHeader
        }
    }
</script>

<style scoped>

</style>
