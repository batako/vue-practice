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
import {
    KinesisContainer,
    KinesisElement,
  } from 'vue-kinesis'

import Title from '../../components/mixins/title'

import SampleModal from '../../components/modal/sample.vue'


@Component({
  components: {
    KinesisContainer,
    KinesisElement,
  }
})
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
