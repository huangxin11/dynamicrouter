<!--
 * @Description: 默认注释
 * @Author: huangxin
 * @Date: 2021-08-05 10:27:53
 * @LastEditTime: 2021-09-10 16:56:49
-->
<template>
  <!-- <div></div> -->
  <div ref="pieDom" :style="{ width: '100%', height: height }"></div>
</template>
<script>
export default {
  name: "hello",
  props: {
    crossData: {
      type: Object,
      default: () => {}
    },
    params: {
      type: Object,
      default: () => {}
    },
    height: {
      type: String,
      default: "600px"
    }
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  mounted() {
    if (this.crossData) {
      this.drawLine();
    }
  },
  methods: {
    drawLine() {
      let _this = this;
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(this.$refs.pieDom);
      // 绘制图表
      myChart.setOption(this.crossData);
      if (this.params) {
        myChart.on("click", function() {
          localStorage.setItem("crossParams", JSON.stringify(_this.params));
          _this.$router.push({
            name: "analysis",
            params: { params: _this.params }
          });
        });
      }
    }
  }
};
</script>
