import Vue from 'vue'
import Vuex from 'vuex'
import Axios from "axios"

let api_path = "http://localhost:1337/rewards"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user:[]
  },
  getters:{
    users: (state) => state.users
  },
  mutations: {
    getUsers(state , {res}){
      state.users = res.data
    }
  },
  actions: {
    async getUsers({ commit }) {
      let res = await Axios.get(api_path)
      commit("getUsers", { res });
    }
  },
  modules: {
  }
})
