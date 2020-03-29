<template>
  <div class="footer-bottom">
    <div class="footer">
      <div class="footer-logo">
        <img src="/imgs/logo-footer.png" alt="">
        <p>小米商城</p>
      </div>
      <div class="footer-link">
        <a href="http://zhuanghaixin.cn" target="_blank">个人主页</a><span>|</span>
        <a href="https://zhuanghaixin.cn/" target="_blank">个人简历</a><span>|</span>
        <a href="https://github.com/" target="_blank">GitHub</a><span>|</span>
        <a href="https://www.yuque.com/zhuanghaixin/utccb7" target="_blank">语雀</a>
      </div>
      <div class="copyright">Copyright ©2020 <span class="domain">mi.js101.fun</span> All Rights Reserved.</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavFooter"
};
</script>

<style lang="scss" scoped>
  .footer-bottom{
   position:absolute;
    bottom:0px;
    width: 100%;
  }
  .footer{

    display:flex;
    flex-direction: column;
    justify-content:flex-start;
    height:234px;
    border-top:4px solid $colorA;
    background-color:$colorB;
    color:$colorD;
    font-size:$fontI;
    text-align:center;
    .footer-logo{
      margin-top:46px;
      margin-bottom:31px;
      img{
        width:53px;
        height:36px;
        margin-bottom:13px;
      }
    }
    .footer-link{
      a{
        color:inherit;
        display:inline-block;
      }
      span{
        margin:0 10px;
      }
      margin-bottom:13px;
    }
    .copyright{
      .domain{
        color:$colorA;
      }
    }
  }
</style>
