<template>
    <div class="login">
        <div class = "container">
            <div class="wrapper">
                <hr class="colorgraph"><br>

                <input type="text"
                       class="form-control"
                       placeholder="ログインID"
                       v-model="login_id">

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
  created () {
    this.$_initialize()
  },
  data() {
    return {
      login_id: null,
      password: null,
    }
  },
  watch: {
    // 半角英字に変換
    login_id: function(v) {
      this.login_id = v.replace(
          /[Ａ-Ｚａ-ｚ０-９]/g,
          function(s) { return String.fromCharCode(s.charCodeAt(0) - 65248).replace(/^[^0-9a-zA-Z]*$/g, '') }
        )
    },
  },
  methods: {
    $_initialize() {
      console.log('_initialize')
    },
    login() {
      console.log('login', this.login_id, this.password)
      return
    },
  },
}
</script>