import Vue from 'vue'
import Vuex from 'vuex'
import Axios from "axios";

let api_path = "/mock/mockup.json";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      goods:[]
  },
  getters:{
      goods: (state) => state.goods
  },
  mutations: {
      fetchGoods(state , {res}){
        state.goods = res.data.goods
      }
  },
  actions: {
      async fetchGoods({commit}){
        let res = await Axios.get(api_path)
        commit('fetchGoods' , {res})
      }
  },
  modules: {
  }
})
