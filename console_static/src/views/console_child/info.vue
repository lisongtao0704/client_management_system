<template>
  <div class="page">
    <div onselectstart="return false">
      <div class="nav-info">消息中心</div>
      消息中心暂未开发
    </div>
    <div>鹅鹅鹅，曲项向天歌，白毛浮绿水，红掌拨清波</div>
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
  name: "Infopage",
  mounted() {
    if (window.location.pathname.startsWith("/console/info")) {
      document.getElementsByClassName("left_icon")[10].style.background =
        "var(--active)";
    }
  },
};
</script>