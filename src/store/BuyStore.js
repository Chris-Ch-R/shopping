import Vue from 'vue'
import Vuex from 'vuex'
import BuyManage from './BuyManage'
import AuthService from '../services/AuthService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userAccounting: BuyManage.getAccOnCreate(),
    orders: getOrdersMap() ? getOrdersMap() :new Map(),
    ordersArr: getOrdersArr() ? getOrdersArr(): {data: []}
  },
  mutations: {
    async update(state) {
      state.userAccounting = await BuyManage.getAccounting()
    },
    clearOrder(state){
      state.orders = new Map()
      state.ordersArr = {data: []}
      localStorage.removeItem(AuthService.getUser().email+'_orders')
    },
    addOrder(state, { good, amount }) {
      state.orders.set(good.id, { good, amount })
      state.ordersArr.data = Array.from(state.orders.values())
      savingOrders(state.ordersArr)
    },
    deleteOrder(state, id) {
      state.orders.delete(id)
      state.ordersArr.data = Array.from(state.orders.values())
      savingOrders(state.ordersArr)
    }
  },
  getters: {
    userAccounting: state => state.userAccounting,
    ordersArr: state => state.ordersArr
  }
  ,
  actions: {
    async buy({ commit }) {
      if (AuthService.isAuthen()){
        return await BuyManage.buy(this.getters.ordersArr.data).then(({data, err}) => {
          if (!err){
            commit('update')
            commit('clearOrder')
          }
          else return err
        })
      }
      else return "You have to login before buying stuff"
    },
    async increaseCoins({ commit }, {amount}){
      if (AuthService.isAuthen()){
        return await BuyManage.increaseCoins(amount).then((err) => {
          if (!err){
            commit('update')
          }
          else return err
        })
      }
      else return "You have to login before increase coins"
    },
    addOrder({ commit }, { good, amount }) {
      if (good.amount >= amount) {
        if(typeof good.pic === "string"){
           good.pic = {url: good.pic}
        }
        commit('addOrder', { good, amount })
      }
      else return "Amount is over"
    },
    editOrder({ commit }, { good, amount }) {
      return this.addOrder({ commit }, { good, amount })
    },
    deleteOrder({ commit }, { id }) {
      commit('deleteOrder', id)
    }
  },
  modules: {
  }
})

function getOrdersMap(){
  let lsMap = new Map()
  let orderArr = JSON.parse(localStorage.getItem(AuthService.getUser().email+'_orders'))
  if(orderArr){
    for(let i=0;i<orderArr.data.length;i++){
      let data = orderArr.data[i]
      lsMap.set(data.good.id, { good:data.good, amount:data.amount })
    }
    return lsMap
  }
}
function getOrdersArr(){
    return JSON.parse(localStorage.getItem(AuthService.getUser().email+'_orders'))
}

function savingOrders(arr){
  localStorage.setItem(AuthService.getUser().email+'_orders', JSON.stringify(arr) )
}
