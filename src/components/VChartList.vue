<template>
  <div class="v-chart-list-wrap">
    <div class="v-chart-list_item" v-for="chart in charts" :key="chart.id">
      <h1>{{ chart }}</h1>
    </div>
  </div>
</template>

<script>
  export default {
    name: "VChartList",
    props: {
      charts: Array
    }
  }
</script>

<style scoped>
.v-chart-list-wrap {
  display: flex;
  flex-direction: column;
}
</style>
