<!--
 * @Description: 默认注释
 * @Author: huangxin
 * @Date: 2021-08-04 10:21:34
 * @LastEditTime: 2021-08-09 11:18:57
-->
<template>
  <el-row class="login">
    <el-col :span="12" class="left_bg"></el-col>
    <el-col :span="12" class="login_from">
      <loginFrom></loginFrom>
    </el-col>
  </el-row>
</template>

<script>
import loginFrom from "./login/from.vue";
export default {
  components: {
    loginFrom
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.login {
  height: 100%;
  background-size: 100% 100%;
  filter: alpha(Opacity=85);
  -moz-opacity: 0.85;
  opacity: 0.85;
  background: #304156;
  .left_bg {
    height: 100%;
    background-image: url("../public/image/svg/illustration.svg");
    background-size: 100% 100%;
  }
}
</style>
