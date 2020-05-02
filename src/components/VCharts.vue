<template>
  <div class="v-charts-wrap">
    <v-controls @add_chart="addChart" :chart-types="chartTypes" :data-sources="dataSources"/>
  </div>
</template>

<script>
  import VControls from "@/components/VControls"
  export default {
    name: "VCharts",
    components: { VControls },
    data: () => ({
      dataSources: ['firstSource', 'secondSource'],
      dataTypes: ['pie', 'line']
    }),
    methods: {
      addChart (params) {
        console.log(params)
      }
    }
  }
</script>

<style scoped>

</style>
