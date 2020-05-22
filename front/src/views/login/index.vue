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

<script>
export default {
  name: 'login',
  data() {
    return {
      login_id: null,
      password: null,
    }
  },
  watch: {
    // 半角英字に変換
    email: function(v) {
      this.email = v.replace(
          /[Ａ-Ｚａ-ｚ０-９]/g,
          function(s) { return String.fromCharCode(s.charCodeAt(0) - 65248).replace(/^[^0-9a-zA-Z]*$/g, '') }
        )
    },
  },
  methods: {
    login() {
      this.$_utils_axios({
        settings: {
          method: 'post',
          url   : '/api/auth/sign_in',
          params: {
            email:    this.email,
            password: this.password,
          },
        },
        success: (response) => {
          console.log('@success', response)
        },
        failure: () => {
          console.log('@failure')
        },
      })
    },
  },
}
</script>