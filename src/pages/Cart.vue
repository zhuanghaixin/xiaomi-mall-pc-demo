<template>
    <div class="cart">
        <OrderHeader title="我的购物车">
            <template v-slot:tip>
                <span>温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算 </span>
            </template>
        </OrderHeader>
        <div class="wrapper">
            <div class="container">
                <div class="cart-box">
                    <ul class="cart-item-head">
                        <li class="col-1"><span class="checkbox" :class="{'checked':allChecked}"
                                                @click="toggleAll"></span>全选
                        </li>
                        <li class="col-3">商品名称</li>
                        <li class="col-1">单价</li>
                        <li class="col-2">数量</li>
                        <li class="col-1">小计</li>
                        <li class="col-1">操作</li>
                    </ul>
                    <ul class="cart-item-list">
                        <li class="cart-item" v-for="(item,index) in list" :key="index">
                            <div class="item-check">
                                <span class="checkbox" :class="{'checked':item.productSelected}"
                                      @click="updateCart(item)"></span>
                            </div>
                            <div class="item-name">
                                <div class="item-img"><img v-lazy="item.productMainImage"></div>

                                <span>{{item.productName}}</span>
                            </div>
                            <div class="item-price">{{item.productPrice}}</div>
                            <div class="item-num">
                                <div class="num-box">
                                    <a href="javascript:;" @click="updateCart(item,'-')">-</a>
                                    <span>{{item.quantity}}</span>
                                    <a href="javascript:;" @click="updateCart(item,'+')">+</a>
                                </div>
                            </div>
                            <div class="item-total">{{item.productTotalPrice}}</div>
                            <div class="item-del" @click="delProductInfo(item)"></div>
                        </li>
                    </ul>
                </div>
                <div class="order-wrap clearfix">
                    <div class="cart-tip fl">
                        <a href="/#/index">继续购物</a>
                        共<span>{{cartTotalNum}}</span>件商品，已选择<span>{{checkedNum}}</span>件
                    </div>
                    <div class="total fr">
                        合计：<span>{{cartTotalPrice}}</span>元
                        <a href="javascript:;" class="btn" @click="order">去结算</a>
                    </div>
                </div>
            </div>
        </div>
        <TheServiceBar/>
        <Modal
                modalType="medium"
                title="提示"
                btnType="3"
                sureText="确认"
                cancelText="取消"
                :showModal=showModal
                @submit="deleteProduct(productItem)"
                @cancel="showModal=false"
        >
            <template v-slot:body>
                <p>
                    你好，{{bodyText}}
                </p>
            </template>
        </Modal>
        <NavFooter/>
    </div>
</template>

<script>
    import NavFooter from "../components/TheNavFooter";
    import OrderHeader from '../components/OrderHeader.vue';
    import TheServiceBar from '../components/TheServiceBar.vue';
    import Modal from '../components/Modal.vue';

    export default {
        name: "Cart",
        components: {
            NavFooter,
            OrderHeader,
            TheServiceBar,
            Modal
        },
        mounted() {
            // eslint-disable-next-line no-console
            // console.log(this.allChecked)
            this.getCartList()


        },
        computed: {
            productItem() {
                return this.$store.state.item
            }
        },
        data() {
            return {
                list: [],//商品列表
                allChecked: false,//是否全选
                cartTotalPrice: 0,//商品总金额
                cartTotalNum: 0,//商品总数量
                checkedNum: 0, //选中的商品数量
                bodyText: '确定将商品移除购物车吗',
                showModal: false

            }
        },
        methods: {
            getCartList() {
                this.axios.get('/carts').then((res) => {
                    this.renderData(res)
                })
            },
            //控制全选功能
            toggleAll() {
                let url = this.allChecked ? '/carts/unSelectAll' : '/carts/selectAll'
                this.axios.put(url).then((res) => {
                    this.renderData(res)
                })
            },
            //公共赋值
            renderData(res) {
                this.list = res.cartProductVoList || []
                this.allChecked = res.selectedAll
                this.cartTotalPrice = res.cartTotalPrice
                this.cartTotalNum = res.cartTotalQuantity
                this.checkedNum = this.list.filter(item => item.productSelected).reduce((acc, cur) => {
                    return acc + cur.quantity
                }, 0)
            },
            //更新购物车
            updateCart(item, type) {
                let quantity = item.quantity,
                    selected = item.productSelected,
                    productStock = item.productStock

                if (type == '-') {
                    if (quantity == 1) {
                        // alert('商品至少保留一件')
                        this.$message.warning('商品至少保留一件')
                        return
                    }
                    --quantity
                } else if (type == '+') {
                    if (quantity == productStock) {
                        // alert('库存不够')
                        this.$message.warning('库存不够')
                        return
                    }

                    ++quantity

                } else {
                    selected = !item.productSelected
                }
                this.axios.put(`/carts/${item.productId}`, {
                    quantity,
                    selected
                }).then((res) => {
                    this.renderData(res)
                })

            },
            //删除购物车商品 信息确认
            delProductInfo(item) {
                this.showModal = true
                this.$store.dispatch("deleteProductItem", item)
            },
            deleteProduct(item) {
                this.showModal = false
                    setTimeout(()=>{
                        let productId = item.productId
                        this.axios.delete(`/carts/${item.productId}`, {
                            productId
                            // eslint-disable-next-line no-unused-vars
                        }).then((res) => {
                            this.$message.success({message:'删除成功',duration:500})
                            this.renderData(res)

                        })
                    },500)
            },
            //购物车下单
            order(){
                let isCheck = this.list.every(item=>!item.productSelected)  //item  每一项都是false, isCheck就为true
                if(isCheck){
                    // alert('请选择一件商品')
                    this.$message.warning('请选择一件商品')
                }else{
                    this.$router.push({name:'order-confirm'})
                }
            }
        }

    };
