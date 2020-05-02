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
    <DxButton
      :on-click="addChart"
      text="Создать график"
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
  margin: 0 auto;
  max-width: 120rem;
  padding: 1rem 1.5rem;
  & > div {
    margin: 1rem;
  }
  @media (--min-phone) {
    flex-direction: row;
  }
}
</style>
