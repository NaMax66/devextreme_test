<template>
  <div class="v-charts-wrap">
    <v-controls @add_chart="addChart"/>
  </div>
</template>

<script>
  import VControls from "@/components/VControls"
  export default {
    name: "VCharts",
    components: { VControls },
    methods: {
      addChart (params) {
        console.log(params)
      }
    }
  }
</script>

<style scoped>

</style>
