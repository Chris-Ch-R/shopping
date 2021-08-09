import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ManageGoods from '../views/ManageGoods'
import Rewards from '../views/Rewards'
import LeaderBoard from '../views/LeaderBoard'
import Login from '@/views/Login'
import Logout from '@/views/Logout'
import Register from '@/views/Register'
import History from '@/views/History'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      layout: "Nav2"
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/ManageGoods',
    name: 'ManageGoods',
    component: ManageGoods,
    meta:{
      layout: "Nav2"
    }
  },
  {
    path: '/reward',
    name: 'Reward',
    component: Rewards,
    meta:{
      layout: "Nav2"
    }
  },
  {
    path: '/leader_board',
    name: 'LeaderBoard',
    component: LeaderBoard,
    meta:{
      layout: "Nav2"
    }
  },
  {
    path: '/historys',
    name: 'History',
    component: History,
    meta:{
      layout: "Nav2"
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/logout',
    name: 'Logout',
    component: Logout
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
