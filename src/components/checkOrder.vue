<template>
  <div>
    <ThisDialog :is-show="isShowCheckDialog" @on-close="1">
      请检查你的支付状态！
      <div class="button" @click="checkStatus">支付成功</div>
      <div class="button" @click="checkStatus">支付失败</div>
    </ThisDialog>
    <ThisDialog :is-show="isShowSuccessDialog" @on-close="toOrderList('isShowSuccessDialog')">购买成功！</ThisDialog>
    <ThisDialog :is-show="isShowFailDialog" @on-close="toOrderList('isShowFailDialog')">购买失败！</ThisDialog>
  </div>
</template>

<script>
  import ThisDialog from './base/dialog'
  export default {
    components: {
      ThisDialog
    },
    props: {
      isShowCheckDialog: {
        type: Boolean,
        default: false
      },
      orderId: {
        type: String
      }
    },
    data () {
      return {
        isShowFailDialog: false,
        isShowSuccessDialog: false
      }
    },
    methods: {
      toOrderList (attr) {
        this[attr] = false
        this.$router.push({
          path: '/orderList'
        })
      },
      checkStatus () {
        this.$http.post('/api/checkOrder', {
          orderId: this.orderId
        }).then(res => {
          this.isShowSuccessDialog = true
          this.$emit('on-close-check-dialog')
        }).catch(err => {
          console.log(err)
          this.isShowFailDialog = true
          this.$emit('on-close-check-dialog')
        })
      }
    }
  }
</script>
