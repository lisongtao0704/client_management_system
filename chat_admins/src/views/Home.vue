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
                    <p>songtao</p>
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
            <div class="chat">
              <chat >
                <p slot="service">是我啊</p>
                <p slot="data">2019/3/3</p>
                <span slot="chat_main">我sfskduhfsldhf斯柯达挂号费is度法规is都股份is的广佛is都股份is的发生地覆盖手动古啊</span>
              </chat>
            </div>
            <div class="chat_send">
              <div class="test">
                <img src="../assets/icon.png" />
              </div>
              <div class="chat_me">
                <div contenteditable="true"></div>
              </div>
            </div>
          </el-main>
          <el-aside width="340px">Aside</el-aside>
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
    justify-content: center;
    align-items: center;
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
      height: 55%;
      width: 100%;
      border-top: 1px solid #ebebeb;
      border-bottom: 1px solid #ebebeb;
      
    }
    .chat_send {
      height: 37%;
      width: 100%;
      .chat_me {
        overflow: auto;
        height: 83%;
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

      .test {
        text-align: left;
        height: 17%;
        padding: 5px 0 0 20px;
        img {
          margin-left: 3px;
        }
      }
    }
  }
}
</style>

<script>
import chat from "../components/chat_frame";
export default {
  name: "Home",
  components: {
    chat,
  },
  data() {
    return {
      session_list: true,
    };
  },
  methods: {
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
