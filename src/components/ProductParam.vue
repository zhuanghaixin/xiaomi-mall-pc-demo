<template>
    <div>
        <div class="nav-bar">
            <div class="container">
                <div class="pro-title">
                    小米8
                </div>
                <div class="pro-param">
                    <a href="javascript:">概述</a>
                    <span>|</span>
                    <a href="javascript:">参数</a>
                    <span>|</span>
                    <a href="javascript:">用户评价</a>
                    <slot name="buy"></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ProductParam"
    }
</script>

<style scoped lang="scss">
    @import '../assets/scss/base.scss';
    /*@import '../assets/scss/mixin.scss';*/
    .nav-bar {
        height: 70px;
        line-height: 70px;
        border-top: 1px solid $colorH;
        border-bottom: 1px solid $colorH;

        .container {
            @include flex();
            .pro-title{
                font-size:$fontH;
                color:$colorB;
                font-weight: bold;
            }
            .pro-param{
                font-size:$fontJ;
                color:$colorC;
                span{
                    margin: 10px;
                }
                a{
                    color:inherit;
                    &:last-of-type{
                        margin-right: 11px;
                    }

                }
            }
        }

    }
</style>
