<template>
  <div class="login">
    <div class = "container">
      <div class="wrapper">
        <hr class="colorgraph"><br>

        <input type="text"
               class="form-control"
               placeholder="メールアドレス"
               v-model="email">

        <input type="password"
               class="form-control"
               placeholder="パスワード"
               v-model="password">

        <input type="button"
               value="ログイン"
               @click="login">
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./index.scss";
</style>

<script lang="ts">
import {
    Component,
    Mixins,
    Watch,
  } from 'vue-property-decorator'

import AuthService from '../../services/auth'
import Title from '../../components/mixins/title'
import router from '../../router'
import { ShareModule } from '../../store/modules/share'

@Component
export default class LoginIndex extends Mixins(Title) {
  title = 'ログイン'
  email    = 'example@example.com'
  password = 'password'

  mounted() {
    this.$_initialize()
  }

  $_initialize() {
    this.$ls.clear()
  }

  login() {
    AuthService
      .login(this.email, this.password)
      .then((response: any) => {
        router.push('/')
        ShareModule.clear_toastr()
      })
  }

  @Watch('email')
  onEmailChanged(newText: string, oldText: string) {
    this.email = newText.replace(
      /[Ａ-Ｚａ-ｚ０-９]/g,
      function(s) { return String.fromCharCode(s.charCodeAt(0) - 65248).replace(/^[^0-9a-zA-Z]*$/g, '') }
    )
  }
}
</script>