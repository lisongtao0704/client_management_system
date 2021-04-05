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
      <span>快捷键:ctrl+enter发送</span>
      <span v-show="empty">发送内容不能为空</span>
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
    position: relative;
    span:nth-of-type(2){
      position: absolute;
      color: red;
      bottom: 29px;
    right: 14px;
     font-size: 12px;
    }
    span:nth-of-type(1){
     font-size: 12px;
     color: var(--active);
    }
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
import {serviceConfig,chatInsert} from './api/index'
export default {
  name: "App",
  components: {
    chat,
  },
  data() {
    return {
      empty: false
    }
  },
  methods: {
    send(){
      if(this.$refs.content.innerText.trim()){
        let time=new Date().format("YYYY-MM-DD hh:mm:ss");
        let chatContent=this.$refs.content.innerText
        this.$refs.chat.appendChild(this.$refs.chat.children[0].cloneNode(true))
        this.$refs.chat.children[this.$refs.chat.children.length - 1].children[0].children[0].innerText = time
        this.$refs.chat.children[this.$refs.chat.children.length - 1].children[1].children[0].innerText = this.$refs.content.innerText;
        this.$refs.chat.scrollTop = this.$refs.chat.scrollHeight;
        chatInsert({ chatContent: chatContent, time: time,who:"user"}).then((res) => {});
        this.$refs.content.innerText = "";
      }else{
        this.empty = true;
        setTimeout(() => {
          this.empty = false;
        }, 500);
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
  onMounted(()=>{
    content.value.focus()
    content.value.addEventListener("keyup", (event) => {
      let x = event.which || event.keyCode;
      if (event.ctrlKey && x == 13) {
        document.getElementsByClassName('user_input')[0].getElementsByTagName('button')[0].click();
      }
    });
    serviceConfig().then((res)=>{
      
    })
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
