<template>
  <div class="home">
    <el-container>
      <el-header>客服工作台</el-header>
      <el-container>
        <el-aside width="290px">
          <div class="left_aside">
            <div>
              <div class="head_nav">
                <div>
                  <img src="../assets/头像.png" />
                  <div>
                    <p>{{ $store.state.nickname }}</p>
                    <p>超级管理员</p>
                  </div>
                </div>
                <div><img src="../assets/邀请.png" /><span>邀请会话</span></div>
              </div>
              <div class="user_log">
                <div ref="session" @click="session">当前会话</div>
                <div ref="history" @click="history">历史记录</div>
              </div>
            </div>
            <div>
              <ul v-if="session_list">
                <li>
                  <img src="../assets/logo.png" />
                  <div>
                    <p>我是客户</p>
                    <p>................</p>
                  </div>
                </li>
              </ul>
              <div v-else>暂未开发</div>
            </div>
          </div>
        </el-aside>
        <el-container>
          <el-main>
            <div class="top_test">
              <div class="work_list">
                <img src="../assets/工单.png" />
                <span>创建工单</span>
              </div>
            </div>
            <div class="chat" ref="chat">
              <chat>
                <p slot="service">{{ $store.state.nickname }}</p>
                <p slot="data"></p>
                <span slot="chat_main">我是客服内容</span>
              </chat>
              <chatuser>
                <p slot="service">客户昵称</p>
                <p slot="data"></p>
                <span slot="chat_main">我是用户内容</span>
              </chatuser>
            </div>
            <div class="chat_send">
              <div class="test">
                <div class="emoji" v-show="emoji" ref="emoji">
                  <span v-for="item in expression">{{ item.char }}</span>
                </div>
                <img @click="emojiFrame" src="../assets/icon.png" />
              </div>
              <div class="chat_me">
                <div ref="content" contenteditable="true" v-focus></div>
              </div>
              <div class="sendBtn">
                <span>快捷键:ctrl+enter发送</span
                ><span v-show="empty">发送内容不能为空</span>
                <button ref="send" @click="send">发送</button>
              </div>
            </div>
          </el-main>
          <el-aside width="340px">
            <el-tabs v-model="activeName">
              <el-tab-pane label="客户资料" name="first">客户资料</el-tab-pane>
              <el-tab-pane label="快捷回复" name="second">快捷回复</el-tab-pane>
              <el-tab-pane label="智能回复" name="third">智能回复</el-tab-pane>
            </el-tabs>
          </el-aside>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
