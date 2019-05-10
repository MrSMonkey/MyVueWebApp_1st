const state = {
  keepaliveComponents: ['forecast', 'analysis', 'publish', 'count', 'formTest'].join()
}
const getters = {
  getKeepaliveComponents: state => state.keepaliveComponents
}
const mutations = {
  removeKeepaliveComponent (state, removeComponent, callback) {
    let arr = state.keepaliveComponents.split(',')
    if (removeComponent && typeof removeComponent === 'string') {
      let i = arr.indexOf(removeComponent)
      if (i > -1) {
        arr.splice(i, 1)
        state.keepaliveComponents = arr.join()
        console.log('removeKeepAlive', state.keepaliveComponents)
        callback && callback()
      }
    }
  }
}
const actions = {
  fetchRemoveKeepaliveComponent ({commit, state}, removeComponent, callback) {
    commit('removeKeepaliveComponent', removeComponent, callback)
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
