<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>

  <!-- テンプレートの直下に複数の要素があっても正常に動作する -->
  <button @click="increment">
    Count is: {{ counts[0] }}, double is: {{ double }}
  </button>

  <button @click="increment1">
    counts[0] is: {{ counts[0] }}
  </button>

  <button @click="increment2">
    counts[1] is: {{ counts[1] }}
  </button>

  <input type="text"
         v-model="text">
</template>

<script lang="ts">
import {
    computed,
    reactive,
    toRefs,
    watch,
  } from 'vue'

export default {
  setup() {
    const state = reactive({
      counts: [100, 200],
      double: computed(() => state.counts[0] * 2),
      text:   'test',
    })

    function increment() {
      state.counts[0]++
    }

    function increment1() {
      state.counts[0]++
    }

    function increment2() {
      state.counts[1]++
    }

     watch(
      () => state.text,
      (newVal) => {
        // 10文字制限
        state.text = newVal.slice(0, 10)
    })

    return {
      increment,
      increment1,
      increment2,
      ...toRefs(state),
    }
  }
}
</script>
