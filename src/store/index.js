import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions';
import * as getters from './getters';
import mutations from "./mutations";
Vue.use(Vuex)

const state={
  username:'', //登录用户名
  cartCount:0  //购物车商品数量
}
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions

})
