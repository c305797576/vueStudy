<template>
    <div class="detail">
      <MHeader :back="true">详情</MHeader>
      <div class="content">
        {{bid}}
      </div>

    </div>
</template>

<script>
  import MHeader from '../base/MHeader.vue';
    export default {
        data() {
            return {}
        },
        methods: {

        },
        computed: {
          bid(){
            return this.$route.params.bid;//将路径参数映射到bid上
          }
        },
        components: {
          MHeader
        }
    }
</script>

<style scoped>
  .detail{
    position: absolute;
    top:0;
    left: 0;
    bottom: 0;
    right: 0;
    background: white;
    z-index: 99;
  }
</style>
