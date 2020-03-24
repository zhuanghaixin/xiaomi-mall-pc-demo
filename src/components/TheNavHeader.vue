<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="javascript:;">小米商城</a>
          <a href="javascript:;">MUI</a>
          <a href="javascript:;">云服务</a>
          <a href="javascript:;">协议规则</a>

        </div>
        <div class="topbar-user">
          <a href="javascript:;">登录</a>
          <a href="javascript:;">注册</a>
          <a href="javascript:;">购物车</a>

        </div>
      </div>
    </div>
    <div class="nav-header">

    </div>

  </div>

</template>

<script>
export default {
  name: "NavHeader"
};
</script>

<style lang="scss" scoped>
  /*可以不需要引入scss，因为在vue.config.js引入了*/
  /*@import '../assets/scss/config.scss';*/
 /*顶部导航*/
  .nav-header{
    height: 39px;
    background-color: $colorB;



  }

</style>

