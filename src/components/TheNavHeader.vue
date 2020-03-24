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
            <div class="container">
                <div class="header-logo">
                    <a href="/#/index"></a>
                </div>
                <div class="header-menu">
                    <div class="item-menu">
                        <span>小米手机</span>
                        <div class="children"></div>
                    </div>
                    <div class="item-menu">
                        <span>ReadMi红米</span>
                        <div class="children"></div>
                    </div>
                    <div class="item-menu">
                        <span>电视</span>
                        <div class="children"></div>
                    </div>
                </div>
                <div class="header-search">
                    <div class="wrapper">
                        <input type="text" name="keyword">
                        <a href="javascript:;">
                            <span class="icon-search"></span>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    </div>

</template>

<script>
    export default {
        name: "NavHeader"
    };
</script>

<style lang="scss" scoped>
    @import '../assets/scss/base.scss';
    /*可以不需要引入scss，因为在vue.config.js引入了*/
    /*@import '../assets/scss/config.scss';*/
    /*顶部导航*/
    body {
        background-color: #ccc;
    }

    .header {
        .nav-topbar {
            height: 39px;
            line-height: 39px;
            background-color: #333333;
            color: #B0B0B0;

            .container {
                /*引入base.scss 将其中抽离出来*/
                /*width: 1226px;*/
                /*margin-right: auto;*/
                /*margin-left: auto;*/
                display: flex;
                justify-content: space-between;

                a {
                    display: inline-block;
                    color: #B0B0B0;
                    margin-right: 17px;

                    &:hover {
                        color: #ffffff;
                    }
                }

                .my-cart {
                    width: 100px;
                    color: #ffffff;
                    background: #ff6600;
                    text-align: center;

                    .icon-cart {
                        background: url('/imgs/icon-cart-checked.png') center center no-repeat;
                        background-size: contain;
                        display: inline-block;
                        width: 16px;
                        height: 12px;
                        margin-right: 4px;
                    }
                }
            }
        }

        .nav-header {
            /*将container抽离出来*/
            /*.container {*/
            /*  width: 1226px;*/
            /*  margin-right: auto;*/
            /*  margin-left: auto;*/
            /*  display: flex;*/
            /*}*/
            .container {
                height: 112px;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

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
                        display: inline-block;
                        width: 55px;
                        height: 55px;
                        background: url('/imgs/mi-home.png') no-repeat center;
                        background-size: contain;
                        margin-left: -55px;
                        transition: all .3s;
                        opacity: 0;
                    }
                    &:after {
                        content: '';
                        display: inline-block;
                        width: 55px;
                        height: 55px;
                        background: url('/imgs/mi-logo.png') no-repeat center;
                        background-size: contain;
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

            .header-menu {
                display: inline-block;
                /*width: 640px;*/
                /*padding-left: 200px;*/


                .item-menu {
                    /*display:flex;*/
                    display: inline-block;
                    color: #333;
                    font-size: 16px;
                    font-weight: bold;
                    margin-left: 20px;

                    span {
                        cursor: pointer;
                    }

                    &:hover {
                        color: $colorA;
                        /*.children {*/
                        /*    height: 220px;*/
                        /*    opacity: 1;*/
                        /*}*/
                    }

                }
            }

            .header-search {
                width: 319px;

                .wrapper {
                    /*height: 50px;*/
                    /*border: 1px solid #e0e0e0;*/
                    display: flex;
                    align-items: center;

                    input {
                        /*border: 1px solid red;*/
                        height: 50px;
                        width: 264px;
                        padding-left: 10px;
                    }

                    a {
                        border-top: 1px solid #e0e0e0;
                        border-right: 1px solid #e0e0e0;
                        border-bottom: 1px solid #e0e0e0;
                        width: 55px;
                        height: 50px;
                        display: flex;
                        align-items: center;
                        /*text-align: center;*/
                        /*background*/
                        &:hover {
                            background-color: #ff6600;
                            transition: all .5s;

                            .icon-search {
                                transition: all .5s;
                                background: url('/imgs/icon-search副本.png') no-repeat center;
                                background-size: contain;
                            }

                        }

                        .icon-search {
                            display: inline-block;
                            height: 18px;
                            width: 18px;
                            background: url('/imgs/icon-search.png') no-repeat center;
                            background-size: contain;
                            margin-right: auto;
                            margin-left: auto;

                        }
                    }


                }
            }
        }
    }

</style>

