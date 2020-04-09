<template>
    <div class="order-header">
        <div class="container xx">
            <div class="header-logo">
                <a href="/#/index"></a>
            </div>
            <div class="title">
                <!--        h2里面要使用插槽，因为每个页面显示都是不同的标题-->
                <h2>我的购物车 <span>温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算</span></h2>

            </div>
            <div class="username">
                <a href="javascript:">Jack</a>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "OrderHeader"
    };
</script>

<style lang="scss" scoped>
    @import '../assets/scss/base.css';
    @import '../assets/scss/mixin.scss';
    .order-header {
      .container{
          height: 100px;
          .header-logo {
              display: inline-block;
              width: 55px;
              height: 55px;
              background-color: #ff6600;
              /*隐藏元素*/
              overflow: hidden;

              a {
                  display: inline-block;
                  width: 110px; //两张图片移动
                  height: 55px;

                  &:before {
                      content: '';
                      @include bgImg(55px, 55px, '/imgs/mi-home.png', contain);
                      margin-left: -55px;
                      transition: all .3s;
                      opacity: 0;
                  }

                  &:after {
                      content: '';
                      @include bgImg(55px, 55px, '/imgs/mi-logo.png', contain);
                      transition: all .3s;
                  }

                  &:hover:before {
                      margin-left: 0px;
                      opacity: 1;
                      display: inline-block;
                      transition: all .3s;

                  }

                  &:hover:after {
                      margin-left: 55px;
                      opacity: 0;
                      transition: all .3s;
                  }

              }
          }
      }

    }
</style>
