<!--
 * @Description: 默认注释
 * @Author: huangxin
 * @Date: 2021-08-03 18:11:49
 * @LastEditTime: 2021-09-07 17:02:42
-->
<template>
  <div class="app-container">
    <el-row :gutter="20">
      <el-col :span="4" v-for="item in cardData" :key="item.icon">
        <div class="grid-content bg-purple">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <el-col style="text-align: left;" :span="12">
                <span>{{ item.title }}</span>
              </el-col>
              <el-col style="text-align: center;" :span="6" :push="6">
                <span class="header-label">{{ item.action }}</span>
              </el-col>
            </div>
            <div class="text item">
              <el-row :gutter="20">
                <el-col style="text-align: left;" :span="12">
                  <span style="font-size:24px">${{ item.value }}</span>
                </el-col>
                <el-col style="text-align: center;" :span="6" :push="5">
                  <span class="icon">
                    <i class="el-icon-set-up"></i>
                  </span>
                </el-col>
              </el-row>
              <el-row style="margin-top:30px" :gutter="20">
                <el-col style="text-align: left;" :span="12">
                  <span style="font-size:14px">总{{ item.title }}</span>
                </el-col>
                <el-col style="text-align: left;" :span="6" :push="5">
                  <span style="font-size:14px">{{ item.total }}</span>
                </el-col>
              </el-row>
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import "../../../styles/dashboard.scss";
export default {
  name: "Card",
  props: {
    cardData: {
      type: Array
    }
  },
  filters: {},
  created() {},
  mounted() {
    this.cardData = [
      {
        title: "访问数",
        icon: "visit-count|svg",
        value: 2000,
        total: 120000,
        color: "green",
        action: "月"
      },
      {
        title: "成交额",
        icon: "total-sales|svg",
        value: 20000,
        total: 500000,
        color: "blue",
        action: "月"
      },
      {
        title: "下载数",
        icon: "download-count|svg",
        value: 8000,
        total: 120000,
        color: "orange",
        action: "周"
      },
      {
        title: "成交数",
        icon: "transaction|svg",
        value: 5000,
        total: 50000,
        color: "purple",
        action: "年"
      }
    ];
  }
};
</script>
<style scoped>
body {
  background: #c2c2c2;
}
.content-row {
  margin-top: 60px;
  margin-bottom: 20px;
  /* last-child {
	  margin-bottom: 0;
	} */
}
</style>
