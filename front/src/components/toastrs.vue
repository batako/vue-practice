<template>
  <div>
    <header>
      <slot name="head"></slot>
    </header>

    <p>これは共通で表示される</p>
    <slot name="default"></slot>

    <slot name="body"></slot>

     <slot name="test"
           :text="text1"></slot>

    <slot name="test2"
          :text="text2"></slot>

    <div class="toastrs-wrap">
      <div class="position">
        <toastr v-for="toastr in toastrs"
                :key="toastr.key"
                :toastr.sync="toastr"></toastr>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.toastrs-wrap {
  z-index: 9999;
  position: relative;

  .position {
    position: absolute;
    width: 100%;
  }
}
</style>

<script lang="ts">
import {
    Component,
    Vue,
  } from 'vue-property-decorator'
import { ShareModule } from '../store/modules/share'

@Component({})
export default class Toastrs extends Vue {
  text1 = '@1'
  text2 = '@2'

  destroyed() {
    ShareModule.clearToastrs()
  }

  get toastrs() {
    return ShareModule.toastrs
  }
}
</script>
