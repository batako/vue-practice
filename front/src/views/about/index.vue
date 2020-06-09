<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

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
      } = composition()


    onMounted(() => {
      _init()
    })


    return {
      ...toRefs(state),
    }
  }
})
</script>
