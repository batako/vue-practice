<template>
  <app-layout>
    <template>
      <v-card
        class="account"
        flat
      >
        <h2>プロフィール</h2>
      </v-card>

      <v-container>
        <v-row
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="8"
          >
            <v-card flat>
              <v-row>
                <v-col>
                  <label
                    class="cursor-pointer"
                  >
                    <v-avatar
                      size="60px"
                      item
                    >
                      <v-img
                        v-if="current_user.avatar"
                        :src="current_user.avatar"
                      />
                      <v-icon v-else>mdi-account</v-icon>
                    </v-avatar>
                    <v-file-input
                      v-model="input_image"
                      accept="image/*"
                      class="d-none"
                      @change="updateAvatar"
                    ></v-file-input>
                  </label>
                  <span class="pl-4 user-id">{{ current_user.login_id }}</span>
                </v-col>
              </v-row>
            </v-card>

            <v-card flat>
              <v-text-field
                type="text"
                label="表示名"
                prepend-icon="mdi-account"
                v-model="form.name"
              ></v-text-field>
            </v-card>

            <v-card flat>
              <v-text-field
                type="email"
                label="E-Mail"
                prepend-icon="mdi-email"
                v-model="form.email"
              ></v-text-field>
            </v-card>

            <v-card-actions class="justify-center">
              <v-btn
                color="primary"
                @click="updateUser"
              >
                更新する
              </v-btn>
            </v-card-actions>
          </v-col>
        </v-row>
      </v-container>
    </template>
  </app-layout>
</template>

<style lang="scss" scoped>
.account {
  width: 80%;
}
.user-id {
  line-height: 60px;
}
</style>

<script lang="ts">
import {
    computed,
    defineComponent,
    onMounted,
    toRefs,
    reactive,
  } from '@vue/composition-api'

import { composition } from './index.composition'

export default defineComponent({
  setup() {
    const {
        state,
        _init,
        updateAvatar,
        updateUser,
        goHome,
      } = composition()

    onMounted(() => {
      _init()
    })


    return {
      updateAvatar,
      updateUser,
      goHome,
      ...toRefs(state),
    }
  }
})
</script>
