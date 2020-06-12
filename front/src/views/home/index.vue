<template>
  <app-layout>
    <template>
      <v-row>
        <v-col cols="12" sm="6" offset-sm="3">
          <v-card
            v-for="airticle in airticles"
            :key="airticle.id"
            cols="12"
            class="article"
          >
            <v-img
              v-if="airticle.image_url"
              :src="airticle.image_url"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title>
                <v-icon class="user-icon">mdi-account</v-icon>
                <span class="user-name">{{ airticle.creator.email }}</span>
              </v-card-title>
            </v-img>

            <v-card-actions>
              <v-container>
                <span class="created-by">{{ airticle.created_at | moment }}</span>
              </v-container>

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
        @close="closePostModal()"
        @complete="getArticles()"></post-modal>
    </template>
  </app-layout>
</template>

<style lang="scss" scoped>
.article {
  margin-bottom: 60px;

  .user-name,
  .created-by {
    font-size: 14px;
  }

  .user-icon {
    background: white;
    border-radius: 50%;
  }
  .user-name {
    margin-left: 16px;
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

import moment from 'moment'

export default defineComponent({
  filters: {
    moment: (date) => {
      return moment(date).format('YYYY/MM/DD HH:mm')
    },
  },
  components: {
    PostModal,
  },
  setup() {
    const {
        state,
        _init,
        showPostModal,
        closePostModal,
        getArticles,
      } = composition()


    onMounted(() => {
      _init()
    })


    return {
      showPostModal,
      closePostModal,
      getArticles,
      ...toRefs(state),
    }
  }
})
</script>
