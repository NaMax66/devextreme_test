<template>
  <div class="v-controls_wrap">
    <DxSelectBox
      :data-source="chartTypes"
      :value.sync="currentType"
    />
    <DxSelectBox
      :data-source="dataSources"
      :value.sync="currentData"
    />
  </div>
</template>

<script>
  import { DxSelectBox } from "devextreme-vue"

  export default {
    name: "VControls",
    components: {
      DxSelectBox
    },
    props: {
      chartTypes: Array,
      dataSources: Array
    },
    data: () => ({
      currentType: null,
      currentData: null
    })
  }
</script>

<style scoped>

</style>
