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
                    <Loading v-if="loading"></Loading>
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
                    <el-pagination
                            class="pagition"
                            background
                            layout="prev, pager, next"
                            :total="total"
                            :pageSize="pageSize"
                            @current-change="handleChange"
                    >
                    </el-pagination>
                    <NoData v-if="!loading && list.length==0"></NoData>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import OrderHeader from '../components/OrderHeader.vue';
    import Loading from './../components/Loading.vue'
    import NoData from './../components/NoData.vue'
    import {Pagination} from 'element-ui'

    export default {
        name: "OrderList",
        components: {
            OrderHeader,
            Loading,
            NoData,
            [Pagination.name]:Pagination
        },
        data() {
            return {
                list: [],
                loading:true,
                pageSize:10,
                total:0,
                pageNum:1
            }
        },
        mounted() {
            this.goOrderList()
        },
        methods: {
            goOrderList(){
                this.axios.get('/orders',{
                    params:{
                        pageNum:this.pageNum
                    }
                }).then((res)=>{
                    this.loading=false
                    this.list= res.list
                    this.total=res.total
                })
            },
            goPay(orderNum){
                this.$router.push({
                    name:'order-pay',
                    query:{
                        orderNum
                    }
                })
            },
            handleChange(pageNum){
                this.pageNum=pageNum
                this.goOrderList()
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
                        @include height(74px,74px);
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
                            @include height(145px,145px);
                            font-size: 20px;
                            color:$colorA;
                            a{
                                color:$colorA;
                            }
                        }
                    }
                }
                .pagition{
                    text-align:right
                }
                .el-pagination.is-background .el-pager li:not(.disabled).active{
                    background-color:$colorA;
                    color:#FFF;
                }

            }
        }
    }
</style>
