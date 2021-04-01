<template>
  <van-row>
    <van-col span="24">
      <div class="chat_header norem"></div>
      <div class="chat_info"></div>
      <div class="user_input norem"><div ref="chat_input" contenteditable="true"></div></div>
    </van-col>
  </van-row>
  <!-- <router-view /> -->
</template>
<style lang="less" scoped>
.van-row {
  height: 100vh;
  min-height: 616px;
  .chat_header.norem {
    height: 50px;
    background-color: #09AEB0;
  }
  .chat_info {
    background-color: #F0F3FB;
  }
  .user_input.norem {
    position: fixed;
    height: 70px;
    bottom: 0;
    width: 100%;
    background-color: #09AEB0;
    div{
      height: 100%;
      overflow: auto;
      outline: none;
      border-radius: 10px;
      background: #ffffffd1;
      padding: 5px 10px;
     box-sizing: border-box;
    }
  }
}
</style>
<script>
// import { useRouter } from 'vue-router'
export default {
  name: 'App',
  onMounted() {
    this.$refs.chat_input.scrollHeight=this.$refs.chat_input.scrollTop
  },

}
</script>
