<template>
  <div class="about">
    <el-container>
      <el-header>登录页</el-header>
      <el-container>
        <el-main>
          <div class="login">
            <div class="login_main">
              <p>客户生命周期管理系统</p>
              <div class="main">
                <input
                  type="tel"
                  name="id"
                  placeholder="请输入您在注册时使用的手机号码"
                  v-model="data.id"
                  autocomplete="off"
                  v-focus
                  ref="tel"
                />
                <div v-show="!id_bool">账号有误</div>
                <br />
                <input
                  type="password"
                  name="pwd"
                  v-model="data.pwd"
                  placeholder="请输入登录密码"
                  ref="pwd"
                />
                <div v-show="pwd_bool">未输入密码</div>
                <input @click="open_console()" type="submit" value="登录" />
              </div>
            </div>
            <div class="register" onselectstart="return false">
              <el-button type="text" @click="dialogFormVisible = true"
                >还没有账号？立即注册</el-button
              >

              <el-dialog
                @opened="open_login"
                top="40px"
                title="新用户注册"
                :visible.sync="dialogFormVisible"
              >
                <el-form :model="form">
                  <el-form-item label="昵称" :label-width="formLabelWidth">
                    <el-input
                      placeholder="长度不超过5的昵称"
                      maxlength="5"
                      ref="name"
                      v-model="form.name"
                    ></el-input>
                  </el-form-item>
                  <el-form-item label="手机号码" :label-width="formLabelWidth">
                    <el-input
                      placeholder="请输入11位手机号码"
                      maxlength="11"
                      v-model="form.num"
                      autocomplete="off"
                    ></el-input>
                    <p ref="num_verify" class="num_verify">
                      手机号码格式不正确
                    </p>
                  </el-form-item>
                  <el-form-item label="验证码" :label-width="formLabelWidth">
                    <el-input
                      placeholder="六位数验证码"
                      maxlength="6"
                      v-model="form.code"
                      class="code"
                      autocomplete="off"
                    ></el-input>
                    <el-button @click="send_code" type="primary"
                      >发送验证码</el-button
                    >
                  </el-form-item>
                  <el-form-item label="设置密码" :label-width="formLabelWidth">
                    <el-input
                      placeholder="输入密码"
                      v-model="form.pwd"
                      type="password"
                      autocomplete="off"
                    ></el-input>
                  </el-form-item>
                  <el-form-item label="确认密码" :label-width="formLabelWidth">
                    <el-input
                      placeholder="确认输入密码"
                      v-model="form.pwd_yes"
                      type="password"
                      autocomplete="off"
                    ></el-input>
                    <p ref="pwd_verify" class="pwd_verify">两次密码不一致</p>
                  </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                  <el-button @click="dialogFormVisible = false"
                    >取 消</el-button
                  >
                  <el-button type="primary" @click="sign">确 定</el-button>
                </div>
              </el-dialog>
            </div>
          </div>
        </el-main>
        <el-aside width="50%"
          ><div class="img">
            <div class="bg" ref="bg"></div>
            <img v-bind:src="img" /></div
        ></el-aside>
      </el-container>
    </el-container>
  </div>
