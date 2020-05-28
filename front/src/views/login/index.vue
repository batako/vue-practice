<template>
  <div class="login">
    <div class = "container">
      <div class="wrapper">
        <hr class="colorgraph"><br>

        <form @submit.prevent="login">
          <input type="email"
                 class="form-control"
                 placeholder="メールアドレス"
                 v-model="email">

          <input type="password"
                 class="form-control"
                 placeholder="パスワード"
                 v-model="password">

          <input type="submit"
                 value="ログイン">
        </form>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>

<script lang="ts">
/* composition-api */
// import {
//     reactive,
//     onMounted,
//     toRefs,
//   } from '@vue/composition-api'
// import router from '@/router'

// import AuthService from '../../services/auth'
// // import Title from '../../components/mixins/title'
// import { ShareModule } from '../../store/modules/share'

// export default {
//   setup() {
//     // const title = 'ログイン'
//     const state = reactive({
//       email:    'example@example.com',
//       password: 'password',
//     })


//     function _init() {
//       AuthService.logout()
//     }


//     function login() {
//       AuthService
//         .login(state.email, state.password)
//         .then((response: any) => {
//           router.push('/')
//           ShareModule.clearToastrs()
//         })
//     }


//     onMounted(() => {
//       _init()
//     })


//     return {
//       login,
//       ...toRefs(state),
//     }
//   }
// }


/* vue-property-decorator */
// import {
//     Component,
//     Mixins,
//     Watch,
//   } from 'vue-property-decorator'

// import AuthService from '../../services/auth'
// import Title from '../../components/mixins/title'
// import { ShareModule } from '../../store/modules/share'

// @Component
// export default class LoginIndex extends Mixins(Title) {
//   title    = 'ログイン'
//   email    = 'example@example.com'
//   password = 'password'

//   mounted() {
//     this.$_init()
//   }

//   $_init() {
//     AuthService.logout()
//   }

//   login() {
//     AuthService
//       .login(this.email, this.password)
//       .then((response: any) => {
//         this.$router.push('/')
//         ShareModule.clearToastrs()
//       })
//   }

//   @Watch('email')
//   onEmailChanged(newText: string, oldText: string) {
//     this.email = newText.replace(
//       /[Ａ-Ｚａ-ｚ０-９]/g,
//       function(s) { return String.fromCharCode(s.charCodeAt(0) - 65248).replace(/^[^0-9a-zA-Z]*$/g, '') }
//     )
//   }
// }


/* options api */
import Vue from 'vue'

// mixin ファイルは options api 記法でも vue-property-decorator 記法でも動く
// import Title from '../../components/mixins/title'
import Title from '../../components/mixins/title.legacy'

import AuthService from '../../services/auth'
import { ShareModule } from '../../store/modules/share'

export default Vue.extend({
  mixins: [
    Title,
  ],
  data() {
    return {
      title:    'ログイン',
      email:    'example@example.com',
      password: 'password',
    }
  },
  mounted() {
    this.$_init()
  },
  methods: {
    $_init() {
      AuthService.logout()
    },
    login() {
      AuthService
        .login(this.email, this.password)
        .then((response: any) => {
          this.$router.push('/')
          ShareModule.clearToastrs()
        })
    },
  },
  // watch: {
  //   email(newVlue = '') {
  //     this.email = newVlue.replace(
  //       /[Ａ-Ｚａ-ｚ０-９]/g,
  //       function(s: string) { return String.fromCharCode(s.charCodeAt(0) - 65248).replace(/^[^0-9a-zA-Z]*$/g, '') }
  //     )
  //   },
  // },
})
</script>
