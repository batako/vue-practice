<template>
  <app-layout>
    <template>
      @contents
    </template>

    <template #bottom-content>
      <!-- 投稿ボタン -->
      <v-btn
        bottom
        color="red"
        dark
        fab
        fixed
        right
        @click="showPostModal()"
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>

      <!-- 投稿モーダル -->
      <post-modal
        :is_shown="show_post_modal"
        @close="closePostModal()"></post-modal>
    </template>
  </app-layout>
</template>

<script>
import {
    defineComponent,
    onMounted,
    toRefs,
  } from '@vue/composition-api'
import PostModal from '@/components/modal/post.vue'

import { composition } from './index.composition'

export default defineComponent({
  components: {
    PostModal,
  },
  setup() {
    const {
        state,
        _init,
        showPostModal,
        closePostModal,
      } = composition()


    onMounted(() => {
      _init()
    })


    return {
      showPostModal,
      closePostModal,
      ...toRefs(state),
    }
  }
})
</script>
