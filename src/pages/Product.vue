<template>
    <div class="product">
        <ProductParam :title="product.name">
            <template v-slot:buy>
                <button class="btn" @click="buy">立即购买</button>
            </template>
        </ProductParam>
        <div class="content">
            <div class="item-bg">
                <h2>{{product.name}}</h2>
                <h3>{{product.subtitle}}</h3>
                <p>
                    <a href="" id="">全球首款双频 GP</a>
                    <span>|</span>
                    <a href="" id="">骁龙845</a>
                    <span>|</span>
                    <a href="" id="">AI 变焦双摄</a>
                    <span>|</span>
                    <a href="" id="">红外人脸识别</a>
                </p>
                <div class="price">
                    <span>￥<em>{{product.price}}</em></span>
                </div>
            </div>
            <div class="item-bg-2"></div>
            <div class="item-bg-3"></div>
            <div class="item-swiper">
                <swiper :options="swiperOption">

                    <swiper-slide><img src="/imgs/product/gallery-2.png" alt=""></swiper-slide>
                    <swiper-slide><img src="/imgs/product/gallery-3.png" alt=""></swiper-slide>
                    <swiper-slide><img src="/imgs/product/gallery-4.png" alt=""></swiper-slide>
                    <swiper-slide><img src="/imgs/product/gallery-5.jpg" alt=""></swiper-slide>
                    <swiper-slide><img src="/imgs/product/gallery-6.jpg" alt=""></swiper-slide>
                    <!-- Optional controls -->

                    <!--                    <div class="swiper-pagination custom-pagination" slot="pagination"></div>-->
                </swiper>
                <swiper :options="swiperOption" class="x">
                    <div class="swiper-pagination custom-pagination" slot="pagination"></div>
                </swiper>
                <p class="desc">小米8 AI变焦双摄拍摄</p>
            </div>
            <div class="item-video">
                <h2>60帧超慢动作摄影<br/>慢慢回味每一瞬间的精彩</h2>
                <p>后置960帧电影般超慢动作视频，将眨眼间的美妙展现得淋漓尽致！<br/>更能AI 精准分析视频内容，15个场景智能匹配背景音效。</p>
                <div class="video-bg" @click="openVideo"></div>
                <div class="video-box" v-show="showSlide">
                    <div class="overlay"></div>
                    <div class="video" v-bind:class="showSlide">
                        <span class="icon-close" @click="closeVideo"></span>
                        <video src="/imgs/product/video.mp4" muted autoplay controls="controls" id="player"></video>
                    </div>
                </div>
            </div>
        </div>
        <!--        <div>传的参数{{id}}</div>-->

    </div>
</template>

<script>
    import {swiper, swiperSlide} from 'vue-awesome-swiper'
    import ProductParam from '../components/ProductParam.vue';

    export default {
        name: "Product",
        components: {
            swiper,
            swiperSlide,
            ProductParam
        },
        data() {
            return {
                id: this.$route.params.id,
                // swiperOption:{
                //   autoplay:true,
                //   slidesPerView:3,
                //   spaceBetween: 30,
                //   freeMode: true,
                //   pagination: {
                //     el: '.swiper-pagination',
                //     clickable :true,
                //   }
                // }
                swiperOption: {
                    autoplay: {
                        delay: 3000
                    },
                    menu: ['Slide 1', 'Slide 2', 'Slide 3'],
                    slidesPerView: 3,
                    spaceBetween: 30,
                    loop: true,
                    freeMode: true,
                    autoHeight: true,
                    pagination: {

                        el: '.swiper-pagination',
                        bulletClass: 'my-bullet',
                        bulletActiveClass: 'my-bullet-active',
                        clickable: true
                    }

                },
                showSlide: '',//控制动画效果
                product: {}//商品信息
            }
        },
        watch: {
            //当我们监听parms.id的变化，需要用到watch
            // eslint-disable-next-line no-unused-vars
            $route(to, from) {
                this.id = to.params.id
            }
        },
        mounted() {
            this.getProductInfo()
        },
        methods: {
            openVideo() {
                this.showSlide = 'slideDown'
                var player = document.getElementById("player");
                player.play();
            },

            closeVideo() {
                this.showSlide = 'slideUp';
                var player = document.getElementById("player");
                player.pause();

                setTimeout(() => {
                    this.showSlide = '';
                }, 600)
            },
            //获取产品信息
            getProductInfo() {
                let id = this.id
                this.axios.get(`/products/${id}`).then((res) => {
                    this.product = res
                })
            },
            buy() {
                let id = this.id
                this.$router.push({name: 'detail', params: id})
            }
        }

    };
