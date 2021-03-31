import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    nickname: "客服",
    default_: "#09aeb0",
    nav_bg: "#3d4966",
    active: "#192948",
    list_bg_active: "#f0f3fb",
    list_hover: "#f7f9f9",
  },
  mutations: {
    nickname_change(state, newVal) {
      this.state.nickname = newVal;
      console.log(this.state.nickname);
    },
    default_change(state, newVal) {
      this.state.default_ = newVal;
      console.log(this.state.default_);
    },
    nav_bg_change(state, newVal) {
      this.state.nav_bg = newVal;
      console.log(this.state.nav_bg);
    },
    active_change(state, newVal) {
      this.state.active = newVal;
      console.log(this.state.active);
    },
    list_bg_active_change(state, newVal) {
      this.state.list_bg_active = newVal;
      console.log(this.state.list_bg_active);
    },
    list_hover_change(state, newVal) {
      this.state.list_hover = newVal;
      console.log(this.state.list_hover);
    },
  },
  actions: {},
  modules: {},
});
