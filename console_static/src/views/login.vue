<template>
  <div class="about">
    <el-container>
      <el-header>登录页</el-header>
      <el-container>
        <el-main>
          <div>
            <form method="get"></form>

            <router-link to="/homepage">登录</router-link>
          </div>
        </el-main>
        <el-aside width="50%">Aside</el-aside>
      </el-container>
    </el-container>
  </div>
</template>
<style lang="less" scoped>
.about {
  .el-header {
    background-color: #fff;
    color: #333;
    box-shadow: 0 0 13px rgba(0, 0, 0, 0.2);
    height: 10vh !important;
    min-height: 60px;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #d3dce6;
    color: #333;
    height: 90vh;
    min-height: 500px;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    color: #333;
    max-height: 90vh;
    min-height: 500px;
    text-align: center;
    line-height: 160px;
  }
}
</style>
<script>
export default {
  data() {},
  methods: {},
};
</script>