</script>

<style lang="scss">

    .product {
        .content {
            .item-bg {
                background: url('/imgs/product/product-bg-1.png') no-repeat center;
                height: 718px;
                text-align: center;

                h2 {
                    font-size: 80px;
                    padding-top: 55px;
                }

                h3 {
                    font-size: 24px;
                    letter-spacing: 10px;
                }

                p {
                    margin-top: 21px;
                    margin-bottom: 40px;

                    a {
                        font-size: 16px;
                        color: #333333;
                    }

                    span {
                        margin: 0 15px;
                    }
                }

                .price {
                    font-size: 30px;
                    color: #333333;

                    em {
                        font-style: normal;
                        font-size: 38px;
                    }
                }
            }

            .item-bg-2 {
                background: url(/imgs/product/product-bg-2.png) no-repeat center;
                height: 480px;
                background-size: 1226px 397px;
            }

            .item-bg-3 {
                background: url(/imgs/product/product-bg-3.png) no-repeat center;
                height: 638px;
                background-size: cover;
            }

            .item-swiper {
                margin: 36px auto 52px;

                .swiper-container {
                    /*height: 405px;*/
                    /*width: 1226px;*/
                    /*width: 1920px;*/
                    /*overflow-y:visible;*/
                    /*overflow:visible;*/
                    img {
                        width: 100%;
                    }
                    &.x {
                        height: 54px;
                        line-height: 54px;
                        /*background-color:#f00;*/
                        .my-bullet {
                            /*border-radius: 50%;*/
                            width: 26.7px;
                            height: 3px;
                            margin: 7.5px;
                            display: inline-block;
                            background: $colorE;
                            cursor: pointer;
                        }

                        .my-bullet-active {
                            background: $colorC;
                            width: 26.7px;
                        }
                    }
                }
                .custom-pagination {
                    bottom: 0px;
                    width: 100%;
                    height: 100%;

                }

                .desc {
                    font-size: 18px;
                    color: $colorB;
                    text-align: center;
                }
            }

            .item-video {
                height: 1044px;
                background-color: #070708;
                margin-bottom: 76px;
                color: #FFFFFF;
                text-align: center;

                h2 {
                    font-size: 60px;
                    padding-top: 82px;
                    margin-bottom: 47px;
                }

                p {
                    font-size: 24px;
                    margin-bottom: 58px;
                }

                .video-bg {
                    background: url('/imgs/product/gallery-1.png') no-repeat center;
                    background-size: cover;
                    width: 1226px;
                    height: 540px;
                    margin: 0 auto 120px;
                    cursor: pointer;
                }

                /*TODO video样式*/
                .video-box {
                    .overlay {
                        @include position(fixed);
                        background-color: #333333;
                        opacity: .4;
                        z-index: 13;
                    }

                    .video {
                        position: fixed;
                        top: -50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        z-index: 14;
                        width: 1000px;
                        height: 536px;
                        background: #f00;
                        opacity: 1;

                        video {
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                            outline: none;
                        }

                        &.slideDown {
                            animation: slideDown .6s linear;
                            animation-fill-mode: forwards;
                        }

                        &.slideUp {
                            animation: slideUp .6s linear;
                            /*animation-fill-mode: forwards;*/
                        }

                        .icon-close {
                            position: absolute;
                            top: 20px;
                            right: 20px;
                            @include bgImg(20px, 20px, '/imgs/icon-close.png');
                            cursor: pointer;
                            z-index: 11;
                        }

                        @keyframes slideDown {
                            from {
                                top: -50%;
                                opacity: 0;
                            }
                            to {
                                top: 50%;
                                opacity: 1;
                            }
                        }
                        @keyframes slideUp {
                            from {
                                top: 50%;
                                opacity: 1;
                            }
                            to {
                                top: -50%;
                                opacity: 0;
                            }
                        }


                    }
                }
            }
        }

        button {
            margin-left: 10px;
        }
    }
</style>
