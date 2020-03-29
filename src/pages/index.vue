<template>
    <div class="service-bar-bottom">
        <ServiceBar/>
    </div>
</template>
<script>
    import ServiceBar from "../components/TheServiceBar.vue";

    export default {
        name: "index",
        components: {
            ServiceBar
        }
    };
</script>
<style scoped lang="scss">
  /*.service-bar-bottom{*/
  /*  position: relative;*/
  /*  bottom: 0px;*/
  /*}*/
</style>
