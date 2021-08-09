import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      count:0
  },
  getters:{
      count:(state)=>state.count
  },
  mutations: {
    addOneCart(state){
          state.count += 1

      }
  },
  actions: {
    addOneCart({commit}){
        commit('addOneCart')
    }
  },
  modules: {
  }
})
