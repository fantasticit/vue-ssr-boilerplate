<template>
  <div>
    <h1>Page 2</h1>
    <div>
      <p>count： {{count}}</p>
      <button @click="decrementCount">count -1</button>
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

  asyncData({ store, route }) {
    console.log('Page 2 asyncData')
    return new Promise(resolve => setTimeout(resolve, 300))
  },

  methods: {
    ...mapActions(['decrementCount'])
  }
}
</script>
