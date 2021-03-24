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
}
#app {
  background-color: f7fafa;
  width: 100vw;
  height: 100vh;
  min-width: 1260px;
  min-height: 616px;
}
body::-webkit-scrollbar{
  width: 10px;
  height: 10px;
}
body::-webkit-scrollbar-track{
  background: #F5F7FA;
  border-radius: 2px;
}

body::-webkit-scrollbar-thumb {
  background:#D8DFF0;
  border-radius: 10px;
}

body::-webkit-scrollbar-thumb:hover {
  background: var(--active);
}
</style>
