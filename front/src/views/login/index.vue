<template>
  <v-app id="inspire">
    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="primary"
                dark
                flat
              >
                <v-toolbar-title>Login form</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    type="email"
                    label="E-Mail"
                    prepend-icon="mdi-account"
                    v-model="email"
                  ></v-text-field>

                  <v-text-field
                    :type="show_password ? 'text' : 'password'"
                    label="Password"
                    prepend-icon="mdi-lock"
                    :append-icon="show_password ? 'mdi-eye' : 'mdi-eye-off'"
                    v-model="password"
                    @keyup.enter="login()"
                    @click:append="show_password = !show_password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="primary"
                  @click="login()"
                >Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>

<script lang="ts">
/* composition-api */
import {
    defineComponent,
    onMounted,
    toRefs,
  } from '@vue/composition-api'

import { composition } from './index.composition'

export default defineComponent({
  setup() {
    const {
        state,
        _init,
        login,
      } = composition()

    onMounted(() => {
      _init()
    })


    return {
      login,
      ...toRefs(state),
    }
  }
})


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
// import Vue from 'vue'

// // mixin ファイルは options api 記法でも vue-property-decorator 記法でも動く
// // import Title from '../../components/mixins/title'
// import Title from '../../components/mixins/title.legacy'

// import AuthService from '../../services/auth'
// import { ShareModule } from '../../store/modules/share'

// export default Vue.extend({
//   mixins: [
//     Title,
//   ],
//   data() {
//     return {
//       title:    'ログイン',
//       email:    'example@example.com',
//       password: 'password',
//     }
//   },
//   mounted() {
//     this.$_init()
//   },
//   methods: {
//     $_init() {
//       AuthService.logout()
//     },
//     login() {
//       AuthService
//         .login(this.email, this.password)
//         .then((response: any) => {
//           this.$router.push('/')
//           ShareModule.clearToastrs()
//         })
//     },
//   },
//   // watch: {
//   //   email(newVlue = '') {
//   //     this.email = newVlue.replace(
//   //       /[Ａ-Ｚａ-ｚ０-９]/g,
//   //       function(s: string) { return String.fromCharCode(s.charCodeAt(0) - 65248).replace(/^[^0-9a-zA-Z]*$/g, '') }
//   //     )
//   //   },
//   // },
// })
</script>
