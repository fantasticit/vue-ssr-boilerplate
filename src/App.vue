<template>
  <div id="app">
    <header>
      <div class="container">
        <router-link class="logo" to="/"><img src="./assets/logo.png" alt="logo"></router-link>
        <nav>
          <ul>
            <router-link tag="li" to="/">首页</router-link>
            <router-link tag="li" to="/page1">page1</router-link>
            <router-link tag="li" to="/page2">page2</router-link>
            <router-link tag="li" to="/page3">404</router-link>
          </ul>
        </nav>
      </div>
    </header>
    <main>
      <router-view></router-view>
    </main>
    <footer>
      <div class="container">
        <p>
          <span>Build by</span>
          <a href="https://github.com/justemit/vue-ssr-boilerplate" target="_blank">vue-ssr-boilerplate</a>
          <span>with love</span>
        </p>
      </div>
    </footer>
    <a href="https://github.com/justemit/vue-ssr-boilerplate" target="_blank">
      <img style="position: absolute; top: 0; right: 0; border: 0; z-index: 100" src="https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png" alt="Fork me on GitHub">
    </a>
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus">
@import './app.styl';
@import './markdown.styl';
</style>
