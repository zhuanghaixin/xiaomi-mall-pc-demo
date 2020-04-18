<template>
  <div>
    <router-view></router-view>
    <TheServiceBar/>
    <NavFooter/>
  </div>
</template>
<script>
import NavFooter from "../components/TheNavFooter";
import TheServiceBar from '../components/TheServiceBar.vue';
export default {
  name: "Order",
  components: {
    NavFooter,
    TheServiceBar
  },
  data(){
    return{
      title:'',
      tip:''
    }
  }

};
</script>
