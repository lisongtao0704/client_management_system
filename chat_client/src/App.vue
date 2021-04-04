<template>
  <div class="main">
    <div class="chat_header">用户聊天页</div>
    <div class="chat_info" ref="chat">
      <chat>
        <template v-slot:service>
          <p>昵称</p>
        </template>
        <template v-slot:data>
          <p>时间</p>
        </template>
        <template v-slot:chat_main>
          <span>我是内容</span>
        </template>
      </chat>
    </div>
    <div class="user_input">
      <div class="chat_input" contenteditable="true" ref="content"></div>
      <button @click="send">发送</button>
    </div>
  </div>
  <!-- <router-view /> -->
</template>
<style lang="less" scoped>
.main {
  width: 632px;
  height: 530px;
  background: #f7fafa;
  box-shadow: 0 0 24px 0 rgba(15, 66, 76, 0.25);
  margin: auto;
  .chat_header {
    height: 50px;
    line-height: 50px;
    text-align: center;
    color: #fff;
    background-color: var(--default);
  }
  .chat_info {
    height: 345px;
    padding: 4px;
    box-sizing: border-box;
    overflow: auto;
    div:nth-of-type(1){
      display: none;
    }
  }
  .user_input {
    height: 135px;
    padding: 15px;
    box-sizing: border-box;
    border: 1px solid var(--list_bg_active);
    .chat_input {
      height: 90px;
      overflow: auto;
      outline: unset;
    }
    button {
      height: 20px;
      float: right;
      outline: none;
      border: none;
      background: var(--default);
      border-radius: 2px;
      width: 38px;
      color: #fff;
      &:hover {
        cursor: pointer;
        opacity: 0.8;
      }
    }
  }
}
</style>
<script>
import chat from "./components/chatLeft.vue";
import {ref,onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, onActivated, onDeactivated, onErrorCaptured } from'vue'

export default {
  name: "App",
  components: {
    chat,
  },
  data() {
    return {
      count: 0
    }
  },
  methods: {
    send(){
      if(this.$refs.content.innerText.trim()){
        this.$refs.chat.appendChild(this.$refs.chat.children[0].cloneNode(true))
      this.$refs.chat.children[this.$refs.chat.children.length - 1].children[0].children[0].innerText = new Date().format("YYYY-MM-DD hh:mm:ss");
       this.$refs.chat.scrollTop = this.$refs.chat.scrollHeight;
      }
    }
  },
setup(props,context){
  // onBeforeMount(()=>{
  //   alert(1)
  // })
  const content=ref(null)
  let refs=""
  const dom = el => {
      refs= el;
    }
    console.log(refs)
  onMounted(()=>{
    console.log(content.value.innerText)
  //  .focus()
  }) 
  // onBeforeUpdate(()=>{

  // })
  // onUpdated(()=>{
   
  // }) 
  //  onUnmounted(()=>{
   
  // }) 
  return {
     content
    };
  
},
  
};
</script>
