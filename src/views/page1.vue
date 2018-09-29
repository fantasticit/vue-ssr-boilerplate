<template>
  <div class="container">
    <h1>测试页 1</h1>
    <h3>点击下方按钮</h3>
    <div :style="'{text-align: center}'">
      <p>count： {{count}}</p>
      <button @click="incrementCount">count +1</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState({
      count: state => state.count
    })
  },

  methods: {
    ...mapActions(['incrementCount'])
  }
}
</script>
