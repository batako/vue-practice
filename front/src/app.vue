<template>
  <div id="app">
    <loading />
    <toastrs />
    <div v-if="is_logined"
         id="nav">
      <router-link to="/">Home</router-link>
      | <router-link to="/about">About</router-link>
      | <router-link to="/test">Test</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

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

import { ShareModule } from './store/modules/share'

@Component
export default class App extends Vue {
  get is_logined() {
    return ShareModule.is_logined
  }
}
</script>
