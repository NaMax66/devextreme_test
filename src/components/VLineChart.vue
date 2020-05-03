<template>
  <DxChart
    id="chart"
    :data-source="chartData"
    palette="Bright"
    v-if="chartData.length"
  >
    <DxCommonSeriesSettings
      type="line"
      argument-field="Дата"
    />
    <DxSeries
      value-field="Процент"
      name="Процент"
    />
    <DxArgumentAxis
      :value-margins-enabled="false"
      discrete-axis-division-mode="crossLabels"
    >
      <DxGrid :visible="true"/>
    </DxArgumentAxis>
    <DxLegend
      vertical-alignment="top"
      horizontal-alignment="right"
      item-text-position="bottom"
    />
    <DxTooltip :enabled="true"/>
    <DxMargin :bottom="20"/>
  </DxChart>
</template>

<script>
  import { DxChart, DxCommonSeriesSettings, DxSeries, DxArgumentAxis, DxGrid, DxLegend, DxTooltip, DxMargin  } from "devextreme-vue/chart"

  export default {
    name: "VLineChart",
    components: {
      DxChart,
      DxCommonSeriesSettings,
      DxSeries,
      DxArgumentAxis,
      DxGrid,
      DxLegend,
      DxTooltip,
      DxMargin
    },
    props: {
      chartData: Array
    }
  }
</script>

<style scoped>

</style>
