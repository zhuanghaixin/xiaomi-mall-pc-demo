<template>
  <div>
    Home
    <NavHeader/>
    <router-view></router-view>
    <NavFooter/>
  </div>
</template>
<script>
import NavHeader from "../components/TheNavHeader";
import NavFooter from "../components/TheNavFooter";
export default {
  name: "nav-home",
  components: {
    NavHeader,
    NavFooter
  }
};
</script>
