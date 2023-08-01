<script setup lang=ts>
import { ref } from "vue"
import { NEmpty, NTimePicker, NAutoComplete, NCascader, NColorPicker, NDatePicker, NInput, NTransfer, NTreeSelect, NCalendar, NDataTable, NPagination, useMessage, NButton, NPopconfirm } from 'naive-ui'
const date1 = ref('00:12:13')
const autoCom = ref(undefined)
const cas = ref(undefined)
const range = ref(undefined)
const input = ref(undefined)
const transferData = ref([])
const treeOptions = [{
  label: 'Rubber Soul',
  key: 'Rubber Soul',
  children: [
    {
      label:
        "Everybody's Got Something to Hide Except Me and My Monkey",
      key: "Everybody's Got Something to Hide Except Me and My Monkey"
    },

    {
      label: 'Wait',
      key: 'Wait'
    }
  ]
}]
const calendarTime = ref(Date.now().valueOf())
const pageNumber = ref(1)
const handlePositiveClick = () => {
  // message.info('是的')
}
const handleNegativeClick = () => {
  // message.info('并不')
}
// 官网： https://www.naiveui.com/zh-CN/light/components/avatar
</script>
<template>
  <div>
    <h2>Naive UI</h2>

    <n-empty></n-empty>

    <n-popconfirm @positive-click="handlePositiveClick" @negative-click="handleNegativeClick">
      <template #trigger>
        <n-button>popconfirm</n-button>
      </template>
    </n-popconfirm>

    <n-time-picker :default-formatted-value="date1" />

    <n-auto-complete v-model:value="autoCom" :input-props="{
      autocomplete: 'disabled'
    }" :options="[]" />

    <n-cascader v-model:value="cas" expand-trigger="hover" :options="[]" check-strategy="child" :show-path="true"
      :filterable="true" />

    <n-color-picker :actions="['clear', 'confirm']" />

    <n-date-picker v-model:value="range" type="datetimerange" clearable />

    <n-input v-model:value="input" type="text" />

    <n-tree-select :options="treeOptions" />

    <n-transfer ref="transfer" v-model:value="transferData" :options="[]" />

    <n-calendar class="box-border" v-model:value="calendarTime">
    </n-calendar>

    <n-data-table class="box-border" :columns="[]" :data="[]" />

    <n-pagination v-model:page="pageNumber" :page-count="100" size="large" show-quick-jumper show-size-picker />

  </div>
</template>
<style lang="scss" scoped>
// 
</style>