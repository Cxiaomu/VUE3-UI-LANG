<script setup lang=ts>
import { ref } from 'vue'
import { LangOption } from '@/utils/interface'
import { langOptions } from '@/utils/configData'
import { getCurrLang } from "@/utils/common"

const lang = ref(getCurrLang())
const LangOptions = ref(langOptions);
const changeLang = (val: LangOption) => {
  lang.value = val;
  sessionStorage.setItem("language", val);
  window.location.reload();
}
</script>
<template>
  <el-select v-model="lang" @change="changeLang">
    <el-option v-for="option in  LangOptions" :key="option.value" :label="option.label" :value="option.value"></el-option>
  </el-select>
</template>
<style></style>