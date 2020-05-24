<template>
  <div class="toastrs-wrap">
    <div class="position">
      <toastr v-for="toastr in toastrs"
              :key="toastr.key"
              :toastr.sync="toastr"></toastr>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.toastrs-wrap {
  z-index: 1;
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
import { ShareModule } from "@/store/modules/share"
import toastr from './toastr'

@Component({
  components: {
    toastr,
  },
})
export default class Toastrs extends Vue {
  destroyed() {
    ShareModule.clear_toastr()
  }

  get toastrs() {
    return ShareModule.toastrs
  }
}
</script>
