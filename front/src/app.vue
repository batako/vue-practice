import Navbar from '@/components/shared/navbar';
<template>
  <div id="app">
    <loading />
    <!-- <toastrs /> -->
    <!-- <navbar /> -->
    <v-app>
      <vuetify-toast-snackbar />
      <router-view/>
    </v-app>
  </div>
</template>

<style lang="scss" scoped>
#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: #2c3e50;
}
</style>
