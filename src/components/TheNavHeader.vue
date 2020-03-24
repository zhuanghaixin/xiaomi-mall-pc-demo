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
          <a href="javascript:;" class="my-cart">
            <span class="icon-cart"></span>
            购物车
          </a>

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
  .header {
    .nav-topbar {
      height: 39px;
      line-height: 39px;
      background-color: #333333;
      color:#B0B0B0;
      .container{
        width: 1226px;
        margin-right: auto;
        margin-left:auto;
        display:flex;
        justify-content: space-between;
        a{
          display:inline-block;
          color:#B0B0B0;
          margin-right:17px;
          &:hover{
            color: #ffffff;
          }
        }
        .my-cart{
          width:100px;
          color:#ffffff;
          background:#ff6600;
          text-align: center;

          .icon-cart{
            background:url('/imgs/icon-cart-checked.png') center center no-repeat;
            background-size:contain;
            display:inline-block;
            width: 16px;
            height: 12px;
          }
        }


      }


    }
  }

</style>