</script>

<style lang="scss" scoped>
    @import "../assets/scss/base.scss";

    .cart {
        .wrapper {
            background-color: #F5F5F5;
            padding-top: 30px;
            padding-bottom: 114px;

            .cart-box {
                background-color: #fff;
                font-size: 14px;
                color: #999999;
                text-align: center;

                .checkbox {
                    display: inline-block;
                    width: 22px;
                    height: 22px;
                    border: 1px solid #E5E5E5;
                    vertical-align: middle;
                    margin-right: 17px;
                    cursor: pointer;

                    &.checked {
                        background: url('/imgs/icon-gou.png') #FF6600 no-repeat center;
                        background-size: 16px 12px;
                        border: none;
                    }
                }

                .cart-item-head {
                    display: flex;
                    height: 79px;
                    line-height: 79px;

                    .col-1 {
                        flex: 1;
                    }

                    .col-2 {
                        flex: 2;
                    }

                    .col-3 {
                        flex: 3;
                    }
                }

                .cart-item-list {
                    .cart-item {
                        display: flex;
                        align-items: center;
                        height: 125px;
                        border-top: 1px solid #E5E5E5;
                        font-size: 16px;

                        .item-check {
                            flex: 1;
                        }

                        .item-name {
                            flex: 3;
                            font-size: 18px;
                            color: #333333;
                            display: flex;
                            align-items: center;

                            .item-img {
                                padding-right: 40px;

                                img {
                                    width: 80px;
                                    height: 80px;
                                    vertical-align: middle;

                                }
                            }


                            span {

                            }
                        }

                        .item-price {
                            flex: 1;
                            color: #333333;
                        }

                        .item-num {
                            flex: 2;

                            .num-box {
                                display: inline-block;
                                height: 40px;
                                line-height: 40px;
                                border: 1px solid #E5E5E5;
                                font-size: 14px;

                                a {
                                    display: inline-block;
                                    width: 50px;
                                    color: #333333;
                                }

                                span {
                                    display: inline-block;
                                    width: 50px;
                                    color: #333333;
                                }
                            }
                        }

                        .item-total {
                            flex: 1;
                            color: #FF6600;
                        }

                        .item-del {
                            flex: 1;
                            width: 14px;
                            height: 12px;
                            background: url('/imgs/icon-close.png') no-repeat center;
                            background-size: contain;
                            cursor: pointer;
                        }
                    }
                }
            }

            .order-wrap {
                font-size: 14px;
                color: #666666;
                margin-top: 20px;
                height: 50px;
                line-height: 50px;

                .cart-tip {
                    margin-left: 29px;

                    a {
                        color: #666666;
                        margin-right: 37px;
                    }

                    span {
                        color: #FF6600;
                        margin: 0 5px;
                    }
                }

                .total {
                    font-size: 14px;
                    color: #FF6600;

                    span {
                        font-size: 24px;
                    }

                    a {
                        width: 202px;
                        height: 50px;
                        line-height: 50px;
                        font-size: 18px;
                        margin-left: 37px;
                    }
                }
            }
        }
    }
</style>
