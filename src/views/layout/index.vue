<template>
  <div class="app-wrapper">
    <el-row class="container">
      <el-col :span="24" class="header">
        <el-col :span="10" class="logo logo-width">
          <img src="../../public/image/favicon.png" />
          {{ sysName }}
        </el-col>
        <el-col :span="4" class="userinfo">
          <el-dropdown trigger="hover">
            <span class="el-dropdown-link userinfo-inner"
              ><img src="../../public/image/logo.jpg" /> {{ sysUserName }}</span
            >
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>我的消息</el-dropdown-item>
              <el-dropdown-item>设置</el-dropdown-item>
              <el-dropdown-item divided @click.native="logout"
                >退出登录</el-dropdown-item
              >
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-col>
    </el-row>
    <sidebar class="sidebar-container"></sidebar>
    <div class="main-container">
      <app-main></app-main>
    </div>
  </div>
</template>
a
<script>
import AppMain from "@/views/layout/components/AppMain"; //页面布局的右侧区域
import sidebar from "@/views/layout/components/sidebar"; //页面布局的左侧菜单

export default {
  name: "layout",
  data() {
    return {
      sysName: "羊爸爸",
      sysUserName: ""
    };
  },
  components: {
    sidebar,
    AppMain
  },
  created() {
    var user = localStorage.getItem("user");
    if (user) {
      user = JSON.parse(user);
      this.sysUserName = user.username || "";
    }
  },
  methods: {
    logout() {
      var _this = this;
      this.$confirm("确认退出吗?", "提示", {
        //type: 'warning'
      }).then(() => {
        localStorage.removeItem("user");
        localStorage.removeItem("router");
        _this.$router.push("/login");
      });
    }
  }
};
</script>

<style scoped lang="scss">
.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
}
.container {
  position: absolute;
  top: 0px;
  bottom: 0px;
  width: 100%;
  .userinfo {
    text-align: right;
    padding-right: 35px;
    float: right;
    .userinfo-inner {
      cursor: pointer;
      color: #fff;
      img {
        width: 40px;
        height: 40px;
        border-radius: 20px;
        margin: 10px 0px 10px 10px;
        float: right;
      }
    }
  }
  .header {
    position: fixed;
    top: 0;
    left: 0;
    height: 60px;
    z-index: 9999;
    line-height: 60px;
    background: rgb(48, 65, 86);
    color: #fff;
    .logo {
      //width:230px;
      height: 60px;
      font-size: 22px;
      padding-left: 20px;
      padding-right: 20px;
      border-color: rgba(238, 241, 146, 0.3);
      border-right-width: 1px;
      border-right-style: solid;
      border-bottom-width: 1px;
      border-bottom-style: solid;
      img {
        width: 40px;
        float: left;
        margin: 10px 10px 10px 18px;
      }
      .txt {
        color: #fff;
      }
    }
    .logo-width {
      width: 180px;
    }
  }
}
</style>
