<template>
  <div id="chat">
    <div class="title">
      <slot name="service"></slot> <slot name="data"></slot>
    </div>
    <div class="chat_right"><slot name="chat_main"></slot></div>
  </div>
</template>
<style lang="less" scoped>
#chat {
  width: 50%;
  margin-right: 5px;
  float: right;
  .title {
    text-align: right;
    p:nth-of-type(1) {
      font-size: 16px;
      display: inline;
      color: var(--active);
    }
    p:nth-of-type(2) {
      display: inline;
      font-size: 12px;
      color: var(--active);
    }
  }

  .chat_right {
    max-width: 240px;
    float: right;
    padding: 5px 10px;
    border-radius: 5px;
    background-color: yellowgreen;
  }
}
</style>
<script>
export default {
  name: "chat",
};
</script>