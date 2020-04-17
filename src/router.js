import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/Home'
import Index from './pages/index'
import Product from './pages/Product'
import Detail from './pages/Detail'
import Login from './pages/Login'
import Cart from './pages/Cart'
import Order from './pages/Order'
import OrderConfirm from './pages/OrderConfirm'
import OrderPay from './pages/OrderPay'
import OrderList from './pages/OrderList'
import AliPay from './pages/AliPay'

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
                    path: 'pay',
                    name: 'order-pay',
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
                }]
        }
    ]
})

