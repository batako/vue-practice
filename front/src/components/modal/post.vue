<template>
  <v-dialog
    v-model="is_shown"
    width="800px"
    persistent
    no-click-animation
  >
    <v-card>
      <v-card-title class="blue darken-3">
        Post Image
      </v-card-title>

      <v-container>
        <v-row justify="center">
          <v-col
            sm="12"
            md="11"
            lg="9"
            xl="6"
          >
            <v-sheet class="pa-3">
              <v-form ref="form">
                <div align="center">
                  <img
                  v-if="upload_image_url"
                  :src="upload_image_url"
                  class="upload-image" />
                </div>
                <v-file-input
                  v-model="input_image"
                  accept="image/*"
                  show-size
                  label="画像ファイルをアップロードしてください"
                  prepend-icon="mdi-image"
                  @change="onImagePicked"
                ></v-file-input>
              </v-form>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>

      <v-card-actions>
        <v-btn
          @click="closeModal()"
        >キャンセル</v-btn>
        <v-spacer></v-spacer>
        <v-btn
          color="warning"
          @click="uploadImage()"
          :disabled="!upload_image_url"
        >シェア</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style scoped>
.v-card__title {
  color: white;
}
.upload-image {
  width: 80%;
}
</style>

<script lang="ts">
import {
    defineComponent,
    SetupContext,
    toRefs,
  } from '@vue/composition-api'

import { composition } from './post.composition'

import { ArticleService } from '../../services/article'

type Props = {
  type: boolean;
};

export default defineComponent({
  props: {
    is_shown: {
      type:     Boolean,
      required: true,
    }
  },
  setup(props, context) {
    const {
        state,
        onImagePicked,
      } = composition()


    const closeModal = () => {
      context.emit('close')
    }


    const uploadImage = () => {
      ArticleService
        .post(state.input_image)
        .then((response: any) => {
          state.input_image = null
          state.upload_image_url = null
          context.emit('close')
          context.emit('complete')
        })
    }


    return {
      onImagePicked,
      uploadImage,
      closeModal,
      ...toRefs(state),
    }
  }
})
</script>
