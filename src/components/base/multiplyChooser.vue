<template>
  <div class="chooser-component">
    <ul class="chooser-list">
      <li v-for="(item, index) in selections"
          :key="index"
          :class="{active: checkActive(index)}"
          @click="toggleSelection(index)"
        >{{ item.label }}</li>
    </ul>
  </div>
</template>

<script type="text/javascript">
  export default {
    props: {
      selections: {
        type: Array,
        default: [
          {
            label: 'test',
            value: 0
          }
        ]
      }
    },
    data () {
      return {
        nowIndexes: [0]
      }
    },
    methods: {
      toggleSelection (index) {
        // 获取当前index在nowIndexes中的位置,不存在则返回-1
        let curIndexPos = this.nowIndexes.findIndex(v => {
          return v === index
        })
        if (curIndexPos >= 0) {
          this.nowIndexes = this.nowIndexes.filter(v => {
            return v !== index
          })
        } else {
          this.nowIndexes.push(index)
        }
        let selectedData = this.nowIndexes.map((value, index) => {
          return this.selections[value]
        })
        this.$emit('on-change', selectedData)
      },
      checkActive (index) {
        return this.nowIndexes.includes(index)
      }
    }
  }
</script>

<style scoped>
  .chooser-component {
    position: relative;
    display: inline-block;
  }
  .chooser-list li{
    display: inline-block;
    border: 1px solid #e3e3e3;
    height: 25px;
    line-height: 25px;
    padding: 0 8px;
    margin-right: 5px;
    border-radius: 3px;
    text-align: center;
    cursor: pointer;
  }
  .chooser-list li.active {
    border-color: #4fc08d;
    background: #4fc08d;
    color: #fff;
  }
</style>