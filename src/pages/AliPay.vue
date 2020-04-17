 <template>
  <div class="ali-pay">
    <Loading v-if="loading"></Loading>
    <div class="form" v-html="content"></div>
  </div>
</template>

<script>
  import Loading from './../components/Loading'
export default {
  name: "AliPay",
  components: {
    Loading
  },
  data(){
    return {
      orderId:this.$route.query.orderNum,
      content:'',
      loading:true
    }
  },
  mounted() {
    this.paySubmit()
  },
  methods: {
    paySubmit(){
      this.axios.post('/pay',{
        orderId:this.orderId,
        orderName:'Vue仿小米商城',
        amount:0.01,
        payType:1
      }).then((res)=>{
        this.content=res.content
        setTimeout(()=>{
          document.forms[0].submit()
        },100)
      })
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
