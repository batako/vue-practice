<template>
  <div class="toastr-wrapper"
       :class="{opened: opened}">
    <div class="alert"
         role="alert"
         :class="class_converter[toastr.type]">
      <a class="close-icon-wrap"
         @click="close()">
        <img :src="close_image"
             class="close-icon">
      </a>
      <div v-html="$_utils_nl2br(toastr.message)"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.toastr-wrapper {
  width: 90%;
  margin-left: auto;
  margin-right: auto;

  opacity: 0;
  height: 0;
  transition: all 300ms 0s ease;
  pointer-events: none;

  &.opened {
    opacity: 1;
    height: auto;
    transition: all 300ms 0s ease;
    pointer-events: auto;
  }

  .alert {
    margin-top: 1rem;
    margin-bottom: 0;
  }

  .close-icon-wrap {
    cursor: pointer;
    position: absolute;
    top: 8px;
    right: 10px;
    transition: all .3s ease;

    &:hover {
      -webkit-transform: rotate(90deg);
      transform: rotate(90deg);
      -webkit-transition: all .3s ease;
      transition: all .3s ease;
    }

    .close-icon {
      display: block !important;
    }
  }
}
</style>

<script>
export default {
  props: ['toastr'],
  data () {
    return {
      opened: false,
      animation_time: 3000,
      class_converter: {
        success: 'alert-success',
        danger:  'alert-danger',
        warning: 'alert-warning',
      },
    }
  },
  computed: {
    close_image () {
      return require('@/assets/images/toast-close-btn.png')
    },
  },
  updated () {
    if (this.toastr.force) {
      this.toastr.force = false
      this.opened = false

      const self = this
      this.$nextTick(() => {
        self.$_initialize()
      })
    }
  },
  mounted () {
    this.$_initialize()
  },
  methods: {
    $_initialize () {
      this.opened = true

      if (this.toastr.type == 'success') {
        setTimeout(() => {
          this.opened = false
        }, this.animation_time)
      }
    },
    close () {
      this.opened = false

      setTimeout(() => {
          this.$destroy()
          this.$el.parentNode.removeChild(this.$el)
      }, 300)
    },
  }
}
</script>
