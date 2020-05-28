<template>
  <div class="test">
    <h1>This is an test page</h1>

    <button @click="openModal">モーダル</button>

    <div class="datetime">
      <el-date-picker v-model="datetime"
                      type="datetime"
                      placeholder="日時を選択してください" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.datetime {
  margin-top: 10px;
}
</style>

<script lang="ts">
import {
    Component,
    Mixins,
  } from 'vue-property-decorator'

import Title from '../../components/mixins/title'

import SampleModal from '../../components/modal/sample.vue'

@Component
export default class TestIndex extends Mixins(Title) {
  title = 'テスト'
  datetime = null

  openModal() {
    this.$modal.show(
      SampleModal,
      {
        title: 'タイトル',
      },
      {
        height:       'auto',
        clickToClose: false,
        draggable:    '.draggable',
      },
    )
  }
}
</script>
