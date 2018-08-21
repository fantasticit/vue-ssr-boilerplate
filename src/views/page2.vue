<template>
  <div>Page 2</div>
</template>

<script>
export default {
  asyncData({ store, route }) {
    console.log('Page 2 asyncData')
    return new Promise(resolve => setTimeout(resolve, 500))
  }
}
</script>

<style lang="stylus" scoped>
div {
  border: 5px red solid;
  padding: 100px;
  margin-top: 20px;
}
</style>
