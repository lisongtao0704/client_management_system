<template>
  <div id="chat">
    <div class="title">
      <slot name="data"></slot><slot name="service"></slot> 
    </div>
    <div class="chat_right"><slot name="chat_main"></slot></div>
  </div>
</template>
<style lang="less">
#chat {
  width: 50%;
  margin-left: 5px;
  float: right;
  .title {
    text-align: right;
    p:nth-of-type(2) {
      font-size: 16px;
      margin-left: 5px;
      display: inline;
      color: var(--active);
    }
    p:nth-of-type(1) {
      display: inline;
      font-size: 12px;
      color: var(--active);
    }
  }

  .chat_right {
    max-width: 240px;
    min-width: 100px;
    min-height: 20px;
    float: right;
    text-align: justify;
    padding: 5px 10px;
    border-radius: 5px;
    background-color: var(--default);
    span{
      white-space: pre-wrap;
      word-break: break-all;
    }
  }
}
</style>
<script>
export default {
  name: "chat",
};
</script>