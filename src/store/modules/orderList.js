import Vue from 'vue'

const state = {
  orderList: [],
  params: {}
}
const getters = {
  getOrderList: state => state.orderList,
  getParams: state => state.params
}
const mutations = {
  updateOrderList (state, newData) {
    state.orderList = newData
  },
  updateParams (state, newData) {
    for (let [key, value] of Object.entries(newData)) {
      state.params[key] = value
    }
  }
}
const actions = {
  fetchOrderList ({ commit, state }) {
    Vue.http.post('/api/getOrderList', state.params)
    .then(res => {
      commit('updateOrderList', res.body.list)
      state.total = res.body.total
    }).catch(err => {
      console.log(err)
    })
  },
  fetchParams ({ commit, state }, newData) {
    commit('updateParams', newData)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
