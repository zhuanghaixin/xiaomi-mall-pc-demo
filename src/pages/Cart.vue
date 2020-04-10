<template>
    <div>
        <OrderHeader title="我的购物车">
            <template v-slot:tip>
                    <span>温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算 j</span>
            </template>
        </OrderHeader>
        <NavFooter/>
    </div>
</template>

<script>
    import NavFooter from "../components/TheNavFooter";
    import OrderHeader from '../components/OrderHeader.vue';

    export default {
        name: "Cart",
        components: {
            NavFooter,
            OrderHeader
        }
    };
</script>

<style lang="scss" scoped>
</style>
