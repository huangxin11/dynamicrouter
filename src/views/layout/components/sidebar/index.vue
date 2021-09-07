<!--
 * @Description: 默认注释
 * @Author: huangxin
 * @Date: 2021-08-04 14:47:34
 * @LastEditTime: 2021-09-06 18:20:43
-->
<template>
    <el-menu mode="vertical" unique-opened :default-active="$route.path" background-color="#304156" text-color="#fff" active-text-color="#409EFF">
      <sidebar-item :routes="routes"></sidebar-item>
    </el-menu>
</template>

<script>
import sidebarItem from "./sidebarItem";

export default {
  components: { sidebarItem },
  computed: {
    routes() {
      return global.antRouter;
    }
  }
};
</script>
