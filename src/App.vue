<template>
  <div id="app">
    <v-lines />
  </div>
</template>

<script>
import VLines from './components/VLines.vue'

export default {
  name: 'App',
  components: {
    VLines
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
