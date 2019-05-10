import Vue from 'vue'
import keepAliveConf from '@/config/keepAliveConf'

Vue.mixin({
  methods: {
    testMixins () {
      alert('mixins')
    },
    removeKeepAlive (name, next) {
      // const conf = keepAliveConf.value
      let arr = keepAliveConf.value.split(',')
      if (name && typeof name === 'string') {
        let i = arr.indexOf(name)
        if (i > -1) {
          arr.splice(i, 1)
          keepAliveConf.value = arr.join()
          console.log('removeKeepAlive', keepAliveConf.value)
          next && next()
          // setTimeout(() => {
          //   keepAliveConf.value = conf
          //   console.log(2, keepAliveConf.value)
          // }, 500)
        }
      }
    },
    addKeepAlive (name, next) {
      let arr = keepAliveConf.value.split(',')
      if (name && typeof name === 'string') {
        let i = arr.indexOf(name)
        if (i < 0) {
          arr.push(name)
          keepAliveConf.value = arr.join()
        }
        console.log('addKeepAlive', keepAliveConf.value)
        next && next()
      }
    }
  }
})
