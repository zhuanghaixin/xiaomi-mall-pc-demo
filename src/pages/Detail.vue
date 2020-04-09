<template>
    <div class="detail">
        <ProductParam :title="product.name">
        </ProductParam>
        <div class="wrapper">
            <div class="container clearfix">
                <div class="swiper">
                    <swiper :options="swiperOption">
                        <swiper-slide><img src="/imgs/detail/phone-1.jpg" alt=""></swiper-slide>
                        <swiper-slide><img src="/imgs/detail/phone-2.jpg" alt=""></swiper-slide>
                        <swiper-slide><img src="/imgs/detail/phone-3.jpg" alt=""></swiper-slide>
                        <swiper-slide><img src="/imgs/detail/phone-4.jpg" alt=""></swiper-slide>
                        <!-- Optional controls -->
                        <div class="swiper-pagination" slot="pagination"></div>
                    </swiper>
                </div>
                <div class="content">
                    <h2 class="item-title">{{product.name}}</h2>
                    <p class="item-info">相机全新升级 / 960帧超慢动作 / 手持超级夜景 / 全球首款双频GPS / 骁龙845处理器 / 红<br/>外人脸解锁 / AI变焦双摄 / 三星
                        AMOLED 屏</p>
                    <div class="delivery">小米自营</div>
                    <div class="item-price">{{product.price}}元<span class="del">1999元</span></div>
                    <div class="line"></div>
                    <div class="item-addr">
                        <i class="icon-loc"></i>
                        <div class="addr">北京 北京市 朝阳区 安定门街道</div>
                        <div class="stock">有现货</div>
                    </div>
                    <div class="item-version clearfix">
                        <h2>选择版本</h2>
                        <div class="phone fl">6GB+64GB 全网通</div>
                        <div class="phone fr">4GB+64GB 移动4G</div>
                    </div>
                    <div class="item-color">
                        <h2>选择颜色</h2>
                        <div class="phone checked">
                            <span class="color"></span>
                            深空灰
                        </div>
                    </div>
                    <div class="item-total">
                        <div class="phone-info clearfix">
                            <div class="fl">{{product.name}} {{version==1?'6GB+64GB 全网通':'4GB+64GB 移动4G'}} 深灰色</div>
                            <div class="fr">{{product.price}}元</div>
                        </div>
                        <div class="phone-total">总计：{{product.price}}元</div>
                    </div>
                    <div class="btn-group">
                        <a href="javascript:;" class="btn btn-huge fl">加入购物车</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="price-info">
            <div class="container">
                <h2>价格说明</h2>
                <div class="desc">
                    <img src="/imgs/detail/item-price.jpeg" alt="">
                </div>
            </div>
        </div>
        <ServiceBar/>
    </div>
</template>

<script>
    import {swiper, swiperSlide} from 'vue-awesome-swiper'
    import ProductParam from './../components/ProductParam'
    import ServiceBar from './../components/TheServiceBar';

    export default {
        name: "Detail",
        data() {
            return {
                id: this.$route.params.id,//获取商品ID
                err: '',
                version: 1,//商品版本切换
                product: {},//商品信息
                swiperOption: {
                    autoplay: true,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                        bulletClass: 'my-bullet',
                        bulletActiveClass: 'my-bullet-active'
                    }
                }
            }
        },
        components: {
            swiper,
            swiperSlide,
            ProductParam,
            ServiceBar
        },
        mounted() {
            this.getProductInfo();
        },
        methods: {
            //获取产品信息
            getProductInfo() {
                let id = this.id
                this.axios.get(`/products/${id}`).then((res) => {
                    this.product = res
                })
            },
            // addCart(){
            //     this.axios.post('/carts',{
            //         productId:this.id,
            //         selected: true
            //     }).then((res={cartProductVoList:0})=>{
            //         this.$store.dispatch('saveCartCount',res.cartTotalQuantity);
            //         // this.$router.push('/cart');
            //     });
            // }
        }
    };
</script>

<style lang="scss" scoped>
    @import "../assets/scss/base.scss";
    @import "../assets/scss/mixin.scss";



    .detail {
        .wrapper {

            .swiper {
                float: left;
                margin-top: 5px;
                .swiper-container {
                    width: 642px;
                    height: 617px;
                }
                img {
                    width: 100%;
                    /*height:100%;*/
                }
                .my-bullet {
                    /*border-radius: 50%;*/
                    width: 26.7px;
                    height: 3px;
                    margin: 7.5px;
                    display: inline-block;
                    background: $colorE;
                }
                .my-bullet-active {
                    background: $colorC;
                    width: 26.7px;
                }
            }

            .content {
                float: right;
                width: 584px;
                height: 870px;

                .item-title {
                    font-size: 28px;
                    padding-top: 30px;
                    padding-bottom: 16px;
                    height: 26px;
                }

                .item-info {
                    font-size: 14px;
                    height: 36px;
                }

                .delivery {
                    font-size: 16px;
                    color: #FF6700;
                    margin-top: 26px;
                    margin-bottom: 14px;
                    height: 15px;
                }

                .item-price {
                    font-size: 20px;
                    color: #FF6700;
                    height: 19px;

                    .del {
                        font-size: 16px;
                        color: #999999;
                        margin-left: 10px;
                        text-decoration: line-through;
                    }
                }

                .line {
                    height: 0;
                    margin-top: 25px;
                    margin-bottom: 28px;
                    border-top: 1px solid #E5E5E5;
                }

                .item-addr {
                    height: 108px;
                    background-color: #FAFAFA;
                    border: 1px solid #E5E5E5;
                    box-sizing: border-box;
                    padding-top: 31px;
                    padding-left: 64px;
                    font-size: 14px;
                    line-height: 14px;
                    position: relative;

                    .icon-loc {
                        position: absolute;
                        top: 27px;
                        left: 34px;
                        @include bgImg(20px, 20px, '/imgs/detail/icon-loc.png');
                    }

                    .addr {
                        color: #666666;
                    }

                    .stock {
                        margin-top: 15px;
                        color: #FF6700;
                    }
                }

                .item-version, .item-color {
                    margin-top: 30px;

                    h2 {
                        font-size: 18px;
                        margin-bottom: 20px;
                    }
                }

                .item-version, .item-color {
                    .phone {
                        width: 287px;
                        height: 50px;
                        line-height: 50px;
                        font-size: 16px;
                        color: #333333;
                        border: 1px solid #E5E5E5;
                        box-sizing: border-box;
                        text-align: center;
                        cursor: pointer;

                        span {
                            color: #666666;
                            margin-left: 15px;
                        }

                        .color {
                            display: inline-block;
                            width: 14px;
                            height: 14px;
                            background-color: #666666;
                        }

                        &.checked {
                            border: 1px solid #FF6600;
                            color: #FF6600;
                        }
                    }
                }

                .item-total {
                    height: 108px;
                    background: #FAFAFA;
                    padding: 24px 33px 29px 30px;
                    font-size: 14px;
                    margin-top: 50px;
                    margin-bottom: 30px;
                    box-sizing: border-box;

                    .phone-total {
                        font-size: 24px;
                        color: #FF6600;
                        margin-top: 18px;
                    }
                }
            }
        }

        .price-info {
            background-color: #F3F3F3;
            height: 340px;

            h2 {
                font-size: 24px;
                color: #333333;
                padding-top: 38px;
                margin-bottom: 30px;
            }
        }
    }
</style>
