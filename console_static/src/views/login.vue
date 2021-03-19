<template>
  <div class="about">
    <el-container>
      <el-header>登录页</el-header>
      <el-container>
        <el-main>
          <div class="login">
            <div class="login_main">
              <p>客户生命周期管理系统</p>
              <form action="http://127.0.0.1:8081/login" method="POST">
                <input
                  type="tel"
                  name="id"
                  placeholder="请输入您在注册时使用的手机号码"
                  pattern="^1[3456789]\d{9}$"
                  autocomplete="off"
                  required="required"
                />
                <br />
                <input
                  type="password"
                  name="pw"
                  placeholder="请输入登录密码"
                  required="required"
                />
                <input type="submit" value="登录" />
              </form>
            </div>
            <div class="register" onselectstart="return false">
              <el-button type="text" @click="open_login" 
                >还没有账号？<span>立即注册</span></el-button
              >
              <el-button type="text" @click="open_pw"
                >忘记密码</el-button
              >
            </div>
            <!-- <router-link to="/homepage">登录</router-link> -->
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
      form {
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
          background-color: rgb(232, 240, 254);
          padding: 1px 15px;
          box-sizing: border-box;
        }
        input[type="submit"] {
          border: 1px solid #09aeb0;
          font-size: 20px;
          margin: 10px auto 0;
          color: #fefffd;
          background-color: #09aeb0;
        }
        input[type="submit"]:hover {
          background-color: #0aced1;
          border: 1px solid #0aced1;
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
        background-image: url("../assets/1.jpg");
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
}
</style>
<script>
export default {
  data() {
    return {
      img: require("../assets/1.jpg"),
    };
  },
  methods: {
    open_login() {
      this.$alert("暂不支持", "注册用户", {
        confirmButtonText: "确定",
        closeOnClickModal:true,
        // callback: (action) => {
        //   this.$message({
        //     type: "success",
        //     message: `action: ${action}`,
        //   });
        // },
      });
    },
    open_pw() {
      this.$alert("暂不支持", "找回密码", {
        confirmButtonText: "确定",
        closeOnClickModal:true,
        // callback: (action) => {
        //   this.$message({
        //     type: "success",
        //     message: `action: ${action}`,
        //   });
        // },
      });
    },
  },
  mounted() {
    // 轮播图片
    // setInterval(() => {
    //   let bg = this.$refs.bg;
    //   if (this.img == require("../assets/1.jpg")) {
    //     bg.style.backgroundImage = "url(" + require("../assets/2.jpg") + ")";
    //     this.img = require("../assets/2.jpg");
    //   } else {
    //     bg.style.backgroundImage = "url(" + require("../assets/1.jpg") + ")";
    //     this.img = require("../assets/1.jpg");
    //   }
    // }, 10000);
  },
};
</script>
