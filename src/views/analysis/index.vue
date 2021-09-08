<!--
 * @Description: 默认注释
 * @Author: huangxin
 * @Date: 2021-08-04 16:16:47
 * @LastEditTime: 2021-09-08 17:08:04
-->
<template>
  <div class="app-container">
	<el-row :gutter="20" class="blok">
		<el-col :span="6">
			<span class="demonstration">开始日期：</span>
			<el-date-picker
				v-model="startAt"
				type="date"
				placeholder="选择日期">
			</el-date-picker>
		</el-col>
		<el-col :span="6">
			<span class="demonstration">结束日期：</span>
			<el-date-picker
				v-model="endAt"
				type="date"
				placeholder="选择日期">
			</el-date-picker>
		</el-col>
		<el-col :span="6" class="kind">
			<el-radio-group v-model="kind">
			<el-radio-button label="3">年</el-radio-button>
			<el-radio-button label="2">月</el-radio-button>
			<el-radio-button label="1">周</el-radio-button>
			<el-radio-button label="0">日</el-radio-button>
    		</el-radio-group>
		</el-col>
		<el-col :span="6" class="kind">
			<el-button type="primary" @click="queryData">查询</el-button>
		</el-col>
	</el-row>
	<el-row>
		<Cross
		:key="domKey"
		:crossData="crossData"
		>
		</Cross>
	</el-row>
  </div>
</template>

<script>
import { getCharData } from "../../api/api";
import Cross from "../dashboard/components/Cross.vue";

export default {
  components: {
    Cross
  },
  data() {
    return {
      params: {},
      startAt: "",
      endAt: "",
      kind: "2",
      crossData: {},
      domKey: 0
    };
  },
  filters: {},
  created() {},
  mounted() {
    this.params = this.$route.params.params;
    if (this.params) {
      this.queryData();
    } else {
      let data = JSON.parse(localStorage.getItem("crossParams"));
      if (data) {
        this.params = data;
        this.queryData();
      } else {
        this.$router.go(-1);
      }
    }
  },
  methods: {
    queryData() {
      let _this = this;
      let params = {
        api_url: this.params.api_url,
        method: this.params.method,
        params: {
          startAt: this.startAt,
          endAt: this.endAt,
          kind: this.kind
        }
      };
      getCharData(params).then(response => {
        let { code, data, message } = response;
        if (code !== 200) {
          this.$message({
            message: message,
            type: "error"
          });
        } else {
          _this.crossData = data;
          _this.domKey += 1;
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.blok {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 120px;
}
</style>
