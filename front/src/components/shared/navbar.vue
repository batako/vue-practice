<template>
  <div v-if="is_logined"
       id="nav">
  <router-link to="/">Home</router-link>
  | <router-link to="/about">About</router-link>
  | <router-link to="/sample">Sample</router-link>
</div>
</template>

<style lang="scss" scoped>
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<script lang="ts">
import {
    Component,
    Vue,
  } from 'vue-property-decorator'

import { ShareModule } from '@/store/modules/share'

@Component
export default class Toastr extends Vue {
  get is_logined() {
    return ShareModule.login_status
  }
}
</script>
