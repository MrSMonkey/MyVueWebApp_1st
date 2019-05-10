<template>
    <section>
      <person-form  @has-log="onLog"></person-form>
    </section>
</template>
<script>
  // import Vue from 'vue'
  import personForm from '@/components/personForm.vue'
  // import keepAliveConf from '@/config/keepAliveConf'
  export default {
    name: 'formTest',
    components: {
      personForm
    },
    data () {
      return {
        aa: 1
      }
    },
    methods: {
      onLog (data) {
        console.log(data)
      },
      test () {
        this.testMixins()
      },
      getPrice () {
        let buyVersionsArray = this.versions.map((item, index) => {
          return item.value
        })
        // console.log(buyVersionsArray)
        let reqParams = {
          buyNumber: this.buyNum,
          buyType: this.buyType.value,
          period: this.period.value,
          version: buyVersionsArray.join(',')
        }
        this.$http.post('/api/getPrice', reqParams)
        .then((res) => {
          this.price = res.body.amount
        })
      }
    },
    mounted () {
      // console.log('mounted11', this.$store.getters.getKeepaliveComponents)
      this.$store.dispatch('fetchRemoveKeepaliveComponent', 'formTest')
      // console.log('mounted22', this.$store.getters.getKeepaliveComponents)
      // console.log('mounted formTest')
      // console.log(this.cache)
      // console.log(this._vnode)
    },
    activated () {
      // console.log('activated', this.$store.getters.getKeepaliveComponents)
    },
    beforeRouteEnter (to, from, next) {
      // console.log('beforeRouteEnter', keepAliveConf.value)
      next()
    },
    beforeRouteUpdate (to, from, next) {
      next()
    },
    beforeRouteLeave (to, from, next) {
      // console.log(11111111)
      // console.log(to)
      // console.log(from)
      // if (to.name !== 'city') {
      //   let vue = new Vue()
      //   console.log(vue.$pruneCacheEntry)
      //   vue.removeKeepAlive('formTest')
      // }
      // new Vue().addKeepAlive('formTest', next)
      // let vue = new Vue()
      // vue.$store.dispatch('fetchRemoveKeepaliveComponent', 'formTest', next)
      next()
    }
  }
</script>

