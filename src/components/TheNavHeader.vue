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
                    <a href="javascript:;" v-if="username">{{username}}</a>
                    <a href="javascript:;" v-if="username">退出</a>
                    <a href="javascript:;" v-if="!username" @click="navigateTo('login')">登录</a>
                    <a href="javascript:;" v-if="!username">注册</a>
                    <a href="javascript:;" v-if="username">我的订单</a>
                    <a href="javascript:;" class="my-cart" @click="navigateTo('cart')">
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
                        <div class="children">
                            <ul>
                                <li class="product" v-for="(item,index) in phoneList" :key="index">
                                    <a :href="'/#/product/'+item.id" target="_blank">
                                        <div class="product-img"><img v-lazy="item.mainImage" alt=""></div>
                                        <div class="product-name">{{item.name}}</div>
                                        <div class="product-price">{{item.price | currency}}</div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="item-menu">
                        <span>RedMi红米</span>
                        <div class="children"></div>
                    </div>
                    <div class="item-menu">
                        <span>电视</span>
                        <div class="children">
                            <ul>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="product-img">
                                            <img src="/imgs/nav-img/nav-3-1.jpg" alt="">
                                        </div>
                                        <div class="product-name">小米壁画电视 65英寸</div>
                                        <div class="product-price">6999元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="product-img">
                                            <img src="/imgs/nav-img/nav-3-2.jpg" alt="">
                                        </div>
                                        <div class="product-name">小米全面屏电视E55A</div>
                                        <div class="product-price">1999元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="product-img">
                                            <img src="/imgs/nav-img/nav-3-3.png" alt="">
                                        </div>
                                        <div class="product-name">小米电视4A 32英寸</div>
                                        <div class="product-price">699元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="product-img">
                                            <img src="/imgs/nav-img/nav-3-4.jpg" alt="">
                                        </div>
                                        <div class="product-name">小米电视4A 55英寸</div>
                                        <div class="product-price">1799元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="product-img">
                                            <img src="/imgs/nav-img/nav-3-5.jpg" alt="">
                                        </div>
                                        <div class="product-name">小米电视4A 65英寸</div>
                                        <div class="product-price">2699元</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="product-img">
                                            <img src="/imgs/nav-img/nav-3-6.png" alt="">
                                        </div>
                                        <div class="product-name">查看全部</div>
                                        <div class="product-price">查看全部</div>
                                    </a>
                                </li>
                            </ul>
                        </div>
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
        name: "NavHeader",
        filters:{
            //金额格式化
            currency(val){
                if(!val) return '0.00'
                return '¥'+val.toFixed(2)+"元"
            }

        },
        data() {
            return {
                username: '',
                phoneList: []
            }
        },
        mounted() {
            this.getProductList()
        },
        methods: {
            //获取产品手机列表
            getProductList() {
                this.axios.get('/products', {
                    params: {
                        categoryId: '100012'
                    }
                }).then((res) => {
                    // eslint-disable-next-line no-console
                    console.log('res')
                    // eslint-disable-next-line no-console
                    console.log(res.list)

                    if (res.list.length > 6) {
                        this.phoneList = res.list.slice(0, 6)
                        // eslint-disable-next-line no-console
                        console.log(this.phoneList)
                    }
                })
            },
            //跳转购物处
            goToCart(){
                this.$router.push('cart')
            },
            //跳转登录处
            login(){
                this.$router.push('login')
            },
            //合并
            navigateTo(name){
                this.$router.push(name)
            }


        }

    };
</script>

<style lang="scss" scoped>
    @import '../assets/scss/base.scss';
    @import '../assets/scss/mixin.scss';
    /*可以不需要引入scss，因为在vue.config.js引入了*/
    /*@import '../assets/scss/config.scss';*/

    /*顶部导航*/
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
                @include flex();

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
                    margin-right: 0px;

                    .icon-cart {
                        @include bgImg(16px, 12px, '/imgs/icon-cart-checked.png', contain);
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
                @include flex();
                position: relative;

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

            .header-menu {
                display: inline-block;
                /*width: 640px;*/
                /*padding-left: 200px;*/
                flex-basis: 467px;
                /*background-color:#f00;*/


                .item-menu {
                    /*display:flex;*/
                    display: inline-block;
                    color: #333;
                    font-size: $fontI;
                    font-weight: bold;
                    margin-left: 20px;
                    line-height: 112px;

                    span {
                        cursor: pointer;

                    }

                    &:hover {
                        color: $colorA;

                        .children {
                            height: 220px;
                            opacity: 1;
                        }
                    }


                    .children {
                        position: absolute;
                        top: 112px;
                        left: 0;
                        width: 1226px;
                        transition: all .5s;
                        height: 0px;
                        opacity: 0;
                        z-index:10;
                        overflow: hidden;
                        box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.11);
                        background-color:#fff;

                        ul {
                            display: flex;
                            justify-content: space-evenly;
                            border-top: 1px solid #E5E5E5;

                            .product {
                                width: 16.7%;
                                height: 220px;
                                font-size: 12px;
                                line-height: 12px;
                                text-align: center;
                                position: relative;

                                a {
                                    display: inline-block;
                                    height: 220px;
                                }

                                img {
                                    width: auto;
                                    height: 111px;
                                    margin-top: 26px;
                                }

                                .product-img {
                                }

                                .product-name {
                                    font-weight: bold;
                                    margin-top: 19px;
                                    margin-bottom: 8px;
                                    color: $colorB;
                                }

                                .product-price {
                                    color: $colorA;
                                }

                                &:after {
                                    content: ' ';
                                    display: inline-block;
                                    position: absolute;
                                    top: 28px;
                                    right: 0px;
                                    /*       position: relative;
                                           top:-56px;
                                           margin-left: 20px;*/

                                    background-color: $colorF;
                                    height: 100px;
                                    width: 1px;

                                }

                                &:last-child:after {
                                    display: none;
                                }
                            }
                        }
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
                                @include bgImg(18px, 18px, '/imgs/icon-search副本.png', contain);
                            }

                        }

                        .icon-search {
                            @include bgImg(18px, 18px, '/imgs/icon-search.png', contain);
                            margin-right: auto;
                            margin-left: auto;

                        }
                    }

                }
            }
        }
    }

</style>

