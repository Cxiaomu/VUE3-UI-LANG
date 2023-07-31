<script setup lang=ts>
import { ref } from "vue"
import { NEmpty, NTimePicker } from 'naive-ui'
const color1 = ref('red');
const date1 = ref('00:12:13')
const date2 = ref('')
const date3 = ref('')
// 官网： https://www.naiveui.com/zh-CN/light/components/avatar
</script>
<template>
  <div>
    <h2>Naive UI</h2>
    <n-empty >
      <n-time-picker :default-formatted-value="date1" />
    <!-- <template #extra>
      <n-button size="small">
        看看别的
      </n-button>
    </template> -->
  </n-empty>

   
  </div>
</template>
<style lang="scss" scoped>
// 
</style>