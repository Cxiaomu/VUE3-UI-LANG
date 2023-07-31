<script setup lang="ts">
import EleCom from '@/components/EleCom.vue';
import LangBar from '@/components/LangBar.vue';
</script>

<template>
  <div>
    <nav id="langBar">
      <LangBar />
    </nav>
    <main>
      <EleCom />
    </main>
  </div>
</template>
<style lang="scss" scoped>
#langBar {}
</style>
