import Vue from 'vue'
import Vuex from 'vuex'
import AuthService from '../services/AuthService'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: AuthService.getUser()
    },
    getters: {
        user:state => state.user,
        isAuthen:() => {return AuthService.isAuthen()}
    },
    mutations: {
        update(state){
            state.user = AuthService.getUser()
        },
        logout(state){
            state.user = {}
        },
        login(state,user){
            state.user = user
        }
    },
    actions: {
        async login({ commit }, data) {
            let err = await AuthService.login(data)
            commit('login',err.user)
            return err
        },
        logout({ commit }) {
            AuthService.logout()
            commit('logout')
        },
        async register({ commit }, data) {
            let err = await AuthService.register(data)
            commit('update')
            return err
        }
    },
    modules: {
    }
})
