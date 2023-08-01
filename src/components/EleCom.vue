<script setup lang=ts>
import { ref } from "vue"
import { ElMessageBox } from 'element-plus'
const color1 = ref('red');
const date1 = ref(undefined)
const date2 = ref(undefined)
const date3 = ref(undefined)
const treeSelect = ref(undefined)
const treeData = [{
  value: '1',
  label: 'Level one 1',
  children: [
    {
      value: '1-1',
      label: 'Level two 1-1',
      children: [
        {
          value: '1-1-1',
          label: 'Level three 1-1-1',
        },
      ],
    },
  ],
}]
const goBack = () => {

}
const showMess = () => {
  ElMessageBox.confirm(
    // '',
    '',
    {
      // confirmButtonText: 'OK',
      // cancelButtonText: 'Cancel',
      type: 'warning',
    }
  )
}
// 官网： https://element-plus.org/zh-CN/component/button.html
</script>
<template>
  <div>
    <h1>Element Plus</h1>

    <el-color-picker v-model="color1" />

    <el-date-picker v-model="date1" type="datetime" />

    <el-time-picker v-model="date2" is-range />

    <el-image class="box-border" src="" />

    <el-tree-select v-model="treeSelect" :data="treeData" :render-after-expand="false" clearable />

    <el-button @click="showMess"> 展示ElMessageBox </el-button>

    <el-popconfirm title="">
      <template #reference>
        <el-button>气泡确认 部分语言没有国际化</el-button>
      </template>
    </el-popconfirm>

    <el-empty class="box-border" />

    <el-calendar class="box-border" v-model="date3" />

    <el-table class="box-border" :data="[]">
    </el-table>

    <el-pagination class="box-border" :total="100" />

    <el-page-header class="box-border" @back="goBack">
    </el-page-header>

  </div>
</template>
<style lang="scss" scoped>
// 
</style>