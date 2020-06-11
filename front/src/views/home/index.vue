<template>
  <app-layout>
    <template>
      <v-row>
        <v-col cols="12" sm="6" offset-sm="3">
          <v-card
            v-for="n in 10"
            :key="n"
            cols="12"
            class="article"
          >
            <v-img
              :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title>
                <v-icon class="user-icon">mdi-account</v-icon>
                <span class="user-name">user {{n}}</span>
              </v-card-title>
            </v-img>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-bookmark</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-share-variant</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
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

<style lang="scss" scoped>
.article {
  margin-bottom: 60px;

  .user-icon {
    background: white;
    border-radius: 50%;
  }
  .user-name {
    margin-left: 16px;
    font-size: 14px;
    font-weight: 400;
    font-stretch: 100%;
    line-height: 14px;
  }
}
</style>

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
