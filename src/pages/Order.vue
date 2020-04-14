<template>
  <div>
    <OrderHeader :title="title">
      <template v-slot:tip>
        <span>{{tip}}</span>
      </template>
    </OrderHeader>
    <router-view></router-view>
    <TheServiceBar/>
    <NavFooter/>
  </div>
</template>
<script>
import OrderHeader from "./../components/OrderHeader";
import NavFooter from "../components/TheNavFooter";
import TheServiceBar from '../components/TheServiceBar.vue';
export default {
  name: "Order",
  components: {
    OrderHeader,
    NavFooter,
    TheServiceBar
  },
  data(){
    return{
      title:'',
      tip:''
    }
  },
  mounted(){
    let path=this.$route.path;
    // eslint-disable-next-line no-console
    console.log(path)
    if(path=='/order/confirm'){
      this.title='确认订单'
      this.tip='请填写收货地址'
    }else if(path=='/order/list'){
      this.title='订单列表'
      this.tip='请谨防钓鱼链接或诈骗电话.了解更多>'
    }else if(path=='/order/pay'){
      this.title='订单支付'
      this.tip='请谨防钓鱼链接或诈骗电话.了解更多>'

    }

  }
};
</script>
