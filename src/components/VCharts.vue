<template>
  <div class="v-charts-wrap">
    <v-controls @add_chart="addChart" :chart-types="chartTypes" :data-sources="dataSources"/>
  </div>
</template>

<script>
  import VControls from "@/components/VControls"
  import axios from 'axios'
  export default {
    name: "VCharts",
    components: { VControls },
    data: () => ({
      dataSources: ['firstSource', 'secondSource'],
      chartTypes: ['pie', 'line']
    }),
    methods: {
      addChart (params) {
        console.log(params)
        console.log(process.env.VUE_APP_JWT)
      },
      getData () {
        axios
          .get('')
          .then(res => {this.dataSources = res})
          .catch(err => console.log(err))
      }
    }
  }
</script>

<style scoped>

</style>
