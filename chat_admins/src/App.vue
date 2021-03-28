<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
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
