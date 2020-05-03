<template>
  <DxPieChart
    id="pie"
    :data-source="chartData"
    palette="Material"
  >
    <DxSeries
      argument-field="Группа"
      value-field="Доля"
    >
      <DxLabel :visible="true">
        <DxConnector
          :visible="true"
          :width="1"
        />
      </DxLabel>
    </DxSeries>
  </DxPieChart>
</template>

<script>
  import DxPieChart, {
    DxSeries,
    DxLabel,
    DxConnector
  } from 'devextreme-vue/pie-chart';
  export default {
    name: "VPieChart",
    components: {
      DxPieChart,
      DxSeries,
      DxLabel,
      DxConnector
    },
    props: {
      chartData: Array
    }
  }
</script>

<style scoped>

</style>
