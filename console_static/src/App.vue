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
:root{
  --default:#09AEB0
}
#app {
  background-color: f7fafa;
  width: 100vw;
  height: 100vh;
  min-width: 1260px;
  min-height: 616px;
}
</style>
