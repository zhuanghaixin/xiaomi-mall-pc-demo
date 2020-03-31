 <template>
  <div>product
    <div>传的参数{{id}}</div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: "Product",
  data(){
    return{
      id:this.$route.params.id
    }
  },
  watch:{
    //当我们监听parms.id的变化，需要用到watch
    // eslint-disable-next-line no-unused-vars
    $route(to,from){
      this.id=to.params.id
    }
  },

};
</script>

<style lang="scss" scoped>
</style>