<style lang="less" scoped>
.home {
  > .el-container {
    height: 100%;
    .left_aside {
      height: 100%;
      width: 100%;
      > div:nth-of-type(1) {
        height: 16%;
        .user_log {
          height: 24px;
          border-top: 1px solid var(--default);
          border-bottom: 1px solid var(--default);
          display: flex;
          div {
            width: 50%;
            font-size: 700;
            color: var(--default);
          }
          div:nth-of-type(1) {
            background-color: var(--default);
            color: #fff;
          }
          div:hover {
            cursor: pointer;
          }
        }
        .head_nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 64px;
          > div:nth-of-type(1) {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 180px;
            p:nth-of-type(1) {
              font-size: 14px;
              color: var(--nav_bg);
            }
            p:nth-of-type(2) {
              font-size: 14px;
              color: var(--nav_bg);
              opacity: 0.7;
            }
            img {
              width: 36px;
              margin-right: 7px;
            }
          }
          > div:nth-of-type(2) {
            width: 110px;
            cursor: no-drop;
            span {
              font-size: 14px;
              vertical-align: middle;
              color: var(--default);
            }
            img {
              width: 25px;
              vertical-align: middle;
            }
          }
        }
      }
      > div:nth-of-type(2) {
        height: 84%;
        overflow: auto;
        ul {
          li {
            list-style: none;
            cursor: pointer;
            display: flex;
            align-items: center;
            border-left: 3px solid var(--default);
            background-color: var(--list_bg_active);
            border-bottom: 1px solid var(--default);
            img {
              width: 32px;
              border-radius: 50%;
              margin: 0 5px;
              border: 1px solid #3d49662e;
            }
            > div {
              p:nth-of-type(1) {
                font-size: 16px;
                color: #555556;
                padding: 5px 5px 0;
              }
              p:nth-of-type(2) {
                font-size: 12px;
                color: #b6bebf;
                padding: 0 5px 5px;
              }
            }
          }
        }
      }
    }
  }
  background-color: #eff4f5;
  height: 100%;
  .el-header {
    background-color: var(--default);
    color: #fff !important;
    height: 7.7% !important;
    color: #333;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .el-aside {
    background-color: #eff4f5;
    color: #333;
    text-align: center;
    display: flex;

    /deep/.el-tabs {
      width: 100%;
      .is-active {
        color: var(--default);
      }
      .el-tabs__nav.is-top {
        margin-left: 20px;
      }
      .el-tabs__item:hover {
        color: var(--default);
      }
      .el-tabs__active-bar.is-top {
        background-color: var(--default);
      }
    }
  }

  .el-main {
    background-color: var(--list_hover);
    border-left: 1px solid var(--default);
    border-right: 1px solid var(--default);
    color: #333;
    overflow: hidden;
    text-align: center;
    padding: unset;
    .top_test {
      width: 100%;
      height: 8%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      background-color: var(--list_hover);
      .work_list {
        opacity: 0.7;
        margin-right: 8px;
        &:hover {
          cursor: pointer;
          opacity: 1;
        }
        img {
          width: 32px;
          vertical-align: middle;
        }
        span {
          vertical-align: middle;
        }
      }
    }
    .chat {
      height: 305px;
      overflow: auto;
      div:nth-of-type(1) {
        display: none;
      }
      div:nth-of-type(2) {
        display: none;
      }
      @media screen and (min-height: 648px) {
        height: 320px;
      }
      width: 100%;
      border-top: 1px solid #ebebeb;
      border-bottom: 1px solid #ebebeb;
    }
    .chat_send {
      height: 37%;
      width: 100%;
      .chat_me {
        overflow: auto;
        height: 122px;
        @media screen and (min-height: 648px) {
          height: 132px;
        }
        div {
          padding: 0 20px;
          box-sizing: border-box;
          outline: none;
          height: 100%;
          width: 100%;
          height: 100%;
          text-align: left;
        }
      }
      .sendBtn {
        text-align: right;
        padding: 0 20px;
        position: relative;
        span {
          font-size: 12px;
          vertical-align: bottom;
          margin-right: 5px;
          color: #808080d4;
        }
        span:nth-of-type(2) {
          position: absolute;
          color: red;
          top: -15px;
        }
        button {
          border: none;
          background: var(--default);
          width: 100px;
          padding: 10px 5px;
          border-radius: 5px;
          outline: none;
          font-size: 16px;
          color: #fff;
          &:hover {
            cursor: pointer;
            opacity: 0.7;
          }
        }
      }
      .test {
        text-align: left;
        height: 17%;
        padding: 5px 0 0 20px;
        position: relative;
        &:hover img {
          cursor: pointer;
          opacity: 1;
        }
        .emoji {
          width: 192px;
          background: #fff;
          height: 215px;
          padding: 7px;
          border-radius: 5px;
          position: absolute;
          bottom: 40px;
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
          left: 5px;
          span {
            width: 20px;
            margin: 0 2px;
            display: inline-block;
            text-align: center;
            &:hover {
              cursor: pointer;
            }
          }
        }
        img {
          margin-left: 3px;
          opacity: 0.7;
        }
      }
    }
  }
}
</style>

