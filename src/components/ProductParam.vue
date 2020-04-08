<template>
    <div>
        <div class="nav-bar" :class="{'is-fixed':isFixed}">
            <div class="container">
                <div class="pro-title">
                    {{title}}
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
        name: "ProductParam",
        props:{
            title:{
                type:String
            }
        },
        data(){
            return{
                isFixed:false
            }
        },
        mounted() {
            window.addEventListener('scroll',this.initHeight)
        },
        methods:{
            initHeight(){
                let scrollTop=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop
                this.isFixed=scrollTop>152?true:false
            }
        },
        destroyed() {
                window.removeEventListener('scroll',this.initHeight,false)
        }

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
        background-color:#fff;
        &.is-fixed{
            position:fixed;
            top:0;
            width: 100%;
            /*padding: 10px 0;*/
            z-index:12;
            box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.5);
            /*color: #3d4451;*/

            transition:all 1s;

        }
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
