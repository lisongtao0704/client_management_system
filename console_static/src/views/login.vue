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
                  pattern="^1[3456789]\d{9}$"
                  autocomplete="off"
                  required="required"
                  ref="nums"
                  v-focus
                />
                <br />
                <input
                  type="password"
                  name="pw"
                  placeholder="请输入登录密码"
                  required="required"
                  ref="pwd"
                />
                <input @click="open_console()" type="submit" value="登录" />
              </div>
            </div>
            <div class="register" onselectstart="return false">
              <el-button type="text" @click="open_login" 
                >还没有账号？<span>立即注册</span></el-button
              >
              <el-button type="text" @click="open_pw"
                >忘记密码</el-button
              >
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
}
</style>
<script>
import {login} from "../api/index.js"
export default {
  data() {
    return {
      img: require("../assets/4.png"),
      data:{
        id:'',
        pwd:''
      }
    };
  },
  methods: {
    open_console(){
      this.data.id=this.$refs.nums.value
      this.data.pwd=this.$refs.pwd.value
      login(this.data).then((res)=>{
        if(res.data.code){
          localStorage.token_id=res.data.token_id
          this.$router.push('/console')
        }
        console.log("登录响应",res)
      })
    },
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
