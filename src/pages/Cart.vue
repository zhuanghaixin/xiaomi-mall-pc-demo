<template>
    <div>
        <OrderHeader></OrderHeader>
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
