<template>
  <div class="home">
    <el-container>
      <el-header>客服工作台</el-header>
      <el-container>
        <el-aside width="290px">
          <div class="left_aside">
            <div class="head_nav">
              <div>
                <img src="../assets/头像.png" />
                <div>
                  <p>songtao</p>
                  <p>超级管理员</p>
                </div>
              </div>
              <div><img src="../assets/邀请.png" /><span>邀请会话</span></div>
            </div>
          </div>
        </el-aside>
        <el-container>
          <el-main>Main</el-main>
          <el-aside width="340px">Aside</el-aside>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
<style lang="less" scoped>
.home {
  > .el-container {
    height: 100%;
    .left_aside {
      height: 100%;
      width: 100%;
      .head_nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 64px;
        > div:nth-of-type(1) {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 180px;
          p:nth-of-type(1) {
            font-size: 14px;
            color: var(--nav_bg);
          }
          p:nth-of-type(2) {
            font-size: 14px;
            color: var(--nav_bg);
            opacity: 0.7;
          }
          img {
            width: 36px;
                margin-right: 7px;
          }
        }
        > div:nth-of-type(2) {
          width: 110px;
          span {
            font-size: 14px;
            vertical-align: middle;
            color: var(--default);
          }
          img {
            width: 25px;
            vertical-align: middle;
          }
        }
      }
    }
  }
  background-color: #eff4f5;
  height: 100%;
  .el-header {
    background-color: var(--default);
    color: #fff !important;
    height: 7.7% !important;
    color: #333;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .el-aside {
    background-color: #eff4f5;
    color: #333;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .el-main {
    background-color: #f7fafa;
    color: #333;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>

<script>
export default {
  name: "Home",
  components: {},
};
</script>
