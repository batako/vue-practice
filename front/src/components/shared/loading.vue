<template>
  <div v-if="is_processing">
    <div class="fullview">
      <div class="loading-spacer"></div>
      <vue-loading type="spiningDubbles"
                   color="#aaa"
                   :size="{ width: '100px', height: '100px' }">
      </vue-loading>
    </div>
  </div>
</template>

<style lang="scss">
.fullview {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;

  .loading-spacer {
    height: 30%;
  }
}
</style>

<script>
import {
    Component,
    Vue,
  } from 'vue-property-decorator'
import { VueLoading } from 'vue-loading-template'

import { ShareModule } from '@/store/modules/share'

@Component({
  components: {
    VueLoading,
  },
})
export default class Loading extends Vue {
  get is_processing() {
    return ShareModule.is_processing
  }
}
</script>
