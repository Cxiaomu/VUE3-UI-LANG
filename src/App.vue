<script setup lang="ts">
import { computed } from 'vue';
import { RouterView } from 'vue-router'
import { ElConfigProvider } from 'element-plus'
import { NConfigProvider,NMessageProvider } from 'naive-ui'
// import { getCurrLang } from "./utils/common"

import i18n from './lang';
const locale = computed(() => (i18n.global.messages.value[i18n.global.locale.value]))
console.log(i18n.global.messages.value[i18n.global.locale.value])
console.log(i18n.global.messages.value)
console.log(i18n.global.locale.value)
</script>

<template>
  <el-config-provider :locale="locale.ele">
    <a-config-provider :locale="locale.ant">
      <n-config-provider :locale="locale.nai">
        <n-message-provider>
          <RouterView />
        </n-message-provider>
      </n-config-provider>
    </a-config-provider>
  </el-config-provider>
</template>
<style scoped></style>
