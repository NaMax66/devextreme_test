<template>
  <div id="app">
    <v-charts />
  </div>
</template>

<script>
import VCharts from "@/components/VCharts"

export default {
  name: 'App',
  components: {
    VCharts
  }
}
</script>

<style>
html {
  font-size: 62.5%;
}
</style>
