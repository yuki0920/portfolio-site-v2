<template>
  <v-tabs v-model="currentTab" show-arrows :grow="$vuetify.breakpoint.mdAndDown">
    <v-tab>About me</v-tab>
    <v-tab>Portfolio</v-tab>
    <v-tab class="font-weight-black primary--text">Hire me</v-tab>
  </v-tabs>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions('custom', ['setTab']),
  },
  computed: {
    ...mapGetters('custom', ['tab']),
    currentTab: {
      get: function () {
        return this.tab
      },
      set: function (newValue) {
        this.setTab(newValue)
      },
    },
  },
}
</script>

<style>
</style>