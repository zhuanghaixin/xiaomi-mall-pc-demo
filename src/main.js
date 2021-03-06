import Vue from 'vue'
import store from './store'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazyload from 'vue-lazyload'
import VueCookie from 'vue-cookie'
import {Message } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/scss/element-variables.scss';
import App from './App.vue'
// import env from './env'

//mock开关  用require不用import ,用import加载立刻被拦截，而我们不需要永远拦截，所以用require
// const mock=true
// if(mock){
//   // eslint-disable-next-line no-console
//   console.log(1)
//   require('./mock/api')
// }
axios.defaults.baseURL='/api'  //真实的地址
//根据前端跨域方式调整,后端域名与前端域名不同的时候要怎么写  后端/a/b
// axios.defaults.baseURL='https://test-www.imooc/com/api'     //前端 /api/a/b  转发 => /a/b  https://test-www.imooc/com/api/mock/user/login.json 需要注释
// axios.defaults.baseURL='https://easy-mock.bookset.io/mock/5e78874ca98e2502f92e9e1e/mimall'  //mock的地址

axios.defaults.timeout=8000
//根据环境变量获取不同的请求地址
// axios.defaults.baseURL=env.baseURL     //前端 /api/a/b  转发 => /a/b  http://dev-mall-pre.springboot.cn/api/mock/user/login.json 所以要注释


//错误拦截
axios.interceptors.response.use(function(response){
  // // eslint-disable-next-line no-console
  // console.log(response)
   let res= response.data
  //fixme 无论登录还是未登录都可以访问首页
  let path=location.hash
  if(res.status==0){   //status:0 成功  status:10 未登录
    return res.data
  }else if(res.status==10){
    if(path!='#/index'){
      window.location.href ='/#/login'
      return Promise.reject(res)
    }
  }else{
    // alert('main.js错误拦截')
    Message.warning('main.js错误拦截')
    // alert(res.msg)  //弹出报错信息
    Message.warning(res.msg)
    // 当我们输入不正确用户名还是会进入res,所以我们要用Promise.reject()
    return Promise.reject(res);
  }
},(err)=>{
  let res=err.response
  Message.error(res.data.message)
  return Promise.reject(res)
})

//注册 加载插件
Vue.use(VueAxios,axios)

//注册VueLazyload
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'dist/error.png',
  loading: '/imgs/loading-svg/loading-bars.svg',
  attempt: 1
})
// Tell Vue to use the plugin
Vue.use(VueCookie);
//注册Element UI
// Vue.use(ElementUI);
//只引入Message,并全局使用
Vue.prototype.$message = Message;


//生产环境提示
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
