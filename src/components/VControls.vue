<template>
  <div class="v-controls_wrap">
    <DxSelectBox
      :data-source="chartTypes"
      :value.sync="currentType"
      display-expr="name"
    />
    <DxSelectBox
      :data-source="dataSources"
      :value.sync="currentData"
      display-expr="name"
    />
    <DxButton
      :on-click="addChart"
      text="Создать"
      type="default"
      styling-mode="contained"
    />
  </div>
</template>

<script>
  import { DxSelectBox, DxButton } from "devextreme-vue"

  export default {
    name: "VControls",
    components: {
      DxSelectBox,
      DxButton
    },
    props: {
      chartTypes: Array,
      dataSources: Array
    },
    data: () => ({
      currentType: null,
      currentData: null
    }),
    methods: {
      addChart () {
        this.$emit('add_chart', { chartType: this.currentType, dataType: this.currentData })
      }
    }
  }
</script>

<style scoped>
.v-controls_wrap {
  display: flex;
  flex-direction: column;
  padding: 1rem 1.5rem;
  & > div {
    margin: 1rem;
  }
}
</style>
