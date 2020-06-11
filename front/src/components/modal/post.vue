<template>
  <v-dialog
    v-model="is_shown"
    width="800px"
    persistent
    no-click-animation
  >
    <v-card>
      <v-card-title class="blue darken-3">
        Create contact
      </v-card-title>

      <v-container>
        <v-row class="mx-2">
          <v-col
            class="align-center justify-space-between"
            cols="12"
          >
            <v-row
              align="center"
              class="mr-0"
            >
              <v-avatar
                size="40px"
                class="mx-3"
              >
                <img
                  src="//ssl.gstatic.com/s2/oz/images/sge/grey_silhouette.png"
                  alt=""
                >
              </v-avatar>
              <v-text-field
                placeholder="Name"
              ></v-text-field>
            </v-row>
          </v-col>
          <v-col cols="6">
            <v-text-field
              prepend-icon="mdi-account-card-details-outline"
              placeholder="Company"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              placeholder="Job title"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              prepend-icon="mdi-mail"
              placeholder="Email"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              type="tel"
              prepend-icon="mdi-phone"
              placeholder="(000) 000 - 0000"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              prepend-icon="mdi-text"
              placeholder="Notes"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>

      <v-card-actions>
        <v-btn
          text
          color="primary"
        >More</v-btn>
        <v-spacer></v-spacer>
        <v-btn
          text
          color="primary"
          @click="closeModal()"
        >Cancel</v-btn>
        <v-btn
          text
          @click="closeModal()"
        >Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style scoped>
.v-card__title {
  color: white;
}
</style>

<script lang="ts">
import {
    defineComponent,
    SetupContext,
  } from '@vue/composition-api'

type Props = {
  type: boolean;
};

export default defineComponent({
  props: {
    is_shown: {
      type:     Boolean,
      required: true,
    }
  },
  setup(props, context) {
    const closeModal = () => {
      context.emit('close')
    }

    return {
      closeModal,
    }
  }
})
</script>
