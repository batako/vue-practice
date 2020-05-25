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

import Title from '../../components/mixins/title'
import { ShareModule } from '../../store/modules/share'

import { API } from '../../shared/api'

@Component
export default class LoginIndex extends Mixins(Title) {
  title = 'ログイン'
  email    = ''
  password = ''

  mounted() {
    this.$_initialize()
  }

  $_initialize() {
    this.$ls.clear()
  }

  login() {
    API.submit({
      settings: {
        method: 'post',
        url   : '/api/auth/sign_in',
        data: {
          email:    this.email,
          password: this.password,
        },
      },
      success: (response: any) => {
        this.$ls.set('access-token', response.headers['access-token'])
        this.$ls.set('client', response.headers.client)
        this.$ls.set('uid', response.headers.uid)

        this.$router.push('/')

        ShareModule.clear_toastr()
      },
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