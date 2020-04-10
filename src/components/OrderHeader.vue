<template>
    <div class="order-header">
        <div class="container">
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
    /*@import '../assets/scss/mixin.scss';*/
    .order-header {
        padding:30px 0;
        .container{
            margin-right: auto;
            margin-left: auto;

        }

    }
</style>
