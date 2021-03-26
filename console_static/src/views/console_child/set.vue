<template>
  <div class="page">
    <div onselectstart="return false">
      <div class="nav-info">设置</div>
      <p>设置</p>
      <ul ref="home">
        <li>
          <router-link to="/console/set/themeColor">更改主题颜色</router-link>
        </li>
        <li>
          <router-link to="/console/set/serviceSet">更改客服配置</router-link>
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
    padding: 0 15px;
    box-sizing: border-box;
    position: relative;
    > p {
      font-size: 16px;
      padding: 15px 10px;
      color: var(--active);
      font-weight: 700;
    }
    ul {
      li {
        padding: 0 0 0 10px;
        margin: 0;
        line-height: 28px;
        font-size: 14px;
        list-style: none;
        &:hover {
          background-color: var(--list_hover) !important;
        }
        &:hover a {
          color: var(--default);
        }
        a {
          text-decoration: none;
          color: #6d7894;
          display: block;
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
  name: "Setpage",
  mounted() {
    let ul = this.$refs.home;
    ul.children[0].style.background = "var(--list_bg_active)";
    ul.addEventListener("click", (event) => {
      for (let i = 0; i < ul.children.length; i++) {
        ul.children[i].style.background = "none";
      }
      if (event.target.localName == "a") {
        event.target.parentElement.style.background = "var(--list_bg_active)";
      }
    });
    if (window.location.pathname.startsWith("/console/set")) {
      document.getElementsByClassName("left_icon")[8].style.background =
        "var(--active)";
    }
  },
};
</script>