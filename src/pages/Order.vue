<template>
  <div>
    <OrderHeader></OrderHeader>
    <router-view></router-view>
    <NavFooter/>
  </div>
</template>
<script>
import OrderHeader from "./../components/OrderHeader";
import NavFooter from "../components/TheNavFooter";
export default {
  name: "Order",
  components: {
    OrderHeader,
    NavFooter
  }
};
</script>
