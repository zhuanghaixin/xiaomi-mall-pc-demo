<template>
    <div class="loading">
        <img src="/imgs/loading-svg/loading-bars.svg" alt="">
    </div>
</template>
<script>
    export default{
        name:'loading'
    }
</script>
<style lang="scss" scoped>
    .loading{
        height:80px;
        line-height:80px;
        text-align:center;
        padding:30px 0;
        img{
            // height: 100%;   //与盒子模型有关 这里img宽度等于20px  80-padding*2
            height:80px
        }
    }
</style>
