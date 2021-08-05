import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ManageGoods from '../views/ManageGoods'
import Rewards from '../views/Rewards'
import LeaderBoard from '../views/LeaderBoard'

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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
