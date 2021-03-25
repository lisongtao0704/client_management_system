<template>
  <div class="page">
    <div onselectstart="return false">
      <div class="nav-info">工单中心</div>
      <div>
        <p>工单中心</p>
        <div class="auto">
          <span>自动接单</span><img src="../../assets/问号.png" />
          <div class="title">
            关闭后，触发器在平均分配工单时，将不会自动派单给您<br />例如，您可以在休假时关闭此按钮，上班后再打开
          </div>
          <el-switch
            v-model="value"
            active-color="var(--default)"
            inactive-color="#BDC3D1"
            @change="change"
          >
          </el-switch>
          <span>{{ status }}</span>
        </div>
        <ul ref="home" class="work_order">
          <p>工单查询</p>
          <li><router-link to="">自定义查询</router-link></li>
          <p>我的</p>
          <li>
            <router-link to="">待处理的工单</router-link>
          </li>
          <li>
            <router-link to="">我处理的工单</router-link>
          </li>
          <li>
            <router-link to="">我创建的工单</router-link>
          </li>
          <li>
            <router-link to="">我解决的工单</router-link>
          </li>
          <li>
            <router-link to="">我关注的工单</router-link>
          </li>
          <p>我的客服组</p>
          <li>
            <router-link to="">未分配的工单</router-link>
          </li>
          <li>
            <router-link to="">待处理的工单</router-link>
          </li>
          <li>
            <router-link to="">组内处理的工单</router-link>
          </li>
          <li>
            <router-link to="">组内创建的工单</router-link>
          </li>
          <li>
            <router-link to="">已解决的工单</router-link>
          </li>
          <p>所有工单</p>
          <li><router-link to="">未分配工单</router-link></li>
          <li><router-link to="">所有待处理</router-link></li>
          <li><router-link to="">所有已解决</router-link></li>
          <li><router-link to="">已删除工单</router-link></li>
          <p>SLA服务</p>
          <li><router-link to="">大于24小时未分配</router-link></li>
          <li><router-link to="">大于48小时未解决</router-link></li>
        </ul>
      </div>
    </div>

    <div>李诵焘</div>
  </div>
</template>
<style lang="less" scoped>
.page {
  width: 100%;
  height: 100%;
  .auto {
    padding: 0 10px;
    position: relative;
    .el-switch {
      margin: 0 2px 0 50px;
    }
    span {
      line-height: 28px;
      font-size: 14px;
      list-style: none;
      color: #6d7894;
    }
    span:nth-of-type(2) {
      color: black;
    }
    img {
      width: 15px;
      background: var(--nav_bg);
      border-radius: 50%;
      opacity: 0.6;
      vertical-align: middle;
      margin-left: 2px;
      &:hover {
        background: var(--default);
        cursor: pointer;
      }
      &:hover + .title {
        display: block;
        @keyframes mymove {
          from {
            transform: rotateX(-90deg)
          }
          50%{
            transform: rotateX(15deg)
          }
          60%{
            transform: rotateX(0deg)
          }
          70%{
            transform: rotateX(15deg)
          }
          to {
            transform: rotateX(0)
          }
        }
      }
    }
    .title {
      position: absolute;
      background-color: #fff;
      box-shadow: 0px 0px 5px #15030378;
      font-size: 14px;
      color: #6d7894;
      top: 35px;
      left: 10px;
      width: 207px;
      padding: 10px 20px;
      box-sizing: border-box;
      display: none;
      animation: mymove .7s;
      /*Safari 和 Chrome:*/
      -webkit-animation: mymove .7s;
    }
  }
  > div:nth-of-type(1) {
    background-color: #fff;
    width: 20%;
    height: 100%;
    float: left;
    padding: 0 0 0 15px;
    box-sizing: border-box;
    position: relative;
    // div::-webkit-scrollbar {
    //   width: 10px;
    // }
    // div::-webkit-scrollbar-track {
    //   background: #f5f7fa;
    //   border-radius: 2px;
    // }
    // div::-webkit-scrollbar-thumb {
    //   background: #d8dff0;
    //   border-radius: 10px;
    // }
    // div::-webkit-scrollbar-thumb:hover {
    //   background: var(--active);
    // }
    > div {
      overflow: auto;
      height: 100%;

      > p {
        font-size: 16px;
        padding: 15px 10px;
        color: var(--active);
        font-weight: 700;
      }
    }

    ul {
      li {
        padding: 0 0 0 10px;
        margin: 0;
        line-height: 28px;
        font-size: 14px;
        list-style: none;

        &:hover a {
          color: var(--default);
        }
        a {
          text-decoration: none;
          color: #6d7894;
          display: block;
          cursor: not-allowed;
        }
      }
      > p {
        font-size: 16px;
        padding: 15px 10px;
        color: var(--active);
        font-weight: 700;
      }
    }
    .nav-info {
      background-color: #fff;
      border-radius: 5px 5px 0 0;
      color: var(--default);
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100px;
      height: 30px;
      position: absolute;
      top: -30px;
      font-size: 12px;
      font-weight: 400;
    }
  }
  > div:nth-of-type(2) {
    float: left;
    width: 80%;
    height: 100%;
  }
}
</style>
<script>
export default {
  name: "Homepage",
  data() {
    return {
      value: true,
      status: "开启",
    };
  },
  mounted() {
    let ul = this.$refs.home;
    let work_li = document
      .getElementsByClassName("work_order")[0]
      .getElementsByTagName("li");
    work_li[0].style.background = "var(--list_bg_active)";
    ul.addEventListener("click", (event) => {
      if (event.target.localName == "a") {
        for (let i = 0; i < work_li.length; i++) {
          work_li[i].style.background = "none";
        }
        event.target.parentElement.style.background = "var(--list_bg_active)";
      }
    });
  },
  methods: {
    change() {
      switch (this.status) {
        case "开启":
          this.status = "关闭";
          break;
        case "关闭":
          this.status = "开启";
          break;
      }
    },
  },
};
</script>