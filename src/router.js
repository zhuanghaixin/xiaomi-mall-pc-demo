import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home'
import Index from './pages/index'
import Product from './pages/product'
import Detail from './pages/detail'
import Login from './pages/login'
import Cart from './pages/cart'
import Order from './pages/order'
import OrderConfirm from './pages/orderConfirm'
import OrderPay from './pages/orderPay'
import OrderList from './pages/orderList'
import AliPay from './pages/alipay'
Vue.use(Router);

export default new Router({
  routes: [{
      path: '/',
      name: 'home', //根路由
      component: Home,
      redirect: '/index', //重定向 默认跳到index
      children: [{ //子路由
        path: '/index',
        name: 'index',
        component: Index,
      }, {
        path: '/product/:id',
        name: 'product',
        component: Product
      }, {
        path: '/detail/:id',
        name: 'detail',
        component: Detail
      }]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/order',
      name: 'order',
      component: Order,
      children: [{ //拼写错误 children拼写成childeren
          path: 'list',
          name: 'order-list',
          component: OrderList
        },
        {
          path: 'pay/:id',
          name: 'orderPay',
          component: OrderPay
        },
        {
          path: 'confirm',
          name: 'order-confirm',
          component: OrderConfirm
        }, {
          path: 'alipay',
          name: 'order-alipay',
          component: AliPay
        }

      ]
    }
  ]
})