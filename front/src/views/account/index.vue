<template>
  <app-layout>
    <template>
      <v-card
        class="account"
        flat
      >
        <v-card-title>
          Account
        </v-card-title>

        <v-container class="grey lighten-5">
          <v-row no-gutters>
            <div align="center">
              <img
                v-if="upload_image_url"
                :src="upload_image_url"
                class="upload-image" />
            </div>
          </v-row>
          <v-row no-gutters>
            <v-col
              class="pr-4"
              cols="10"
            >
              <v-file-input
                v-model="input_image"
                accept="image/*"
                show-size
                label="プロフィール写真をアップロードしてください"
                prepend-icon="mdi-image"
                @change="onImagePicked"
              ></v-file-input>
            </v-col>
            <v-col
              class="pt-3"
              cols="2"
            >
              <v-btn
                color="warning"
                @click="updateAvatar()"
                :disabled="!upload_image_url"
              >更新</v-btn>
            </v-col>
          </v-row>
        </v-container>

        <v-card-actions>
          <v-layout justify-center>
            <v-btn

              @click="goHome()"
            >ホーム</v-btn>
          </v-layout>
        </v-card-actions>
      </v-card>
    </template>
  </app-layout>
</template>

<style lang="scss" scoped>
.account {
  width: 80%;
}
.upload-image {
  width: 80%;
}
</style>

<script lang="ts">
import {
    defineComponent,
    toRefs,
  } from '@vue/composition-api'

import { composition } from './index.composition'


export default defineComponent({
  props: {
    is_shown: {
      type:     Boolean,
      required: true,
    }
  },
  setup() {
    const {
        state,
        onImagePicked,
        updateAvatar,
        goHome,
      } = composition()


    return {
      onImagePicked,
      updateAvatar,
      goHome,
      ...toRefs(state),
    }
  }
})
</script>
