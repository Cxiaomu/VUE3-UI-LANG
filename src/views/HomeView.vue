<script setup lang="ts">
import { reactive, shallowRef, ref } from 'vue';
import EleCom from '@/components/EleCom.vue';
import LangBar from '@/components/LangBar.vue';
import QuaCom from '@/components/QuaCom.vue';
import AntCom from '@/components/AntCom.vue';
import NaiCom from '@/components/NaiCom.vue';
import BooCom from '@/components/BooCom.vue'

// 可渲染组件列表
const comArr = reactive([
  { name: 'Element Plus', is: shallowRef(EleCom) },
  { name: 'Ant Design Vue', is: shallowRef(AntCom) },
  { name: 'Naive UI', is: shallowRef(NaiCom) },
  { name: 'Quasar', is: shallowRef(QuaCom) },
  { name: 'BootStrap Vue', is: shallowRef(BooCom) },
])

// 当前组件
const currCom = ref({
  name: 'Element Plus',
  is: shallowRef(EleCom)
})

const changeCurr = (comm: {
  name: string;
  is: any;
}) => {
  currCom.value = comm
}
</script>

<template>
  <div>
    <nav id="langBar">
      <LangBar />
    </nav>
    <main>
      <div>
        <div class="tag box-border" v-for="comm in comArr" :key="comm.name" @click="changeCurr(comm)">
          <span :class="{ 'activeCom': currCom.name === comm.name }">{{ comm.name }}</span>
        </div>
      </div>
      <component :is="currCom.is"> </component>
    </main>
  </div>
</template>
<style lang="scss" scoped>
.tag {
  display: inline-block;
  padding: 1rem;
  margin: 1rem;
  margin-left: 0;
  border-radius: 3px;
  cursor: pointer;

  span {
    font-weight: bold;
  }
}

.activeCom {
  color: cornflowerblue;
}
</style>
