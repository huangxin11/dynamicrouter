<!--
 * @Description: 默认注释
 * @Author: huangxin
 * @Date: 2021-08-03 18:11:49
 * @LastEditTime: 2021-09-07 11:20:39
-->
<template>
  <div class="app-container">
    <el-row class="content-row">
      <el-col
        v-for="item in menuIdList"
        :key="item.id"
        :span="item.row == 3 ? item.span : 24"
      >
        <el-col v-if="item.row == 1">
          <Card :key="domKey" :cardData="item.children"></Card>
        </el-col>
        <el-col v-else>
          <Cross
            :key="domKey"
            :height="item.row == 3 ? '300px' : '400px'"
            :crossData="item.children"
          ></Cross>
        </el-col>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Card from "./components/Card.vue";
import Cross from "./components/Cross.vue";
import { getApiMenuId, getCharData } from "../../api/api";
export default {
  components: {
    Card,
    Cross
  },
  data() {
    return {
      path_id: "",
      domKey: 0,
      menuIdList: null
    };
  },
  watch: {
    $route(to, from) {
      this.path_id = to.query.id;
      this.getMenuId();
    }
  },

  filters: {},
  created() {},
  mounted() {
    this.path_id = this.$route.query.id;
    this.getMenuId();
  },
  methods: {
    getMenuId() {
      let _this = this;
      getApiMenuId(this.path_id).then(res => {
        let { code, data, message } = res;
        if (code !== 200) {
          this.$message({
            message: message,
            type: "error"
          });
        } else {
          _this.menuIdList = data;
          data.forEach(item => {
            let params = {
              api_url: item.api_url,
              method: item.method,
              params: {}
            };
            getCharData(params).then(response => {
              let { code, data, message } = response;
              if (code !== 200) {
                this.$message({
                  message: message,
                  type: "error"
                });
              } else {
                item.children = data;
                if (item.row == 3) {
                  item.span = 8;
                }
                _this.domKey += 1;
              }
            });
          });
        }
      });
    }
  },
  toDetailsFigure: function(item) {
    debugger;
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
