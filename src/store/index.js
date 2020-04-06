import Vue from 'vue'
import Vuex from 'vuex'
import  actions from './actions';
import  getters from './getters';
import mutations from "./mutations";
Vue.use(Vuex)

const state={
  username:'', //登录用户名
  cartCount:-1  //购物车商品数量
}
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions

})
