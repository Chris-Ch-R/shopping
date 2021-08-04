import Vue from 'vue'
import Vuex from 'vuex'
import Axios from "axios";

let api_path = "/mock/mockup.json";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    goods: [],
    rewards: []
  },
  getters: {
    goods: (state) => state.goods,
    rewards: (state) => state.rewards
  },
  mutations: {
    getGoods(state, { res }) {
      state.goods = res.data.goods
    },
    addGoods(state, { payload }) {
      state.goods.push(payload);
    },
    deleteGoods() {

    },
    editGoods(state, { payload }) {
      state.goods[payload.index].goodName = payload.goodName
      state.goods[payload.index].cost = payload.cost
      state.goods[payload.index].amount = payload.amount
      state.goods[payload.index].cost_type = payload.cost_type
      state.goods[payload.index].detail = payload.detail
    },
    increaseGood(state, { payload }) {
      state.goods[payload.index].amount += payload.amount
    },
    decreaseGood(state, { payload }) {
      state.goods[payload.index].amount -= payload.amount
    }
  },
  actions: {
    async getGoods({ commit }) {
      let res = await Axios.get(api_path)
      commit('getGoods', { res })
    },
    addGoods({ commit }, payload) {
      commit('addGoods', { payload })
    },
    deleteGoods() {

    },
    editGoods({ commit }, payload) {
      commit("editGoods", { payload })
    },
    increaseGood({ commit }, payload) {
      commit("increaseGood", { payload })
    },
    decreaseGood({ commit }, payload) {
      commit("decreaseGood", { payload })
    }
  },
  modules: {
  }
})
