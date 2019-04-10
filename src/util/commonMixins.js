import Vue from 'vue'
import keepAliveConf from '@/config/keepAliveConf'

Vue.mixin({
  methods: {
    testMixins () {
      alert('mixins')
    },
    resetKeepAlive (name) {
      // const conf = keepAliveConf.value
      console.log(3, keepAliveConf.value)
      let arr = keepAliveConf.value.split(',')
      if (name && typeof name === 'string') {
        let i = arr.indexOf(name)
        if (i > -1) {
          arr.splice(i, 1)
          keepAliveConf.value = arr.join()
          // console.log(1, keepAliveConf.value)
          // setTimeout(() => {
          //   keepAliveConf.value = conf
          //   console.log(2, keepAliveConf.value)
          // }, 500)
        } else {
          arr.push(name)
          keepAliveConf.value = arr.join()
        }
      }
    }
  }
})
