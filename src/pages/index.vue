<template>
    <div class="index">
        <div class="container">
            <div class="swiper-box">
                <div class="nav-menu">
                    <ul class="menu-wrap">
                        <li class="menu-item">
                            <a href="javascript:;">手机 电话卡</a>
                            <div class="children">
                                <ul v-for="(item ,i) in menuListPhone" :key="i">
                                    <li v-for="(sub,j) in item" :key="j">
                                        <a :href="sub.id?'/#/product/'+sub.id:''">
                                            <img :src="sub?sub.img:'/imgs/item-box-1.png'" alt="">
                                            {{sub?sub.name:'小米CC9'}}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">电视 盒子</a>
                            <div class="children">
                                <ul v-for="(item ,i) in menuListTV" :key="i">
                                    <li v-for="(sub,j) in item" :key="j">
                                        <a :href="sub.id?'/#/product/'+sub.id:''">
                                            <img :src="sub?sub.img:'/imgs/nav-img/nav-3-3.png'" alt="">
                                            {{sub?sub.name:'小米电视4A 32寸'}}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">笔记本 显示器 平板</a>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">家电 插线板</a>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">出行 穿戴</a>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">智能 路由器</a>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">电源 配件</a>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">生活 箱包</a>
                        </li>
                    </ul>
                </div>
                <swiper ref="mySwiper" :options="swiperOption">
                    <swiper-slide v-for="(item,index) in slideList" :key="index">
                        <a :href="'/#/product/'+item.id">
                            <img :src="item.img"/>
                        </a>
                    </swiper-slide>
                    <!-- Optional controls -->
                    <div class="swiper-pagination" slot="pagination"></div>
                    <div class="swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next" slot="button-next"></div>
                </swiper>
            </div>
            <div class="ads-box"></div>
            <div class="banner"></div>
            <div class="product-box"></div>
            <div></div>
            <div>
                <p>
                    <a href></a>
                </p>
                <p class="header"></p>
            </div>
        </div>
        <ServiceBar/>
    </div>
</template>
<script>
    import "swiper/css/swiper.css";
    import {swiper, swiperSlide} from "vue-awesome-swiper";

    import ServiceBar from "../components/TheServiceBar.vue";

    export default {
        name: "index",
        components: {
            ServiceBar,
            swiper,
            swiperSlide
        },
        data() {
            return {
                swiperOption: {
                    effect: "fade",
                    autoplay: true,
                    loop: true,
                    pagination: {
                        el: ".swiper-pagination",
                        clickable: true
                    },
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev"
                    }
                },
                slideList: [
                    {
                        id: "42",
                        img: "/imgs/slider/slide-1.jpg"
                    },
                    {
                        id: "45",
                        img: "/imgs/slider/slide-2.jpg"
                    },
                    {
                        id: "46",
                        img: "/imgs/slider/slide-3.jpg"
                    },
                    {
                        id: "47",
                        img: "/imgs/slider/slide-4.jpg"
                    },
                    {
                        id: "48",
                        img: "/imgs/slider/slide-5.jpg"
                    }
                ],
                menuListPhone: [
                    [
                        {
                            id:30,
                            img:'/imgs/item-box-1.png',
                            name:'小米CC9'
                        },
                        {
                            id:31,
                            img:'/imgs/item-box-2.png',
                            name:'小米8青春版'
                        },
                        {
                            id:31,
                            img:'/imgs/item-box-3.jpg',
                            name:'小米8青春版'
                        },
                        {
                            id:33,
                            img:'/imgs/item-box-4.jpg',
                            name:'移动4G专区'
                        },
                        {
                            id:31,
                            img:'/imgs/item-box-3.jpg',
                            name:'小米8青春版'
                        },
                        {
                            id:33,
                            img:'/imgs/item-box-4.jpg',
                            name:'移动4G专区'
                        }
                    ],
                    [0,0,0,0,0,0],
                    [0,0,0,0,0,0],
                    [0,0,0,0,0],

                ],
                menuListTV: [
                    [
                        {
                            id:30,
                            img:'/imgs/nav-img/nav-3-1.jpg',
                            name:'小米壁画电视 55寸'
                        },
                        {
                            id:31,
                            img:'/imgs/nav-img/nav-3-2.jpg',
                            name:'小米全面屏55A'
                        },
                        {
                            id:31,
                            img:'/imgs/nav-img/nav-3-3.png',
                            name:'小米电视4A 32寸'
                        },
                        {
                            id:33,
                            img:'/imgs/nav-img/nav-3-4.jpg',
                            name:'小米电视4A 55寸'
                        },
                        {
                            id:33,
                            img:'/imgs/nav-img/nav-3-4.jpg',
                            name:'小米电视4A 55寸'
                        },
                        {
                            id:33,
                            img:'/imgs/nav-img/nav-3-4.jpg',
                            name:'小米电视4A 55寸'
                        },
                    ],
                    [0,0,0,0,0,0],
                    [0,0,0,0],

                ]
            };
        }
    };
