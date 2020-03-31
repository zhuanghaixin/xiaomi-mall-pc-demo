<template>
    <div class="index">
        <div class="container">
            <div class="swiper-box">
                <swiper ref="mySwiper" :options="swiperOption">
                    <swiper-slide v-for="(item,index) in slideList" :key="index">
                        <a :href="'/#/product/'+item.id"><img :src="item.img"></a>
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
                <p><a href=""></a></p>
                <p class="header"></p>
            </div>
        </div>
        <ServiceBar/>
    </div>
</template>
<script>
    import 'swiper/css/swiper.css';
    import {swiper, swiperSlide} from 'vue-awesome-swiper';

    import ServiceBar from "../components/TheServiceBar.vue";

    export default {
        name: "index",
        components: {
            ServiceBar,
            swiper,
            swiperSlide,

        },
        data() {
            return {
                swiperOption: {
                    effect: 'fade',
                    autoplay: true,
                    loop: true,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable :true,
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                }, slideList: [
                    {
                        id: '42',
                        img: '/imgs/slider/slide-1.jpg'
                    }, {
                        id: '45',
                        img: '/imgs/slider/slide-2.jpg'
                    }, {
                        id: '46',
                        img: '/imgs/slider/slide-3.jpg'
                    }, {
                        id: '47',
                        img: '/imgs/slider/slide-4.jpg'
                    }, {
                        id: '48',
                        img: '/imgs/slider/slide-5.jpg'
                    }
                ]
            }
        }
    };
</script>
<style scoped lang="scss">
    /*.service-bar-bottom{*/
    /*  position: relative;*/
    /*  bottom: 0px;*/
    /*}*/
    @import '../assets/scss/base.scss';
    @import '../assets/scss/mixin.scss';

    .index {
        .container {
            .swiper-box {
                height: 451px;

                img {
                    width: 100%;
                    height: 100%;
                }

                .swiper-button-prev {
                    /*background-color:rgba(255,255,255,.1);*/
                    color: rgba(51, 51, 51, .5);
                    width: 47px;
                    height: 84px;
                }

                .swiper-button-next {
                    /*background-color:rgba(255,255,255,.1);*/
                    color: rgba(51, 51, 51, .5);
                    padding: 20px 10px;
                }

                .swiper-button-prev:hover {
                    background-color: rgba(51, 51, 51, .5);
                    color: #fff;
                    cursor: pointer;
                }

                .swiper-button-next:hover {
                    background-color: rgba(51, 51, 51, .5);
                    color: #fff;
                    cursor: pointer;
                }

            }
        }
    }
</style>
