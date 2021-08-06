import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ManageGoods from '../views/ManageGoods'
import Rewards from '../views/Rewards'
import LeaderBoard from '../views/LeaderBoard'
import Login from '@/views/Login'
import Logout from '@/views/Logout'
import Register from '@/views/Register'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
    component: ManageGoods
  },
  {
    path: '/reward',
    name: 'Reward',
    component: Rewards
  },
  {
    path: '/leader_board',
    name: 'LeaderBoard',
    component: LeaderBoard
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
