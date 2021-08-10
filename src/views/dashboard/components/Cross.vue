<!--
 * @Description: 默认注释
 * @Author: huangxin
 * @Date: 2021-08-05 10:27:53
 * @LastEditTime: 2021-08-05 18:07:06
-->
<template>
  <div></div>
  <!-- <div ref="pieDom" :style="{ width: '100%', height: height }"></div> -->
</template>
<script>
export default {
  name: "hello",
  props: {
    crossData: {
      type: Object,
      default: () => {}
    },
    height: {
      type: String,
      default: "400px"
    }
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(this.$refs.pieDom);
      // 绘制图表
      if (this.crossData) {
        myChart.setOption(this.crossData);
      }
    }
  }
};
</script>
