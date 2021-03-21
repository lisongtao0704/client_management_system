<template>
<router-link :to="router_src">
  <div class="left_icon">
    <div class="icon_main">
        <div>
          <div>
            <img :src="def" /><img
              :src="active"
            />
          </div>
        </div></div
    >
  </div></router-link>
</template>

<script>
export default {
  name: "home_left_icon",
  props: ['def','active','router_src']
};
</script>

<style scoped lang="less">
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
</style>
