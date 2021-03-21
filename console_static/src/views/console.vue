<template>
  <div class="home">
    <div class="nav"></div>
    <div class="content">
      <div>
        <leftIcon :active="home_active" :def="home" :router_src="home_src">首页</leftIcon>
        <leftIcon :active="list_active" :def="list" :router_src="list_src">工单中心</leftIcon>
        <leftIcon :active="know_active" :def="know" :router_src="know_src">知识库</leftIcon>
        <leftIcon :active="call_active" :def="call" :router_src="call_src">呼叫中心</leftIcon>
        <leftIcon :active="note_active" :def="note" :router_src="note_src">短信</leftIcon>
        <leftIcon :active="client_active" :def="client" :router_src="client_src">客户中心</leftIcon>
        <leftIcon :active="statistical_active" :def="statistical" :router_src="statistical_src">统计</leftIcon>
        <leftIcon :active="quality_active" :def="quality" :router_src="quality_src">质检</leftIcon>
        <leftIcon :active="set_active" :def="set" :router_src="set_src">设置</leftIcon>
        <leftIcon :active="monitor_active" :def="monitor" :router_src="monitor_src">大屏监控</leftIcon>
        <leftIcon :active="info_active" :def="info" :router_src="info_src">消息中心</leftIcon>
      </div>
      <div class="main">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.home{
  background-color: #EFF4F5;
  height: 100%;
  .nav{
    background-color: var(--default);
    width: 100%;
    height: 7.7%;
  }
  .content{
    height:92.3%;
    min-height: 566px;
    min-width:1260px;
    >div:nth-of-type(1){
      float: left;
      width: 4%;
      min-width: 50px;
      height: 100%;
      background-color: #33425B;
    }
    .main{
      float: left;
      width: 96%;
      height:100%;
    }
  }
}
</style>

<script>
import leftIcon from "@/components/console_left_icon.vue";

export default {
  name: "Console",
  components: {
    leftIcon
  },
  data(){
    return {
      home:require("../assets/home.png"),
      home_active:require("../assets/home_active.png"),
      home_src:"/console/home",
      list:require("../assets/list.png"),
      list_active:require("../assets/list_active.png"),
      list_src:"/console/list",
      know:require("../assets/知识库.png"),
      know_active:require("../assets/知识库 (1).png"),
      know_src:"/console/know",
      call:require("../assets/ic_销帮帮呼叫中心.png"),
      call_active:require("../assets/ic_销帮帮呼叫中心 (1).png"),
      call_src:"/console/call",
      note:require("../assets/短信.png"),
      note_active:require("../assets/短信 (1).png"),
      note_src:"/console/note",
      client:require("../assets/客户.png"),
      client_active:require("../assets/客户 (1).png"),
      client_src:"/console/client",
      statistical:require("../assets/统计.png"),
      statistical_active:require("../assets/统计(1).png"),
      statistical_src:"/console/statistical",
      quality:require("../assets/质检.png"),
      quality_active:require("../assets/质检(1).png"),
      quality_src:"/console/quality",
      set:require("../assets/设 置.png"),
      set_active:require("../assets/设 置 (1).png"),
      set_src:"/console/set",
      monitor:require("../assets/监控.png"),
      monitor_active:require("../assets/监控 (1).png"),
      monitor_src:"/console/monitor",
      info:require("../assets/消息中心.png"),
      info_active:require("../assets/消息中心 (1).png"),
      info_src:"/console/info",
    }
  }
};
</script>
