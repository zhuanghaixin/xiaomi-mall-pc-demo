<template>
  <div>
    <NavHeader/>
    <router-view></router-view>
    <NavFooter/>
  </div>
</template>
<script>
  import NavHeader from "../components/TheNavHeader";
  import NavFooter from "../components/TheNavFooter";
  export default {
    name: "NavHome",
    components: {
      NavHeader,
      NavFooter
    }
  };
</script>
