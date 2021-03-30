import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/element.js";

Vue.config.productionTip = false;
Vue.prototype.$date=new Date()
Date.prototype.format = function (fmt) {
  var o = {
    "M+": this.getMonth() + 1,                   //月份
    "d+": this.getDate(),                        //日
    "h+": this.getHours(),                       //小时
    "m+": this.getMinutes(),                     //分
    "s+": this.getSeconds(),                     //秒
    "q+": Math.floor((this.getMonth() + 3) / 3), //季度
    "S": this.getMilliseconds()                  //毫秒
  };

  //  获取年份 
  // ①
  if (/(y+)/i.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  }

  for (var k in o) {
    // ②
    if (new RegExp("(" + k + ")", "i").test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    }
  }
  return fmt;
}

Vue.directive('focus', {
  inserted: function (el) {
    el.focus()
  }
})
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
