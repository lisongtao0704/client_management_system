<template>
  <div id="app" ref="app">
    <router-view />
  </div>
</template>

<script>
import { colorConfig } from "./api/index.js";
export default {
  name: "app",
  // mounted () {
  //   this.$refs.app.style.cssText=`' --default':${}`
  // },
  // data(){
  //   return {
  //     b:this.$store.default_
  //   }
  // },
  mounted() {
    colorConfig().then((res) => {
      this.$store.commit('default_change', res.data[0].defaultColor)
      this.$store.commit('nav_bg_change', res.data[0].nav_bg)
      this.$store.commit('active_change', res.data[0].active)
      this.$store.commit('list_bg_active_change', res.data[0].list_bg_active)
      this.$store.commit('list_hover_change', res.data[0].list_hover)
    });
  },
  computed: {
    a: function () {
      return (
        this.$store.state.default_ +
        this.$store.state.nav_bg +
        this.$store.state.active +
        this.$store.state.list_bg_active +
        this.$store.state.list_hover
      );
    },
  },
  watch: {
    a: function () {
      this.$refs.app.style.cssText = `--default:${this.$store.state.default_};--nav_bg:${this.$store.state.nav_bg};--active:${this.$store.state.active};--list_bg_active:${this.$store.state.list_bg_active}; --list_hover:${this.$store.state.list_hover}`;
    },
  },
};
</script>

<style>
:root {
  --default: #09aeb0;
  --nav_bg: #3d4966;
  --active: #192948;
  --list_bg_active: #f0f3fb;
  --list_hover: #f0f3fba3;
}
#app {
  background-color: #f7fafa;
  width: 100vw;
  height: 100vh;
  min-width: 1260px;
  min-height: 616px;
}
*::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}
*::-webkit-scrollbar-track {
  background: var(--list_bg_active);
  border-radius: 2px;
}

*::-webkit-scrollbar-thumb {
  background: #d8dff0;
  border-radius: 10px;
}

*::-webkit-scrollbar-thumb:hover {
  background: var(--active);
}
</style>
