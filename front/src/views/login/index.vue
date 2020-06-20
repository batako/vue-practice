<template>
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
                  prepend-icon="mdi-email"
                  v-model="email"
                  test-email
                ></v-text-field>

                <v-text-field
                  :type="show_password ? 'text' : 'password'"
                  label="Password"
                  prepend-icon="mdi-lock"
                  :append-icon="show_password ? 'mdi-eye' : 'mdi-eye-off'"
                  v-model="password"
                  @keyup.enter="login()"
                  @click:append="show_password = !show_password"
                  test-password
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="primary"
                @click="login()"
                test-submit
              >Login</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<style lang="scss">
.v-snack.toast-wrap {
  .v-snack__wrapper {
    background-color: transparent;
    box-shadow: none;

    i {
      margin-top: auto;
      margin-bottom: auto;
    }
    .v-snack__content {
      padding: 0;

      // .v-alert {
      //   display: table;
      //   margin-left: auto;
      //   margin-right: auto;
      // }
    }
  }
}
</style>

<script lang="ts">
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
</script>
