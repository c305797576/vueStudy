<template>
  <div>
    <MHeader :back="false">列表</MHeader>
    <div class="content" ref="scroll" @scroll="loadMore">
      <ul>
        <router-link v-for="(book,index) in books" :to="{name:'detail',params:{bid:book.bookId}}" :key="index" tag="li">
          <img v-lazy="book.bookCorver" alt="">
          <div>
            <h4>{{book.bookName}}</h4>
            <p>{{book.bookInfo}}</p>
            <b>{{book.bookPrice}}</b>
            <button @click.stop="remove(book.bookId)">删除</button>
          </div>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
  import MHeader from '../base/MHeader.vue';
  import {getBooks,removeBook,paginate} from '../api';

  export default {
    data() {
      return {
        books:[],
        offset:0,
        hasMore:true
      }
    },
    created() {
      this.getPage();
    },
    methods: {
      loadMore(){
        clearTimeout(this.timer);
        this.timer=setTimeout( ()=>{
          let {scrollTop,clientHeight,scrollHeight}=this.$refs.scroll;
          console.log(111);
          if (scrollTop+clientHeight+20>scrollHeight){
            this.getPage();
          }
        },20);

      },
      async getData(){
        this.books=await getBooks();
      },
      async remove(id){
        await removeBook(id);
        this.books=this.books.filter(item=>item.bookId!==id)
      },
      async getPage(){
        if (this.hasMore){
          let {result,hasMore}=await paginate(this.offset);
          this.books=[...this.books,...result];
          this.hasMore=hasMore;
          this.offset=this.books.length;
        }

      }
    },
    mounted(){
      let scroll=this.$refs.scroll;
      let top=scroll.offsetTop;
      let distance=0;
      scroll.addEventListener('touchstart',(e)=>{
        if (scroll.scrollTop!=0 && scroll.offsetTop==top) return;
        let start=e.touches[0].pageY;
        //拖动
        let move=(e)=>{
          let current=e.touches[0].pageY;
          distance=current-start;//拉动的距离 负的不要
          if (distance>0){
            if (distance<=50){
              scroll.style.top=distance+top+'px';
            }else {
              distance=50;
              scroll.style.top=top+'50px';
            }

          }else {
            scroll.removeEventListener('touchmove',move);
            scroll.removeEventListener('touchend',()=>{});
          }
        };
        //拖动结束
        let end=(e)=>{
          console.log(111);
          this.timer=setInterval(()=>{
            if (distance>0){
              console.log(222);
              distance-=1;
              scroll.style.top=distance+top+'px';
            }else {
              clearInterval(this.timer);
            }
          },8);

        };
        scroll.addEventListener('touchmove',move);
        scroll.addEventListener('touchend',end);
      })
    },
    computed: {},
    components: {
      MHeader
    }
  }
</script>

<style scoped>
  .content ul{
    padding: 10px;
  }
.content ul li{
  display: flex;
  padding: 10px 0;
  border-bottom: 1px solid #f1f1f1;
}
  .content ul li img{
    width: 130px;
    height: 150px;
  }
  .content h3{
    font-size: 25px;
    line-height: 35px;

  }
  .content p{
    color: #2a2a2a;
    line-height: 25px;
  }
  .content b{
    color: red;
  }
  .content button{
    display: block;
    width: 60px;
    height: 30px;
    background: orange;
    border: none;
    color: white;
    border-radius: 5px;
    outline: none;
  }
</style>
