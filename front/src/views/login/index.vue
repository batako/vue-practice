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
  mounted () {
    this.$_initialize()
  },
  data() {
    return {
      email:    null,
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
    $_initialize () {
      this.$ls.clear()
    },
    login() {
      const self = this
      self.$_utils_axios({
        settings: {
          method: 'post',
          url   : '/api/auth/sign_in',
          params: {
            email:    this.email,
            password: this.password,
          },
        },
        success: (response) => {
          self.$ls.set('access-token', response.headers['access-token'])
          self.$ls.set('client', response.headers.client)
          self.$ls.set('uid', response.headers.uid)

          self.$router.push('/')
        },
        failure: (response) => {
          self.$store.commit('setToastr', {
            type   : 'danger',
            message: response.data.errors.map(message => '<div>' + message + '</div>').join(),
            force  : false,
          })
        },
      })
    },
  },
}
</script>