 <template>
  <div>
    <ProductParam>
      <template v-slot:buy>
        <button class="btn">立即购买</button>
      </template>
    </ProductParam>
    <div>传的参数{{id}}</div>

  </div>
</template>

<script>
  import ProductParam from '../components/ProductParam.vue';
export default {
  name: "Product",
  components: {
    ProductParam
  },
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
