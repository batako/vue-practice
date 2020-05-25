<template>
  <div class="test">
    <h1>This is an test page</h1>
  </div>
</template>

<script lang="ts">
import {
    Component,
    Mixins,
  } from 'vue-property-decorator'

import Title from '../../components/mixins/title'

@Component
export default class TestIndex extends Mixins(Title) {
  title = 'テスト'
}
</script>