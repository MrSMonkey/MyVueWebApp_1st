import Vuex from 'vuex'
import Vue from 'vue'
import orderList from './modules/orderList'
import manageKeepalive from './modules/manageKeepalive'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    orderList,
    manageKeepalive
  }
})
export default store
