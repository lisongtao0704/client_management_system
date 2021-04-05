<template>
  <div id="chats">
    <div class="title">
      <slot name="service"></slot> <slot name="data"></slot>
    </div>
    <div class="chat_left"><slot name="chat_main"></slot></div>
  </div>
</template>
<style lang="less">
#chats {
  width: 50%;
  margin-left: 5px;
  float:left;
  .title {
    text-align:left;
    p:nth-of-type(1) {
      font-size: 16px;
      margin-right: 5px;
      display: inline;
      color: var(--active);
    }
    p:nth-of-type(2) {
      display: inline;
      font-size: 12px;
      color: var(--active);
    }
  }
  .chat_left {
    max-width: 240px;
    min-width: 100px;
    min-height: 20px;
    float: left;
    text-align: justify;
    padding: 5px 10px;
    border-radius: 5px;
    background-color:var(--list_bg_active);
    span{
      white-space: pre-wrap;
      word-break: break-all;
    }
  }
}
</style>
<script>
export default {
  name: "chatService",
};
</script>