</template>
<style lang="less" scoped>
.about {
  .login {
    width: 390px;
    height: 384px;
    .register {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .login_main {
      width: 390px;
      height: 280px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      p {
        font-size: 22px;
        margin-bottom: 40px;
        color: #333;
        text-align: center;
      }
      .main {
        position: relative;
        div {
          position: absolute;
          top: 50px;
          color: red;
          font-size: 12px;
          right: 0;
        }
        div:nth-of-type(2) {
          top: 130px;
        }
        input {
          width: 100%;
          height: 50px;
          border: 1px solid #c4cccc;
          border-radius: 4px;
          background-color: #fff;
          font-size: 16px;
          color: #000;
          outline: unset;
          margin-bottom: 30px;
          background-color: var(--list_bg_active);
          padding: 1px 15px;
          box-sizing: border-box;
        }
        input[type="submit"] {
          border: 1px solid var(--default);
          font-size: 20px;
          margin: 10px auto 0;
          color: #fefffd;
          background-color: var(--default);
        }
        input[type="submit"]:hover {
          background-color: var(--default);
          border: 1px solid var(--default);
          opacity: 0.9;
          cursor: pointer;
        }
      }
    }
  }
  .el-header {
    background-color: #fff;
    color: #333;
    box-shadow: 0 0 13px rgba(0, 0, 0, 0.2);
    height: 10vh !important;
    min-height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .el-aside {
    height: 90vh;
    min-height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;

    .img {
      position: relative;
      width: 100%;
      height: 100%;
      .bg {
        width: 100%;
        height: 100%;
        opacity: 0.5;
        background-image: url("../assets/4.png");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
      }
      img {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        width: 100%;
      }
    }
  }

  .el-main {
    color: #333;
    max-height: 90vh;
    min-height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  /deep/.el-dialog {
    width: 365px;
    position: relative;
    .code {
      width: 125px;
      margin-right: 5px;
    }
  }
  .num_verify {
    color: red;
    position: absolute;
    display: none;
    font-size: 12px;
    font-weight: 300;
    top: 30px;
    right: 0;
  }
  .pwd_verify {
    color: red;
    position: absolute;
    display: none;
    font-size: 12px;
    font-weight: 300;
    top: 30px;
    right: 0;
  }
}
</style>
<script>
import { login, sign } from "../api/index.js";
export default {
  data() {
    return {
      dialogFormVisible: false,
      sign_status: true,
      form: {
        name: "",
        num: "",
        code: "",
        pwd: "",
        pwd_yes: "",
      },
      formLabelWidth: "70px",
      img: require("../assets/4.png"),
      data: {
        id: "",
        pwd: "",
      },
      id_bool: true,
      pwd_bool: false,
    };
  },
  computed: {
    a: function () {
      return this.form.num;
    },
    b: function () {
      return this.form.pwd_yes;
    },
  },
  watch: {
    a: function () {
      if (this.form.num) {
        if (/^1[3456789]\d{9}$/.test(this.form.num)) {
          this.$refs.num_verify.style.display = "none";
        } else {
          this.$refs.num_verify.style.display = "block";
        }
      }
    },
    b: function () {
      if (this.form.pwd_yes != this.form.pwd) {
        this.$refs.pwd_verify.style.display = "block";
      } else {
        this.$refs.pwd_verify.style.display = "none";
      }
    },
  },
  methods: {
    sign() {
      this.sign_status = true;
      let key;
      for (key in this.form) {
        if (!this.form[key]) {
          this.sign_status = false;
        }
      }
      if (!this.sign_status) {
        alert("注册失败，请检查信息是否输入正确");
      } else {
        if (
          this.form.name &&
          /^1[3456789]\d{9}$/.test(this.form.num) &&
          this.form.code == 1024 &&
          this.form.pwd == this.form.pwd_yes
        ) {
          sign(this.form).then((res) => {
            console.log("注册响应", res);
            if (res.data.sign == "手机号已被注册") {
              alert("手机号已被注册");
              return
            } else {
              alert("注册成功");
              return (this.dialogFormVisible = false);
            }
          });
          for (key in this.form) {
            if (this.form[key]) {
              this.form[key] = "";
            }
          }
        } else {
          alert("请检查信息是否有误");
        }
      }
    },
    send_code() {
      if (/^1[3456789]\d{9}$/.test(this.form.num)) {
        alert(`您好，您${this.form.num}的手机验证码为：1024`);
      } else {
        alert("请输入正确的手机号码");
      }
    },
    open_login() {
      console.log(this.$refs.name);
      this.$refs.name.focus();
    },
    open_console() {
      this.$refs.tel.addEventListener("keyup", () => {
        this.id_bool = /^1[3456789]\d{9}$/.test(this.data.id);
      });
      this.$refs.pwd.addEventListener("keyup", () => {
        if (this.data.pwd) {
          this.pwd_bool = false;
        } else {
          this.pwd_bool = true;
        }
      });
      if (this.data.pwd && /^1[3456789]\d{9}$/.test(this.data.id)) {
        this.id_bool = true;
        login(this.data).then((res) => {
          if (res.data.code) {
            localStorage.token_id = res.data.token_id;
            this.$router.push("/console");
          } else {
            alert("账号或密码错误");
          }
          console.log("登录响应", res);
        });
      } else {
        if (this.data.id) {
          this.id_bool = /^1[3456789]\d{9}$/.test(this.data.id);
        } else {
          this.id_bool = false;
        }
        if (this.data.pwd) {
          this.pwd_bool = false;
        } else {
          this.pwd_bool = true;
        }
      }
    },
  },
  mounted() {
    setInterval(() => {
      let bg = this.$refs.bg;
      if (this.img == require("../assets/4.png")) {
        bg.style.backgroundImage = "url(" + require("../assets/3.jpg") + ")";
        this.img = require("../assets/3.jpg");
      } else {
        bg.style.backgroundImage = "url(" + require("../assets/4.png") + ")";
        this.img = require("../assets/4.png");
      }
    }, 20000);
  },
};
</script>
