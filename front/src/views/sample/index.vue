<template>
  <app-layout>
    <template>


  <div class="test">
    <h1>This is an test page</h1>

    <button @click="openModal">モーダル</button>

    <kinesis-container>
      <kinesis-element
          tag="img"
          :src="'https://www.kabanoki.net/wp-content/uploads/2020/01/agura_kutsurogu3_ojisan.png'"
          :strength="-20"
          type="rotate"
          transformOrigin="50% 300%"
          axis="x" />
      <kinesis-element
          tag="img"
          :src="'https://www.kabanoki.net/wp-content/uploads/2020/01/agura_kutsurogu7_obasan.png'"
          :strength="-10"
          type="rotate"
          transformOrigin="50% 300%"
          axis="x" />
      <kinesis-element
          tag="img"
          :src="'https://www.kabanoki.net/wp-content/uploads/2020/01/himan_pocchari07_ojisan.png'"
          :strength="10"
          type="rotate"
          transformOrigin="50% 300%"
          axis="x" />
      <kinesis-element
          tag="img"
          :src="'https://www.kabanoki.net/wp-content/uploads/2020/01/himan_pocchari08_obasan.png'"
          :strength="20"
          type="rotate"
          transformOrigin="50% 300%"
          axis="x" />
    </kinesis-container>

    <div class="datetime">
      <el-date-picker v-model="datetime"
                      type="datetime"
                      placeholder="日時を選択してください" />
    </div>
  </div>


    </template>
  </app-layout>
</template>

<style lang="scss" scoped>
.datetime {
  margin-top: 10px;
}
</style>

<script lang="ts">
import {
    defineComponent,
    onMounted,
    toRefs,
  } from '@vue/composition-api'

import {
    KinesisContainer,
    KinesisElement,
  } from 'vue-kinesis'

import { composition } from './index.composition'

export default defineComponent({
  components: {
    KinesisContainer,
    KinesisElement,
  },
  setup() {
    const {
        state,
        _init,
        openModal,
      } = composition()


    onMounted(() => {
      _init()
    })


    return {
      openModal,
      ...toRefs(state),
    }
  }
})
</script>
