<template>
    <div class="order-list">
        <OrderHeader title="订单列表">
            <template v-slot:tip>
                <span>温馨提示：请谨防钓鱼链接或诈骗电话，了解更多 </span>
            </template>
        </OrderHeader>
        <div class="wrapper">
            <div class="container">
                <div class="order-box">
                    <div class="order" v-for="(order,index) in list" :key="index">
                        <div class="order-title">
                            <div class="item-info fl">
                                {{order.createTime}}
                                <span>|</span>
                                {{order.receiverName}}
                                <span>|</span>
                                订单号：{{order.orderNo}}
                                <span>|</span>
                                {{order.paymentTypeDesc}}
                            </div>
                            <div class="item-money fr">
                                <span>应付金额：</span>
                                <span class="money">{{order.payment}}</span>
                                <span>元</span>
                            </div>
                        </div>
                        <div class="order-content clearfix">
                            <div class="good-box fl">
                                <div class="good-list" v-for="(item,i) in order.orderItemVoList" :key="i">
                                    <div class="good-img">
                                        <img v-lazy="item.productImage" alt="">
                                    </div>
                                    <div class="good-name">
                                        <div class="p-name">{{item.productName}}</div>
                                        <div class="p-money">{{item.totalPrice + 'X' + item.quantity}}元</div>
                                    </div>
                                </div>
                            </div>
                            <div class="good-state fr" v-if="order.status==20">
                                <a href="javascript:;">{{order.statusDesc}}</a>
                            </div>
                            <div class="good-state fr" v-else>
                                <a href="javascript:;" @click="goPay(order.orderNo)">{{order.statusDesc}}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import OrderHeader from '../components/OrderHeader.vue';

    export default {
        name: "OrderList",
        components: {
            OrderHeader
        },
        data() {
            return {
                list: []
            }
        },
        mounted() {
            this.goOrderList()
        },
        methods: {
            goOrderList(){
                this.axios.get('/orders/').then((res)=>{
                    this.list=res.list
                })
            },
            goPay(orderNum){
                this.$router.push({
                    name:'order-pay',
                    query:{
                        orderNum
                    }
                })
            }
        }
    };
</script>

<style lang="scss" scoped>
    @import "../assets/scss/base.scss";

    .order-list{
        .wrapper{
            background-color:$colorJ;
            padding-top:33px;
            padding-bottom:110px;
            .order-box{
                .order{
                    border:1px solid $colorF;
                    background-color:$colorG;
                    margin-bottom:31px;
                    &:last-child{
                        margin-bottom:0;
                    }
                    .order-title{
                        height: 74px;
                        line-height: 74px;
                        background-color:$colorK;
                        padding:0 43px;
                        font-size:16px;
                        color:$colorC;
                        .item-info{
                            span{
                                margin:0 9px;
                            }
                        }
                        .money{
                            font-size:26px;
                            color:$colorB;
                        }
                    }
                    .order-content{
                        padding:0 43px;
                        .good-box{
                            .good-list{
                                display: flex;
                                align-items: center;
                                height:145px;
                                .good-img{
                                    width:112px;
                                    img{
                                        width:100%;
                                    }
                                }
                                .good-name{
                                    font-size:20px;
                                    color:$colorB;
                                }
                            }
                        }
                        .good-state{
                            height:145px;
                            line-height: 145px;
                            font-size: 20px;
                            color:$colorA;
                            a{
                                color:$colorA;
                            }
                        }
                    }
                }

            }
        }
    }
</style>
