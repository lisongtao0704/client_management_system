<template>
  <div class="page">
    <div onselectstart="return false">
      <div class="nav-info">首页</div>
      <p>首页</p>
      <ul>
        <li><router-link to="/console/home/myList">我的工单</router-link></li>
        <li>
          <router-link to="/console/home/myReceive">我的接待</router-link>
        </li>
        <li>
          <router-link to="/console/home/onLineMonitoring"
            >在线监控</router-link
          >
        </li>
        <li><router-link to="/console/home/myCall">我的通话</router-link></li>
        <li>
          <router-link to="/console/home/callMonitoring">呼叫监控</router-link>
        </li>
        <li>
          <router-link to="/console/home/serviceMonitor"
            >呼叫客服监听</router-link
          >
        </li>
      </ul>
    </div>
    <div><router-view /></div>
  </div>
</template>
<style lang="less" scoped>
.page {
  width: 100%;
  height: 100%;
  > div:nth-of-type(1) {
    background-color: #fff;
    width: 20%;
    height: 100%;
    float: left;
    padding-left: 15px;
    box-sizing: border-box;
    position: relative;
    > p {
      font-size: 16px;
      padding: 15px 10px;
      color: #3d4966;
      font-weight: 700;
    }
    ul {
      li {
        padding: 0 0 0 10px;
        margin: 0;
        line-height: 28px;
        font-size: 14px;
        list-style: none;
        &:hover a{
          color:var(--default);
        }
        a{
          text-decoration: none;
          color: #6d7894;
        }
      }
    }
    .nav-info {
      background-color: #fff;
      border-radius: 5px 5px 0 0;
      color: var(--default);
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100px;
      height: 30px;
      position: absolute;
      top: -30px;
      font-size: 12px;
      font-weight: 400;
    }
  }
  > div:nth-of-type(2) {
    float: left;
    width: 80%;
    height: 100%;
  }
}
</style>
<script>
export default {
  name: "Homepage",
};
</script>