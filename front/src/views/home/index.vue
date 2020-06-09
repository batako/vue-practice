<template>
  <div class="home">
    <img alt="Vue logo" src="@/assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from '@/components/hello_world.vue'

import {
    defineComponent,
    onMounted,
    toRefs,
  } from '@vue/composition-api'

import { composition } from './index.composition'

export default defineComponent({
  components: {
    HelloWorld,
  },
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
