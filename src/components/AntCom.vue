<script setup lang=ts>
import { ref } from "vue"
import { Dayjs } from 'dayjs';
// import dayjs from 'dayjs';
// import relativeTime from 'dayjs/plugin/relativeTime';
// dayjs.extend(relativeTime);

import { Modal } from 'ant-design-vue';

const current1 = ref<number>(1);
const onChange = (pageNumber: number) => {
  console.log('Page: ', pageNumber);
};

const onRangeChange = (value: [Dayjs, Dayjs], dateString: [string, string]) => {
  console.log('Selected Time: ', value);
  console.log('Formatted Selected Time: ', dateString);
};

const onRangeOk = (value: [Dayjs, Dayjs]) => {
  console.log('onOk: ', value);
};
const visible = ref(false);
const info = () => {
  Modal.info({
    // title: 'some info',
    // content: 'some info',
  });
};
const confirm = () => {
  Modal.confirm({
    // title: 'some info',
    // content: 'some info',
  });
};

// 官网： https://3x.antdv.com/components/overview-cn/
// https://blog.csdn.net/weixin_53474595/article/details/129137417
// https://zhuanlan.zhihu.com/p/419400483
</script>
<template>
  <div>
    <h2>Ant Design Vue</h2>

    <a-date-picker />

    <a-range-picker :show-time="{ format: 'HH:mm' }" format="YYYY-MM-DD HH:mm" @change="onRangeChange" @ok="onRangeOk" />

    <a-button type="primary" @click="visible = true">展示modal</a-button>
    <a-modal v-model:open="visible">
    </a-modal>

    <a-button @click="info">展示modal info</a-button>

    <a-button @click="confirm">展示modal confirm</a-button>

    <a-popconfirm>
      <a href="#">点击popconfirm</a>
    </a-popconfirm>

    <!-- <span>{{ dayjs().fromNow() }}</span> -->
  

    <a-transfer class="box-border" :data-source="[]" show-search :target-keys="[]" :render="(item: any) => item.title" />

    <a-empty class="box-border" />

    <a-pagination class="box-border" v-model:current="current1" show-quick-jumper :total="500" @change="onChange" />

    <a-calendar class="box-border" :fullscreen="false" />

    <a-table class="box-border" :data-source="[]" :columns="[]" />
  </div>
</template>
<style lang="scss" scoped>
// </style>