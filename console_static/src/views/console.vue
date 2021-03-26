<template>
  <div class="home">
    <div class="nav">
      <div>
        <div>
          <div @click="sent_note">
            <img src="../assets/信息.png" />
            <span>短信</span>
          </div>

          <div v-show="send_note">
            <h4>发送短信</h4>
            <input
              v-model="num"
              ref="focus"
              type="text"
              placeholder="请输入手机号码"
            />
            <div v-show="!num_bool">号码格式不正确！</div>
            <p>选择模板</p>
            <select ref="select_active">
              <option value="- -" selected="selected">- -</option>
              <option value="你好">你好</option>
              <option value="我好">我好</option>
              <option value="大家好">大家好</option>
            </select>
            <textarea rows="10" cols="30" v-model="text_val">
            </textarea>
            <p>{{ text_val.length }}字</p>
            <img src="../assets/勾.png" ref="change" /><span
              >发送后关闭窗口</span
            ><br />
            <button @click="send_()">发送</button>
            <button
              @click="
                () => {
                  this.send_note = false;
                }
              "
            >
              关闭
            </button>
          </div>
        </div>
        <div><img src="../assets/客服.png" /><span>客服工作台</span></div>
        <div>
          <img src="../assets/头像.png" />
          <div class="right_name">
            <span>昵称</span><img src="../assets/箭头下.png" /><img
              src="../assets/箭头上.png"
            />
            <div>
              <ul>
                <li>在线接入测试</li>
                <li @click="log_off">退出登录</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="content">
      <div ref="nav_left">
        <leftIcon :active="home_active" :def="home" :router_src="home_src"
          >首页</leftIcon
        >
        <leftIcon :active="list_active" :def="list" :router_src="list_src"
          >工单中心</leftIcon
        >
        <leftIcon :active="know_active" :def="know" :router_src="know_src"
          >知识库</leftIcon
        >
        <leftIcon :active="call_active" :def="call" :router_src="call_src"
          >呼叫中心</leftIcon
        >
        <leftIcon :active="note_active" :def="note" :router_src="note_src"
          >短信</leftIcon
        >
        <leftIcon :active="client_active" :def="client" :router_src="client_src"
          >客户中心</leftIcon
        >
        <leftIcon
          :active="statistical_active"
          :def="statistical"
          :router_src="statistical_src"
          >统计</leftIcon
        >
        <leftIcon
          :active="quality_active"
          :def="quality"
          :router_src="quality_src"
          >质检</leftIcon
        >
        <leftIcon :active="set_active" :def="set" :router_src="set_src"
          >设置</leftIcon
        >
        <leftIcon
          :active="monitor_active"
          :def="monitor"
          :router_src="monitor_src"
          >大屏监控</leftIcon
        >
        <leftIcon :active="info_active" :def="info" :router_src="info_src"
          >消息中心</leftIcon
        >
      </div>
      <div class="main">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.home {
  background-color: #eff4f5;
  height: 100%;
  .nav {
    background-color: var(--default);
    width: 100%;
    height: 7.7%;
    > div {
      display: flex;
      height: 100%;
      justify-content: flex-end;
      align-items: center;
      padding-right: 20px;
      > div:nth-of-type(1) {
        margin-right: 16px;
        position: relative;
        > div:nth-of-type(1) {
          &:hover {
            opacity: 0.7;
            cursor: pointer;
          }
          span {
            vertical-align: middle;
            font-size: 14px;
            color: #fff;
          }
        }

        img {
          vertical-align: middle;
          width: 20px;
          margin-right: 5px;
        }
        > div:nth-of-type(2) {
          > div {
            color: red;
            font-size: 12px;
            position: absolute;
            top: 90px;
            left: 195px;
          }
          position: absolute;
          background-color: #fff;
          width: 270px;
          height: 450px;
          top: 35px;
          right: 0px;
          padding: 5px 20px 5px;
          border: 1px solid rgba(0, 0, 0, 0.15);
          border-radius: 0 0 4px 4px;
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
          h4 {
            font-size: 16px;
            line-height: 22px;
            text-align: left;
            color: var(--active);
            padding: 15px 0px;
            font-weight: 700;
          }
          p:nth-of-type(1) {
            padding: 10px 0;
            font-size: 14px;
            text-align: left;
          }
          p:nth-of-type(2) {
            font-size: 14px;
            text-align: right;
          }
          span {
            font-size: 14px;
            vertical-align: middle;
          }
          button {
            width: 65px;
            font-size: 16px;
            height: 21px;
            padding: 5px 10px;
            box-sizing: content-box;
            cursor: pointer;
            border-radius: 2px;
            outline: unset;
            margin-top: 13px;
            margin-right: 5px;
            border: none;
          }
          button:nth-of-type(1) {
            background-color: var(--default);
            color: #fff;
            &:hover {
              opacity: 0.8;
            }
          }
          button:nth-of-type(2) {
            background-color: #dcdfe6;
            color: black;
            &:hover {
              opacity: 0.8;
            }
          }
          input {
            outline: none;
            width: 100%;
            border: 1px solid #e1e6f5;
            height: 32px;
            line-height: 32px;
            font-size: 16px;
            height: 32px;
            line-height: 32px;
            font-size: 16px;
            padding: 0 10px;
            box-sizing: border-box;
            &::-webkit-input-placeholder {
              color: #6d7894;
              font-size: 12px;
              font-weight: 400;
            }
            &:focus {
              border: 1px solid var(--default);
              box-shadow: 0 0 6px 1px rgba(9, 174, 176, 0.3);
            }
          }
          img {
            width: 14px;
            border: 1px solid #98a0b9;
            vertical-align: middle;
            &:hover {
              cursor: pointer;
              border: 1px solid var(--default);
              box-shadow: 0 0 6px 1px rgba(9, 174, 176, 0.3);
            }
          }
          select {
            width: 100%;
            outline: none;
            border: 1px solid #e1e6f5;
            height: 32px;
            line-height: 32px;
            font-size: 16px;
            padding: 0 10px;
            box-sizing: border-box;
            &:focus {
              border: 1px solid var(--default);
              box-shadow: 0 0 6px 1px rgba(9, 174, 176, 0.3);
            }
            &:hover {
              cursor: pointer;
            }
            option {
              &:hover {
                cursor: pointer;
                color: var(--default);
              }
            }
          }
          textarea {
            resize: none;
            outline: none;
            width: 100%;
            border: 1px solid #e1e6f5;
            padding: 10px;
            box-sizing: border-box;
            font-size: 14px;
            margin-top: 15px;
            background-color: var(--list_bg_active);
            &:focus {
              border: 1px solid var(--default);
              box-shadow: 0 0 6px 1px rgba(9, 174, 176, 0.3);
            }
          }
        }
      }
      > div:nth-of-type(2) {
        &:hover {
          opacity: 0.7;
          cursor: pointer;
        }
        margin-right: 16px;
        span {
          vertical-align: middle;
          font-size: 14px;
          color: #fff;
        }
        img {
          vertical-align: middle;
          width: 25px;
          margin-right: 5px;
        }
      }
      > div:nth-of-type(3) {
        margin-right: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        > div {
          &:hover {
            cursor: pointer;
          }
          > div {
            background-color: #fff;
            border: 1px solid rgba(0, 0, 0, 0.15);
            border-radius: 0 0 4px 4px;
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
            width: 158px;
            position: absolute;
            top: 40px;
            right: -18px;
            padding: 5px 20px 5px;
            cursor: initial;
            display: none;
            ul {
              cursor: initial;
              li {
                text-align: left;
                list-style: none;
                color: #6d7894;
                font-size: 14px;
                cursor: pointer;
                margin: 5px 0;
                &:hover {
                  color: black;
                }
              }
            }
          }
          > img {
            width: 10px;
          }
          > img:nth-of-type(2) {
            display: none;
          }
          span {
            font-size: 12px;
            color: #fff;
            margin-right: 2px;
          }
        }
        > img {
          width: 35px;
          margin-right: 5px;
        }
      }
    }
  }
  .content {
    height: 92.3%;
    min-height: 566px;
    min-width: 1260px;
    > div:nth-of-type(1) {
      float: left;
      width: 4%;
      min-width: 50px;
      height: 100%;
      background-color: var(--nav_bg);
    }
    .main {
      float: left;
      width: 96%;
      height: 100%;
    }
  }
}
</style>

