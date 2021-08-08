import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './css/style.css'
import VueAxios from 'vue-axios'
import Axios from 'axios'
import Swal from 'vue-swal'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false
Vue.use(VueAxios, Axios);
Vue.use(Swal)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
