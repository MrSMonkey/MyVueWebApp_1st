// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Layout from './components/layout'
import './util/commonMixins.js'
import router from './router'
import VueResource from 'vue-resource'
import Store from './store'
Vue.config.productionTip = false
Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store: Store,
  template: '<Layout/>',
  components: { Layout }
})