<script>
import leftIcon from "@/components/console_left_icon.vue";

export default {
  name: "Console",
  components: {
    leftIcon,
  },
  data() {
    return {
      send_note: false,
      send: true,
      text_val: "",
      num_bool: true,
      num: "",
      home: require("../assets/home.png"),
      home_active: require("../assets/home_active.png"),
      home_src: "/console/home",
      list: require("../assets/list.png"),
      list_active: require("../assets/list_active.png"),
      list_src: "/console/list",
      know: require("../assets/知识库.png"),
      know_active: require("../assets/知识库 (1).png"),
      know_src: "/console/know",
      call: require("../assets/ic_销帮帮呼叫中心.png"),
      call_active: require("../assets/ic_销帮帮呼叫中心 (1).png"),
      call_src: "/console/call",
      note: require("../assets/短信.png"),
      note_active: require("../assets/短信 (1).png"),
      note_src: "/console/note",
      client: require("../assets/客户.png"),
      client_active: require("../assets/客户 (1).png"),
      client_src: "/console/client",
      statistical: require("../assets/统计.png"),
      statistical_active: require("../assets/统计(1).png"),
      statistical_src: "/console/statistical",
      quality: require("../assets/质检.png"),
      quality_active: require("../assets/质检(1).png"),
      quality_src: "/console/quality",
      set: require("../assets/设 置.png"),
      set_active: require("../assets/设 置 (1).png"),
      set_src: "/console/set",
      monitor: require("../assets/监控.png"),
      monitor_active: require("../assets/监控 (1).png"),
      monitor_src: "/console/monitor",
      info: require("../assets/消息中心.png"),
      info_active: require("../assets/消息中心 (1).png"),
      info_src: "/console/info",
    };
  },
  watch: {
    num:function(){
      this.num_bool=/^1[3456789]\d{9}$/.test(this.num);
    }
  },
  methods: {
    log_off() {
      localStorage.removeItem("token_id");
      window.location.reload();
    },
    sent_note() {
      switch (this.send_note) {
        case true:
          this.send_note = false;
          break;
        case false:
          this.send_note = true;
          this.$nextTick(function () {
            this.$refs.focus.focus();
          });
          break;
      }
    },
    send_() {
      this.num_bool = /^1[3456789]\d{9}$/.test(this.num);
      switch (this.send) {
        case true:
          // 发送短信api
          break;
        case false:
          this.send_note = false;
          // 发送短信api
          break;
      }
    },
  },
  mounted() {
    let select = this.$refs.select_active;
    select.addEventListener("click", () => {
      this.text_val = event.target.value;
    });
    let change = this.$refs.change;
    change.addEventListener("click", () => {
      switch (this.send) {
        case true:
          change.style.background = "var(--default)";
          this.send = false;
          break;
        case false:
          change.style.background = "none";
          this.send = true;
          break;
      }
    });
    let right_name = document.getElementsByClassName("right_name");
    let status = true;
    right_name[0].addEventListener("click", () => {
      switch (status) {
        case true:
          right_name[0].style.cssText = " opacity: 0.7";
          right_name[0].getElementsByTagName("img")[0].style.display = "none";
          right_name[0].getElementsByTagName("img")[1].style.display =
            "inline-block";
          right_name[0].getElementsByTagName("div")[0].style.display = "block";
          status = false;
          break;
        case false:
          right_name[0].style.cssText = " opacity: 1";
          right_name[0].getElementsByTagName("img")[0].style.display =
            "inline-block";
          right_name[0].getElementsByTagName("img")[1].style.display = "none";
          right_name[0].getElementsByTagName("div")[0].style.display = "none";
          status = true;
          break;
      }
    });
    let nav_left = this.$refs.nav_left;
    let nav_left_icon = document.getElementsByClassName("left_icon");
    nav_left_icon[0].style.background = "var(--active)";
    nav_left.addEventListener(
      "click",
      (enent) => {
        for (let i = 0; i < nav_left_icon.length; i++) {
          nav_left_icon[i].style.background = "unset";
        }
        switch (event.target.className) {
          case "left_icon":
            event.target.style.background = "var(--active)";
            break;
          case "ig":
            event.target.parentElement.parentElement.parentElement.parentElement.style.background =
              "var(--active)";
            break;
          case "icon_main":
            event.target.parentElement.style.background = "var(--active)";
            break;
          case "icon":
            event.target.parentElement.parentElement.style.background =
              "var(--active)";
            break;
          case "icon_":
            event.target.parentElement.parentElement.parentElement.style.background =
              "var(--active)";
            break;
        }
      },
      false
    );
  },
};
</script>
