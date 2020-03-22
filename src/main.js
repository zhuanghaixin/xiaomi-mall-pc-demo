import Vue from 'vue'
import store from './store'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import env from './env'

//根据前端跨域方式调整,后端域名与前端域名不同的时候要怎么写  后端/a/b
axios.defaults.baseURL='https://test-www.imooc/com/api'     //前端 /api/a/b  转发 => /a/b
axios.defaults.timeout=8000
//根据环境变量获取不同的请求地址
axios.defaults.baseURL=env.baseURL     //前端 /api/a/b  转发 => /a/b

//错误拦截
axios.interceptors.response.use(function(response){
   let res= response.data
  if(res.status==0){   //status:0 成功  status:10 未登录
    return res.data
  }else if(res.status==10){
    window.location.href ='/#/login'
  }else{
    alert(res.msg)  //弹出报错信息
  }
})
//注册 加载插件
Vue.use(VueAxios,axios)
//生产环境提示
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