<script>
import chat from "../components/chat_frame";
import chatuser from "../components/chat_frame_user";
import { chatInfo, chatInsert } from "../api/index.js";
const emoji = require("../assets/emojis.json");
console.log("小表情", emoji);
export default {
  name: "Home",
  components: {
    chat,
    chatuser,
  },
  data() {
    return {
      session_list: true,
      timeme: 11111,
      timeuser: 11111,
      empty: false,
      chat_info: null,
      activeName: "first",
      emoji: false,
      expression: emoji,
    };
  },
  mounted() {
    this.$refs.emoji.addEventListener("click",(event)=>{
      if(event.target.localName=="span"){
        this.$refs.content.innerText+=event.target.innerText
        this.emoji=false
        console.log(event.target.innerText)
      }
    })
    chatInfo({ status: "history" }).then((res) => {
      console.log("初始化历史记录", res);
      this.chat_info = res.data.data;
      let that = this;
      res.data.data.forEach((item, index, array) => {
        if (item.service_chat) {
          that.$refs.chat.appendChild(
            that.$refs.chat.children[0].cloneNode(true)
          );
          that.$refs.chat.children[
            that.$refs.chat.children.length - 1
          ].children[0].children[0].innerText = item.service_sendtime;
          that.$refs.chat.children[
            that.$refs.chat.children.length - 1
          ].children[1].children[0].innerText = item.service_chat;
          that.$refs.chat.scrollTop = that.$refs.chat.scrollHeight;
        }
        if (item.user_chat) {
          that.$refs.chat.appendChild(
            that.$refs.chat.children[1].cloneNode(true)
          );
          that.$refs.chat.children[
            that.$refs.chat.children.length - 1
          ].children[0].children[1].innerText = item.user_sendtime;
          that.$refs.chat.children[
            that.$refs.chat.children.length - 1
          ].children[1].children[0].innerText = item.user_chat;
          that.$refs.chat.scrollTop = that.$refs.chat.scrollHeight;
        }
      });
    });
    let that = this;
    function fn() {
      chatInfo().then((res) => {
        setTimeout(() => {
          let item = res.data.data[res.data.data.length - 1];
          console.log("长轮询", item);
          if (item.user_chat) {
            that.$refs.chat.appendChild(
              that.$refs.chat.children[1].cloneNode(true)
            );
            that.$refs.chat.children[
              that.$refs.chat.children.length - 1
            ].children[0].children[1].innerText = item.user_sendtime;
            that.$refs.chat.children[
              that.$refs.chat.children.length - 1
            ].children[1].children[0].innerText = item.user_chat;
            that.$refs.chat.scrollTop = that.$refs.chat.scrollHeight;
          }
          fn();
        }, 100);
      });
    }
    fn();
    this.$refs.content.addEventListener("keyup", (event) => {
      let x = event.which || event.keyCode;
      if (event.ctrlKey && x == 13) {
        this.$refs.send.click();
      }
    });
  },
  computed: {},
  methods: {
    emojiFrame() {
      if (this.emoji) {
        this.emoji = false;
      } else {
        this.emoji = true;
      }
    },
    send() {
      if (this.$refs.content.innerText.trim()) {
        this.$refs.chat.appendChild(
          this.$refs.chat.children[0].cloneNode(true)
        );
        let chat_list = this.$refs.chat.children;
        let time = new Date().format("YYYY-MM-DD hh:mm:ss");
        let chatContent = this.$refs.content.innerText;
        chatInsert({
          chatContent: chatContent,
          time: time,
          who: "service",
        }).then((res) => {});
        chat_list[
          chat_list.length - 1
        ].children[1].children[0].innerText = chatContent;
        this.$refs.chat.scrollTop = this.$refs.chat.scrollHeight + 10;
        this.$refs.content.innerText = "";
        this.$nextTick(() => {
          this.$refs.chat.children[
            this.$refs.chat.children.length - 1
          ].children[0].children[0].innerText = new Date().format(
            "YYYY-MM-DD hh:mm:ss"
          );
        });
      } else {
        this.empty = true;
        setTimeout(() => {
          this.empty = false;
        }, 500);
      }
    },
    session() {
      this.$refs.session.style.cssText =
        " background-color: var(--default); color: #fff;cursor: context-menu;";
      this.$refs.history.style.cssText =
        " background-color:none; color:var(--default);";
      this.session_list = true;
    },
    history() {
      this.$refs.session.style.cssText =
        " background-color:#fff; color:var(--default);";
      this.$refs.history.style.cssText =
        " background-color: var(--default); color: #fff;cursor: context-menu;";
      this.session_list = false;
    },
  },
};
</script>
