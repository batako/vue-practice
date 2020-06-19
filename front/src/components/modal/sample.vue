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

<style lang="scss" scoped>
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

import { Toast } from '../../shared/toast'
import { ShareStore } from '../../store/modules/share'

@Component
export default class LoginIndex extends Vue {
  @Prop({required: true})
  title!: string

  primary() {
    ShareStore.startProcess()

    setTimeout(() => {
      this.$emit('close')
      ShareStore.clearToastrs()
      Toast.show({
        type:    'success',
        message: 'Primary ボタンを押下しました',
        force:   true,
      })
      ShareStore.stopProcess()
    }, 2000)
  }

  danger() {
    Toast.show({
      type:    'danger',
      message: 'Danger ボタンを押下しました',
      force:   false,
    })
  }

  warning() {
    Toast.show({
      type:    'warning',
      message: 'Warning ボタンを押下しました',
      force:   false,
    })
  }
}
</script>