</script>
<style scoped lang="scss">
    /*.service-bar-bottom{*/
    /*  position: relative;*/
    /*  bottom: 0px;*/
    /*}*/
    @import "../assets/scss/base.scss";
    @import "../assets/scss/mixin.scss";

    .index {
        .container {


            .swiper-box {

                .swiper-container {
                    height: 451px;

                    img {
                        width: 100%;
                        /*height: 451px;*/
                        height: 100%;
                    }

                    .swiper-button-prev {
                        /*background-color:rgba(255,255,255,.1);*/
                        color: rgba(51, 51, 51, 0.5);
                        width: 47px;
                        height: 84px;
                        margin-left: 254px;
                        margin-top: -40px;

                        &:after {
                            font-size: 32px;
                        }
                    }

                    .swiper-button-next {
                        /*background-color:rgba(255,255,255,.1);*/
                        width: 47px;
                        height: 84px;
                        margin-right: -10px;
                        color: rgba(51, 51, 51, 0.5);
                        margin-top: -40px;

                        &:after {
                            font-size: 32px;
                        }
                    }

                    .swiper-button-prev:hover {
                        background-color: rgba(51, 51, 51, 0.5);
                        color: #fff;
                        cursor: pointer;
                    }

                    .swiper-button-next:hover {
                        background-color: rgba(51, 51, 51, 0.5);
                        color: #fff;
                        cursor: pointer;
                    }

                    .swiper-pagination {
                        display: flex;
                        justify-content: flex-end;
                        padding: 16px 20px;
                    }

                }

                .nav-menu {
                    position: absolute;
                    width: 264px;
                    height: 451px;
                    background-color: rgba(51, 51, 51, 0.5);;
                    z-index: 9;
                    /*opacity:.1;  字体也会变透明*/
                    padding: 26px 0px;

                    .menu-wrap {
                        .menu-item {
                            height: 50px;
                            line-height: 50px;
                            &:hover {
                                background: $colorA;
                                .children{
                                display:flex;
                                }
                            }
                            a {
                                position: relative;
                                display: block;
                                font-size: 16px;
                                color: #ffffff;
                                padding-left: 30px;

                                &:after {
                                    position: absolute;
                                    right: 30px;
                                    top: 17.5px; /*第二种使得在absolute情况下 a:after垂直居中*!*/
                                    /*margin-top: 17.5px;*/
                                    content: '';
                                    @include bgImg(10px, 15px, '/imgs/icon-arrow.png');

                                }
                            }
                            .children{
                                display:none;
                                /*width:962px;*/
                                height: 451px;
                                /*display:flex;*/
                                background-color:$colorG;
                                position:absolute;
                                /*flex-direction: column;*/
                                top:0;
                                left:264px;
                                /*z-index:11;*/
                                border: 1px solid $colorH;
                                ul{
                                    display:flex;
                                    justify-content: space-between;
                                    flex-direction:column;
                                    height: 75px;
                                    li{
                                        height: 75px;
                                        line-height: 75px;
                                        /*flex:1;*/
                                        /*display:flex;*/
                                        /*flex-direction:column;*/
                                       /* background-color:$colorG;*/
                                        width: 240px;

                                        a{
                                            color:$colorB;
                                            font-size: 14px;
                                        }
                                        img{
                                            width: 42px;
                                            height: 35px;
                                            vertical-align:middle;
                                            margin-right: 15px;
                                        }
                                    }
                                }
                            }
                        }
                    }

                }
            }
        }
    }
</style>
