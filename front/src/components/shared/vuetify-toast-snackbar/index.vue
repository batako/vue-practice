<template>
  <v-snackbar
    :value="true"
    :top="true"
    :timeout="0"
    class="toast-wrap pa-0"
  >
    <v-container
      class="pa-0"
    >
      <div
        v-for="toastr in toastrs"
        :key="toastr.key"
      >
        <v-alert
          :type="toastr.type"
          :dismissible="true"
          :dense="true"
        >
          <span v-html="toastr.message"></span>
        </v-alert>
      </div>
    </v-container>
  </v-snackbar>
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

      // それぞれのアラートの内容に合わせて横幅調整する場合
      // 有効にしないとアラートの中で最大の横幅に全てリサイズされる
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
    toRefs,
  } from '@vue/composition-api'

import { composition } from './index.composition'

export default defineComponent({
  setup() {
    const {
        state,
      } = composition()

    return {
      ...toRefs(state),
    }
  }
})
</script>
