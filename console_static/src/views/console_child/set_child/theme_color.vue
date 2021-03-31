<template>
  <div class="theme_color">
    <div>
      <ul>
        <li>
          <span>主题风格</span>
          <div class="block">
            <el-color-picker v-model="default_"></el-color-picker>
          </div>
        </li>
        <li>
          <span>导航条背景 </span>
          <div class="block">
            <el-color-picker v-model="nav_bg"></el-color-picker>
          </div>
        </li>
        <li>
          <span>导航条选中 </span>
          <div class="block">
            <el-color-picker v-model="active"></el-color-picker>
          </div>
        </li>
        <li>
          <span>菜单列表背景 </span>
          <div class="block">
            <el-color-picker v-model="list_bg_active"></el-color-picker>
          </div>
        </li>
        <li>
          <span>菜单列表触摸 </span>
          <div class="block">
            <el-color-picker v-model="list_hover"></el-color-picker>
          </div>
        </li>
      </ul>
      <el-button class="reset" @click="reset" type="primary"
        >重置按钮</el-button
      >
    </div>
  </div>
</template>
<style lang="less" scoped>
.theme_color {
  > div {
    .reset {
      color: #fff;
      background-color: var(--default);
      margin: 0 20px;
      &:hover {
        opacity: 0.7;
      }
    }
    background-color: #fff;
    margin: 15px 20px;
    padding-bottom: 20px;
    ul {
      padding: 20px;
      li {
        list-style-type: none;
        span {
          color: var(--active);
          margin-bottom: 5px;
          display: block;
        }
      }
    }
  }
}
</style>
<script>
import { colorConfig } from "../../../api/index.js";
export default {
  name: "ThemeColor",
  data() {
    return {};
  },
  methods: {
    reset() {
      this.$store.state.default_ = "#09aeb0";
      this.$store.state.nav_bg = "#3d4966";
      this.$store.state.active = "#192948";
      this.$store.state.list_bg_active = "#f0f3fb";
      this.$store.state.list_hover = "#f7f9f9";
      colorConfig({
          state: "change",
          colorVal: "#09aeb0",
          color: "defaultColor",
        })
        colorConfig({
          state: "change",
          colorVal: "#3d4966",
          color: "nav_bg",
        })
        colorConfig({
          state: "change",
          colorVal: "#192948",
          color: "active",
        })
        colorConfig({
          state: "change",
          colorVal: "#f0f3fb",
          color: "list_bg_active",
        })
        colorConfig({
          state: "change",
          colorVal: "#f7f9f9",
          color: "list_hover",
        })
    },
  },
  computed: {
    default_: {
      get() {
        return this.$store.state.default_;
      },
      set(newVal) {
        colorConfig({
          state: "change",
          colorVal: `${newVal}`,
          color: "defaultColor",
        }).then((res) => {
          console.log("数据库更新defaultColor");
        });
        this.$store.commit("default_change", newVal);
      },
    },
    nav_bg: {
      get() {
        return this.$store.state.nav_bg;
      },
      set(newVal) {
        colorConfig({
          state: "change",
          colorVal: `${newVal}`,
          color: "nav_bg",
        }).then((res) => {
          console.log("数据库更新nav_bg");
        });
        this.$store.commit("nav_bg_change", newVal);
      },
    },
    active: {
      get() {
        return this.$store.state.active;
      },
      set(newVal) {
        colorConfig({
          state: "change",
          colorVal: `${newVal}`,
          color: "active",
        }).then((res) => {
          console.log("数据库更新active");
        });
        this.$store.commit("active_change", newVal);
      },
    },
    list_bg_active: {
      get() {
        return this.$store.state.list_bg_active;
      },
      set(newVal) {
        colorConfig({
          state: "change",
          colorVal: `${newVal}`,
          color: "list_bg_active",
        }).then((res) => {
          console.log("数据库更新list_bg_active");
        });
        this.$store.commit("list_bg_active_change", newVal);
      },
    },
    list_hover: {
      get() {
        return this.$store.state.list_hover;
      },
      set(newVal) {
        colorConfig({
          state: "change",
          colorVal: `${newVal}`,
          color: "list_hover",
        }).then((res) => {
          console.log("数据库更新list_hover");
        });
        this.$store.commit("list_hover_change", newVal);
      },
    },
  },
  mounted() {},
};
</script>