<template>
  <section>
    <city-chooser 
    :selections="cityList"
    @on-change="onParamChange($event)"></city-chooser>
    <div class="btn-panel">
      <a class="button">确定</a>
      <a class="button backButton" @click="back">返回</a>
    </div>
  </section>
</template>
<script>
import cityChooser from '@/components/base/chooser'
export default {
  name: 'city',
  components: {
    cityChooser
  },
  data () {
    return {
      cityList: [
        {
          label: '成都',
          value: 0
        },
        {
          label: '北京',
          value: 1
        },
        {
          label: '重庆',
          value: 2
        }
      ]
    }
  },
  methods: {
    onParamChange (value) {
      console.log(value)
    },
    back () {
      this.$router.back()
    }
  },
  mounted () {
    // console.log(keepAliveConf.value)
    console.log(111, this.$route.meta.keepAlive !== undefined && this.$route.meta.keepAlive)
    console.log(222, this.$route.meta.keepAlive !== undefined && !this.$route.meta.keepAlive)
  }
}
</script>
<style  type="text/css" scoped>
  .btn-panel{
    margin: 10px 0 0;
  }
</style>

