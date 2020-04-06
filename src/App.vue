<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import jsonp from "jsonp";
// import storage from './storage/index.js'
import {mapActions} from 'vuex'
export default {
  name: "app",
  components: {},
  data() {
    return {
      res: {}
    };
  },
  mounted() {
    // storage.setItem('a',1)
    // storage.setItem('user',{b:1})
    // storage.setItem('user',{a:1},'user')
    // storage.clear('sex','user')
    //第一种，本地加载请求静态json文件的形式
    // this.axios.get('/mock/user/login.json').then((res)=>{
    //   this.res=res
    // })
    //第二种，通过easy-mock平台实现数据mock
    // this.axios.get('/user/login').then((res)=>{
    //   this.res=res
    // })
    //第三种，本地集成mockjs进123行mock
    // this.axios.get('/user/login').then((res)=>{
    //   this.res=res
    // })
    this.getUser()
    this.getCartCount()
  },
  methods: {
    //拉取用户信息
    getUser() {
      // eslint-disable-next-line no-unused-vars,no-console
      this.axios.get('/user').then((res) => {
        //TODO 保存用户信息到vuex里面
        // this.$store.dispatch('saveUserName',res.username)
        this.saveUserName(res.username)
      })
    },
    //拉取购物车数量
    getCartCount() {
      // eslint-disable-next-line no-unused-vars
      this.axios.get('/carts/products/sum').then((res) => {
        //TODO 保存到vuex里面
        // this.$store.dispatch('saveCartCount',res)
        this.saveCartCount(res)
      })
    },
    ...mapActions([
            'saveUserName',
            'saveCartCount'
    ])
  }

};

</script>

<style lang="scss">
 /*@import './assets/scss/config.scss';*/
 /*@import './assets/scss/reset.scss';*/
  @import './assets/scss/modal.scss';
 @import './assets/scss/button.scss';
</style>
