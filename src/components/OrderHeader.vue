<template>
    <div class="order-header">
        <div class="container clearfix">
            <div class="header-logo">
                <a href="/#/index"></a>
            </div>
            <div class="title">
                <!--        h2里面要使用插槽，因为每个页面显示都是不同的标题-->
                <h2>{{title}}</h2>
                <span><slot name="tip"></slot></span>

            </div>
            <div class="username">
                <a href="javascript:">{{username}}</a>
            </div>
        </div>

    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: "OrderHeader",
        props: {
            title: String
        },
        computed:{
            ...mapState(['username','cartCount'])
        }

    };
</script>

<style lang="scss" scoped>
    @import '../assets/scss/base.css';
    /*@import '../assets/scss/mixin.scss';*/
    .order-header {
        padding: 30px 0;
        border-bottom: 2px solid #FF6600;

        .container {
            margin-right: auto;
            margin-left: auto;

            .header-logo {
                float: left;
            }

            .title, .username {
                height: 55px;
                line-height: 55px;
            }

            .title {
                float: left;
                margin-left: 54px;

                h2 {
                    font-size: 28px;
                    color: #333333;
                    display: inline-block;
                }

                span {
                    font-size: 14px;
                    margin-left: 17px;
                    color: #999999;
                    font-weight: 200;
                }
            }

            .username {
                float: right;

                a {
                    color: #666666;
                    font-size: 16px;
                }
            }
        }

    }
</style>
