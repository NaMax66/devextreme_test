<template>
  <div class="v-charts-wrap">
    <div class="v-charts_btn-wrap">
      <DxButton
        :on-click="showPopup"
        :text="title"
        type="default"
        styling-mode="contained"
      />
    </div>
    <DxPopup
      :visible.sync="popupVisible"
      :drag-enabled="false"
      :close-on-outside-click="true"
      :show-title="true"
      :title="title"
      class="dx_popup"
    >
      <v-controls @add_chart="addChart" :chart-types="chartTypes" :data-sources="dataSources"/>
    </DxPopup>
  </div>
</template>

<script>
  import VControls from "@/components/VControls"
  import axios from "axios"
  import { DxPopup, DxButton } from "devextreme-vue"

  export default {
    name: "VCharts",
    components: { VControls, DxPopup, DxButton },
    data: () => ({
      /* предположим, что эти данные мы получили с сервера заранее */
      dataSources: [
        {name:'для линейного графика', sourceId: '5ea85157da01cf25d4586101', postfix: 'data'},
        {name:'для пирога', sourceId: '5ea8513dda01cf25d45860ff', postfix: 'data'}
        ],
      /* типы это ещё и названия компонентов графиков. У каждого вида графика свой компонент */
      chartTypes: [{ name:'Линейный', type: 'VLineChart' }, { name:'Пирог', type: 'VPieChart' }],
      readyList: [],
      popupVisible: true,
      title: "Создать график"
    }),
    methods: {
      showPopup () {
        this.popupVisible = true
      },
      async addChart (params) {
        /* если не выбраны тип графика и данные - окно выбора не закроется */
        if (!params.chartType || !params.dataType) {
          return
        }
        const data = await this.getData(params.dataType)
        const preparedData = this.prepareData(data, params.chartType)
        this.readyList.push(preparedData)
        this.popupVisible = false
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
  .v-charts_btn-wrap {
    max-width: 120rem;
    margin: 5rem auto;
  }
</style>
