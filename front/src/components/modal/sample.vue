<template>
  <div class="base-pos">
    <div class="header draggable">
      <div class="close-icon">
        <img src="@/assets/images/modal/close-icon.png"
            @click="$emit('close')">
      </div>
      <div v-once>{{ title }}</div>
    </div>
    <div class="body">
      テスト1<br>
      テスト2<br>
      テスト3<br>
      テスト4<br>
      テスト5<br>
      テスト6<br>
      テスト7<br>
      テスト8<br>
      テスト9<br>
      テスト0<br>
      テスト1<br>
      テスト2<br>
      テスト3<br>
      テスト4<br>
      テスト5<br>
      テスト6<br>
      テスト7<br>
      テスト8<br>
      テスト9<br>
      テスト0<br>
      テスト1<br>
      テスト2<br>
      テスト3<br>
      テスト4<br>
      テスト5<br>
      テスト6<br>
      テスト7<br>
      テスト8<br>
      テスト9<br>
      テスト0<br>
    </div>
    <div class="footer">
      <button type="button"
              class="btn btn-primary"
              @click="primary()">Primary</button>
      <button type="button"
              class="btn btn-danger"
              @click="danger()">Danger</button>
      <button type="button"
              class="btn btn-warning"
              @click="warning()">Warning</button>
    </div>
  </div>
</template>

<style lang="scss">
@import './common.scss';
</style>

<style lang="scss" scope>
.body {
  height: 200px;
  overflow: auto;
  text-align: center;
}
</style>

<script lang="ts">
import {
    Component,
    Prop,
    Vue,
  } from 'vue-property-decorator'

@Component
export default class LoginIndex extends Vue {
  @Prop({required: true})
  title!: string

  primary() {
    console.log('primary')
  }

  danger() {
    console.log('danger')
  }

  warning() {
    console.log('warning')
  }
}
</script>
