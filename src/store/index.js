import Vuex from 'vuex'
import Vue from 'vue'
import orderList from './modules/orderList'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    orderList
  }
})
export default store
