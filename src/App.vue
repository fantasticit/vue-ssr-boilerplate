<template>
  <div id="app">
    <img src="./assets/logo.png" alt="">
    <div>
      <router-link to="/">首页</router-link>
      <router-link to="/page1">page1</router-link>
      <router-link to="/page2">page2</router-link>
      <router-link to="/page3">404</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus">
#app {
  // background: url('./assets/bg.jpg');
  text-align: center;
  margin-top: 60px;

  img {
    width: 120px;
  }
}
</style>
