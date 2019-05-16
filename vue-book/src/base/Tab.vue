<template>
    <div class="footer">
      <router-link to="/home">
        <i class="iconfont icon-home"></i>
        <span>首页</span>
      </router-link>
      <router-link to="/list">
        <i class="iconfont icon-liebiao"></i>
        <span>列表</span>
      </router-link>
      <router-link to="/collect">
        <i class="iconfont icon-collection"></i>
        <span>收藏</span>
      </router-link>
      <router-link to="/add">
        <i class="iconfont icon-icon-test"></i>
        <span>添加</span>
      </router-link>
    </div>
</template>
<!--
display:flex
flex-direction:row /column
align-items: center水平居中
justify-content: center垂直居中
flex：1每份占1
router-link-exact-active  router-link-active
-->
<style scoped lang="less">
  .footer{
    position: fixed;
    left:0;
    bottom: 0;
    width: 100%;
    height: 50px;
    display: flex;
    a{
      display: flex;
      flex-direction: column;
      flex: 1;
      align-items: center;
      justify-content: center;
      color: #00FFFF;
    }
    a.router-link-exact-active{
      color: red;
    }
  }
</style>
