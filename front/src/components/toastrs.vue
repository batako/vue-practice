<template>
  <div class="toastrs-wrap">
    <div class="position">
        <toastr v-for="toastr in toastrs"
                :key="toastr.key"
                :toastr.sync="toastr"></toastr>
    </div>
  </div>
</template>

<style scoped>
  .toastrs-wrap {
    z-index: 1;
    position: relative;
  }

  .toastrs-wrap .position {
    position: absolute;
    width: 100%;
  }
</style>

<script>
  import toastr from './toastr'
  import { mapState } from 'vuex'

  export default {
    components: {
      toastr,
    },
    destroyed () {
      this.$store.commit('set', {
          name : 'toastrs',
          value: [],
        }
      )
    },
    computed: mapState({
      toastrs: state => state.toastrs,
    }),
  }
</script>
