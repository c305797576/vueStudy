<template>
    <div class="header">
        <slot></slot>
      <i class="iconfont icon-fanhui" v-if="back" @click="goBack"></i>
    </div>
</template>

<script>
    export default {
      props:{
        back:{
          type:Boolean,
          default:false
        }
      },
        data() {
            return {}
        },
        methods: {
          goBack(){
            this.$router.go(-1)
          }
        },
        computed: {},
        components: {}
    }
</script>

<style scoped lang="less">
    .header{
      position: fixed;
      width: 100%;
      left: 0;
      top:0;
      background: #afdeee;
      height: 40px;
      text-align: center;
      line-height: 40px;
      font-weight: bold;
      i{
        position: absolute;
        left: 5px;
        font-size: 20px;
      }
    }
</style>
