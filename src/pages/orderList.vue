<template>
  <div class="order-wrap">
    <div class="order-list-choose">
      <div class="order-list-option">
        选择产品：
        <VSelection :selections="products" @on-change="productChange"></VSelection>
      </div>
      <div class="order-list-option">
      	开始日期：
      	<DatePicker format="YYYY-MM-DD" :value="startDate" @on-change="changeStartDate"></DatePicker>
      </div>
      <div class="order-list-option">
      	结束日期：
      	<DatePicker format="YYYY-MM-DD" :value="endDate" @on-change="changeEndDate"></DatePicker>
      </div>
      <div class="order-list-option">
      	关键词：
      	<input type="text" v-model.lazy="query" class="order-query">
      </div>
      <div class="order-list-table">
      	<table>
          <tr>
            <th v-for="(head, index) in tableHeads" :class="{active: head.active}" :key="index">{{ head.label }}</th>
          </tr>
          <tr v-for="item in tableData" :key="item.period">
            <td v-for="(head, index) in tableHeads" :key="index">{{ item[head.key] }}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  import VSelection from '../components/base/selection'
  import DatePicker from '../components/base/datepicker'
  export default {
    components: {
      VSelection,
      DatePicker
    },
    data () {
      return {
        query: '',
        productId: 0,
        startDate: '',
        endDate: '',
        products: [
          {
            label: '数据统计',
            value: 0
          },
          {
            label: '数据预测',
            value: 1
          },
          {
            label: '流量分析',
            value: 2
          },
          {
            label: '广告发布',
            value: 3
          }
        ],
        tableHeads: [
          {
            label: '订单号',
            key: 'orderId'
          },
          {
            label: '购买产品',
            key: 'product'
          },
          {
            label: '版本类型',
            key: 'version'
          },
          {
            label: '有效时间',
            key: 'period'
          },
          {
            label: '购买日期',
            key: 'date'
          },
          {
            label: '数量',
            key: 'buyNum'
          },
          {
            label: '总价',
            key: 'amount'
          }
        ],
        currentOrder: 'asc'
      }
    },
    computed: {
      tableData () {
        return this.$store.getters.getOrderList
      }
    },
    watch: {
      query (newVal, oldVal) {
        this.getParams()
      }
    },
    methods: {
      productChange (selected) {
        this.productId = selected.value
        this.getParams()
      },
      changeStartDate (date) {
        this.startDate = date
        this.getParams()
      },
      changeEndDate (date) {
        this.endDate = date
        this.getParams()
      },
      getParams () {
        let params = {
          query: this.query,
          productId: this.productId,
          startDate: this.startDate,
          endDate: this.endDate
        }
        this.$store.dispatch('fetchParams', params)
        this.$store.dispatch('fetchOrderList')
        console.log(this.$store.getters.getParams)
      }
    },
    mounted () {
      this.$store.dispatch('fetchOrderList')
    }
  }
</script>

<style scoped>
  .order-wrap {
    width: 1200px;
    min-height: 800px;
    margin: 20px auto;
    overflow: hidden;
  }
  .order-wrap h3 {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  .order-query {
    height: 25px;
    line-height: 25px;
    border: 1px solid #e3e3e3;
    outline: none;
    text-indent: 10px;
  }
  .order-list-option {
    display: inline-block;
    padding-left: 15px;
  }
  .order-list-option:first-child {
    padding-left: 0;
  }
  .order-list-table {
    margin-top: 20px;
  }
  .order-list-table table {
    width: 100%;
    background: #fff;
  }
  .order-list-table td,
  .order-list-table th {
    border: 1px solid #e3e3e3;
    text-align: center;
    padding: 10px 0;
  }
  .order-list-table th {
    background: #4fc08d;
    color: #fff;
    border: 1px solid #4fc08d;
    cursor: pointer;
  }
  .order-list-table th.active {
    background: #35495e;
  }
</style>
