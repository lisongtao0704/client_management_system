<template>
  <div class="left_nav">
    <router-link :to="router_src">
      <div class="left_icon" @mouseover="move_over" @mouseout="move_out">
        <div class="icon_main">
          <div>
            <div><img :src="def" class="ig"/><img :src="active" class="ig"/></div>
          </div>
        </div></div
    ></router-link>
    <div class="left_icon_info" ref="icon_title">
      <div>
        <div class="triangle"></div>
      </div>
      <div><slot>插槽信息显示错误</slot></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "home_left_icon",
  props: ["def", "active", "router_src"],
  methods: {
    move_over(){
      this.$refs.icon_title.style.display="block"
    },
    move_out(){
      this.$refs.icon_title.style.display="none"
    }
  }
};
</script>

<style scoped lang="less">
.left_nav {
  position: relative;
  .left_icon_info {
    display: none;
    opacity: 0.9;
    margin-left: 3px;
    position: absolute;
    top: 15px;
    left: 50px;
    z-index: 999;
    width: 126px;
    > div:nth-of-type(2) {
      color: #fff;
      background-color: black;
      float: left;
      min-width: 30px;
      padding: 2px 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
      font-size: 12px;
      font-weight: 400;
    }
    > div:nth-of-type(1) {
      float: left;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 20px;
      .triangle {
        border-top: 5px solid transparent;
        border-bottom: 5px solid transparent;
        border-right: 7px solid black;
        width: 0px;
      }
    }
  }
  .left_icon {
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    &:hover {
      background-color: #192948;
    }
    &:hover .icon_main > div > div {
      transform: translate(-16px, 0);
      transition: 0.7s;
    }
    .icon_main {
      width: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      > div {
        width: 16px;
        height: 16px;
        overflow: hidden;
        > div {
          width: 32px;
          height: 16px;
          transition: 0.7s;
        }
      }
      img {
        width: 16px;
      }
    }
  }
}
</style>
