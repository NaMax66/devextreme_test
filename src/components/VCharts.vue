<template>
  <div class="v-charts-wrap">
    <v-controls @add_chart="addChart" :chart-types="chartTypes" :data-sources="dataSources"/>
  </div>
</template>

<script>
  import VControls from "@/components/VControls"
  import axios from "axios"

  export default {
    name: "VCharts",
    components: { VControls },
    data: () => ({
      dataSources: [
        {name:'для линейного графика', sourceId: '5ea85157da01cf25d4586101', postfix: 'data'},
        {name:'для пирога', sourceId: '5ea8513dda01cf25d45860ff', postfix: 'data'}
        ],
      chartTypes: [{ name:'Линейный', type: 'VLineChart' }, { name:'Пирог', type: 'VPieChart' }],
      readyList: []
    }),
    methods: {
      async addChart (params) {
        const data = await this.getData(params.dataType)
        const preparedData = this.prepareData(data, params.chartType)
        this.readyList.push(preparedData)

      },
      async getData (dataType) {
        const config = {
          headers: {
            Authorization: "Bearer " + process.env.VUE_APP_JWT
          }
        }
        const url = `${process.env.VUE_APP_DATASOURCE_URL}/${dataType.sourceId}/${dataType.postfix}`
        return await axios.get(url, config)
      },
      prepareData (data, chartType) {
        let preparedData = {
          type: null,
          data: null
        }
        preparedData.type = chartType.type
        preparedData.data = data
        return preparedData
      }
    }
  }
</script>

<style scoped>

</style>
