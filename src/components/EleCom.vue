<script setup lang=ts>
import { ref } from "vue"
const color1 = ref('red');
const date1 = ref(undefined)
const date2 = ref(undefined)
const date3 = ref(undefined)
// 官网： https://element-plus.org/zh-CN/component/button.html
</script>
<template>
  <div>
    <h1>Element Plus</h1>
    <el-empty class="box-border" />
    <el-color-picker v-model="color1" />
    <el-date-picker  v-model="date1" type="datetime" />
    <el-time-picker
      v-model="date2"
      is-range
      
    />
    <el-calendar v-model="date3" />
    <el-pagination class="box-border" :total="100" />
  </div>
</template>
<style lang="scss" scoped>
// 
</style>